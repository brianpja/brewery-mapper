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
    zoom: 13,
    center: location,
    scaleControl: true
  });

  $('.search').on('submit', (event) => {
    event.preventDefault();
    createMarkers(googleMap);
    $modal.empty();
  });

  detectBrowser();
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
        animation: google.maps.Animation.DROP,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: '<a href="#myModal">' + marker.title + '</a>'
      })

      marker.addListener('click', (event) => {
        infoWindow.open(map, marker);
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
    const $link = $('<a>').prop('href', breweryObj.url).prop('target', '_blank');
    const $img = $('<img>').prop('src', breweryObj.imgSources.large);
    $link.append($img);
    modal.append($link);

    const $modalTitle = $('<h3>').text(breweryObj.title).addClass('f2');
    modal.append($modalTitle);

  } else {

    const $modalTitle = $('<h3>').addClass('f2');
    const $link = $('<a>').prop('href', breweryObj.url).prop('target', '_blank').text(breweryObj.title);
    $modalTitle.append($link);
    modal.append($modalTitle);
  }

  if (breweryObj.address && breweryObj.zipCode) {
    const $modalAddress = $('<p>');
    const $i = $('<i>').text(breweryObj.address + ', ' + breweryObj.city + ', ' + breweryObj.state + ' ' + breweryObj.zipCode);
    $modalAddress.append($i);
    modal.append($i);
  } else {
    const $modalCity = $('<p>');
    const $i = $('<i>').text(breweryObj.city + ', ' + breweryObj.state);
    $modalCity.append($i);
    modal.append($modalCity);
  }

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
  const $beerMenuTitle = $('<h4>').text('Beer Menu');
  div.append($beerMenuTitle);

  const $beerList = $('<ul>').addClass('beer-list');
  beerArr.forEach((beer) => {
    const $li = $('<li>').text(beer.name + ', ');
    const $i = $('<i>').text(beer.style.name);
    $li.append($i);
    $beerList.append($li);
  });
  $beerList.css({
    'text-align': 'left',
    'width': '90%',
    'margin': 'auto'
  })
  div.append($beerList);
}


function createFilters(modal) {
  const $filters = $('<div>').addClass('filters').text('Show me: ').css({
    'margin-top': '10px',
    'margin-bottom': '20px',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'width': '75%',
  });

  createCheckbox('belgian', ' Belgians ', $filters, 'Belgian');
  createCheckbox('ipa', ' IPAs ', $filters, 'India Pale Ale');
  createCheckbox('sour', ' Sours ', $filters, 'Sour');
  createCheckbox('stout', ' Stouts ', $filters, 'Stout');

  modal.append($filters);
}


function createCheckbox(id, name, parent, searchTerm) {
  const $div = $('<div>').css('display', 'inline-block');
  const $checkbox = $('<input>').prop('type', 'checkbox').prop('class', 'beer-style').prop('id', id);
  const $label = $('<label>').prop('for', id).text(name);

  $checkbox.on('click', (event) => {
    if (event.target.checked) {
      $(`li:contains(${searchTerm})`).css('background-color', '#F4F4F4');
    } else {
      $(`li:contains(${searchTerm})`).css('background-color', '#FBF1A9');
    }
  });

  $div.append($checkbox);
  $div.append($label);
  parent.append($div);
}


function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1) {
    mapdiv.style.width = '90%';
    mapdiv.style.height = '800px';
  } else {
    mapdiv.style.width = '85%';
    mapdiv.style.height = '475px';
  }
}
