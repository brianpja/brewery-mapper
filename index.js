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


function renderModal(modal, breweryObj, beerArr) {
  modal.empty();
  modal.css('display', 'block');
  if (breweryObj.imgSources) {
    const $img = $('<img>').prop('src', breweryObj.imgSources.large);
    modal.append($img);
  }

  const $link = $('<a>').prop('href', breweryObj.url).prop('target', '_blank');
  const $modalTitle = $('<h3>').text(breweryObj.title);
  $link.append($modalTitle);
  modal.append($link);

  const $modalAddress = $('<p>').text(breweryObj.address + ', ' + breweryObj.city + ', ' + breweryObj.state + ' ' + breweryObj.zipCode);
  modal.append($modalAddress);

  const $modalDescription = $('<p>').text(breweryObj.description);
  modal.append($modalDescription);

  if (beerArr) {
    const $beerMenuTitle = $('<h4>').text('Beer Menu');
    modal.append($beerMenuTitle);
    const $beerList = $('<ul>');
    beerArr.forEach((beer) => {
      const $li = $('<li>').text(beer.name + ', ' + beer.style.name);
      $beerList.append($li);
    });
    modal.append($beerList);
  }
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
        imgSources: location.brewery.images
      });

      marker.addListener('click', (event) => {
        getBeers(marker);
      });

      markersArray.push(marker);
      populateMap(markersArray, map);

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


function extendBounds(array, bounds) {
  if (array.length) {
    array.forEach((location) => {
      bounds.extend(location);
    });
  };
}


function populateMap(array, map) {
  array.forEach((marker) => {
    marker.setMap(map);
  })
}

function filterBreweries() {
  console.log('filtering');

};

$('.filters').on('click', (event) => {
  console.log(event.target);
  console.log(event.target.checked);
  if (event.target.checked){
    filterBreweries();
  }
});
