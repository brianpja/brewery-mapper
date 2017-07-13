const $script = $('<script>');
$script.attr('src', 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsAPIKey + '&callback=initMap')
$('body').append($script);

const $modal = $('#myModal');
let locationsArray = [];
let markersArray = [];


function initMap() {
  const location = {
    lat: 47.620828,
    lng: -122.332982
  };
  const googleMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: location
  });

  $('.search').on('submit', (event) => {
    event.preventDefault();
    createMarkers(googleMap);
    $modal.empty();
  });
}



function createMarkers(map) {
  const $search = $('.city').val();
  const $xhr = $.getJSON(
    'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/locations?key=' + breweryDBAPIKey + '&locality=' + $search
  );

  $xhr.done(function(obj) {
    if ($xhr.status !== 200) {
      return;
    }
    removeMarkers(markersArray);
    markersArray = [];
    locationsArray = [];
    const breweriesArray = (obj.data)
    breweriesArray.forEach((location) => {
      const marker = new google.maps.Marker({
        position: {
          lat: location.latitude,
          lng: location.longitude
        },
        title: location.brewery.name,
        id: location.breweryId,
        description: location.brewery.description,
        address: location.streetAddress,
        city: location.locality,
        state: location.region,
        zipCode: location.postalCode,
        url: location.website,
        imgSources: location.brewery.images,
        animation: google.maps.Animation.DROP
      });

      const infoWindow = new google.maps.InfoWindow({
        content: marker.title
      })
      marker.addListener('click', (event) => {
        // stopBounce(markersArray);
        console.log(marker);
        infoWindow.open(map, marker);
        // marker.setAnimation(google.maps.Animation.BOUNCE);
        // marker.setLabel('!');
        getBeers(marker);
      });

      markersArray.push(marker);
      setMarkers(markersArray, map);

      const position = {
        lat: location.latitude,
        lng: location.longitude
      }
      locationsArray.push(position);
    });

    let bounds = new google.maps.LatLngBounds();
    extendBounds(locationsArray, bounds);
    map.fitBounds(bounds);
  });
}


function getBeers(marker) {
  const $xhr = $.getJSON(
    'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/brewery/' + marker.id + '/beers?key=' + breweryDBAPIKey
  );

  $xhr.done(function(beerObj) {
    if ($xhr.status !== 200) {
      return;
    }
    const beerData = beerObj.data
    renderModal($modal, marker, beerData);
  });
}


function renderModal(modal, breweryObj, beerArr) {
  modal.empty();
  if (breweryObj.imgSources) {
    const $img = $('<img>').prop('src', breweryObj.imgSources.large);
    modal.append($img);
  }

  const $link = $('<a>').prop('href', breweryObj.url).prop('target', '_blank');
  const $modalTitle = $('<h3>').text(breweryObj.title).addClass('f2');
  $link.append($modalTitle);
  modal.append($link);

  const $modalAddress = $('<p>').text(breweryObj.address + ', ' + breweryObj.city + ', ' + breweryObj.state + ' ' + breweryObj.zipCode);
  modal.append($modalAddress);

  const $modalDescription = $('<p>').text(breweryObj.description);
  modal.append($modalDescription);

  if (beerArr) {
    const $menuDiv = $('<div>').addClass('menu');
    renderMenu($menuDiv, beerArr);
    modal.append($menuDiv);
    createFilters(modal);
  }
}


function extendBounds(array, bounds) {
  if (array.length) {
    array.forEach((location) => {
      bounds.extend(location);
    });
  };
}


function setMarkers(array, map) {
  array.forEach((marker) => {
    marker.setMap(map);
  })
}

function removeMarkers(array) {
  array.forEach((marker) => {
    marker.setMap(null);
  })
}

function stopBounce(array) {
  array.forEach((marker) => {
    marker.setAnimation(null);
  })
}



function renderMenu(div, beerArr) {
  const $beerMenuTitle = $('<h4>').text('Beer Menu').addClass('f3');
  div.append($beerMenuTitle);

  const $beerList = $('<ul>');
  beerArr.forEach((beer) => {
    const $li = $('<li>').text(beer.name + ', ' + beer.style.name);
    $beerList.append($li);
  });
  $beerList.css('text-align', 'left').css('width', '90%').css('margin', 'auto')
  div.append($beerList);
}


function createFilters(modal) {
  const $filters = $('<div>').addClass('filters').text('Show me: ').css('margin-top', '10px');

  createCheckbox('belgian', ' Belgians ', $filters);
  createCheckbox('ipa', ' IPAs ', $filters);
  createCheckbox('sour', ' Sours ', $filters);
  createCheckbox('stout', ' Stouts ', $filters);

  modal.append($filters);
}


function createCheckbox(id, name, parent) {
  const $checkbox = $('<input>').prop('type', 'checkbox').prop('class', 'beer-style').prop('id', id);
  const $label = $('<label>').prop('for', id).text(name);

  $checkbox.on('click', (event) => {
    console.log('clicking');
    alert('Stop being lazy and just read the menu!');
  });

  parent.append($checkbox);
  parent.append($label);
}
