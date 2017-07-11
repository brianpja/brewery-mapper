const $modal = $('#myModal');
const $script = $('<script>');
console.log($script);
console.log(googleMapsAPIKey);
$script.attr('src', 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsAPIKey + '&callback=initMap')
$('body').append($script);

function initMap() {
  const location = {
    lat: brewery.data[0].latitude,
    lng: brewery.data[0].longitude
  };
  const googleMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: location
  });


  $('form').on('submit', (event) => {
    event.preventDefault();
    createMarkers(googleMap);
  });
}


function renderModal(modal, breweryObj, beerArr) {
  modal.empty();
  modal.css('display', 'block');
  const $modalTitle = $('<h3>').text(breweryObj.title);
  modal.append($modalTitle);

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
  const $xhr = $.getJSON(
    'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/locations?key=50b605b4069db4a3ee1939892909d000&locality=Seattle'
  );

  $xhr.done(function(data) {
    if ($xhr.status !== 200) {
      return;
    }
    console.log(data);
    const breweriesArray = (data.data)
    console.log(breweriesArray);
    breweriesArray.forEach((location) => {
      var marker = new google.maps.Marker({
        position: {
          lat: location.latitude,
          lng: location.longitude
        },
        title: location.brewery.name,
        id: location.breweryId,
        description: location.brewery.description
      });
      marker.setMap(map);
      marker.addListener('click', (event) => {
        getBeers(marker);
      })
    })
  });
}


function getBeers(marker) {
  const $xhr = $.getJSON(
    'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/brewery/' + marker.id + '/beers?key=50b605b4069db4a3ee1939892909d000'
  );

  $xhr.done(function(beerObj) {
    if ($xhr.status !== 200) {
      return;
    }
    console.log(beerObj);
    const beerData = beerObj.data
    renderModal($modal, marker, beerData);
  });
}
