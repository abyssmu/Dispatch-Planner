let map;
let geoCenter = {lat: 39.8097343, lng: -98.5556199}
let usBounds = {north: 52.5, south: 22.5, west: -135, east: -55}

let lines = [];

function initMap()
{
	map = new google.maps.Map(document.getElementById('map'),
	{
		restriction: {
			latLngBounds: usBounds,
			strictBounds: false,
		},
		center: geoCenter,
		zoom: 5,
		disableDefaultUI: true,
		styles: [{
			"featureType": "administrative.country",
			"elementType": "labels",
			"stylers": [{
			  "visibility": "off"
			}]
		  }, {
			"featureType": "administrative.province",
			"elementType": "labels",
			"stylers": [{
			  "visibility": "off"
			}]
		  }, {
			"featureType": "administrative.neighborhood",
			"elementType": "labels",
			"stylers": [{
			  "visibility": "off"
			}]
		  }, {
			"featureType": "administrative.land_parcel",
			"elementType": "labels",
			"stylers": [{
			  "visibility": "off"
			}]
		  }, {
			"featureType": "administrative.locality",
			"elementType": "labels",
			"stylers": [{
			  "visibility": "off"
			}]
		  }, {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [{
			  "visibility": "off"
			}]
		  }, {}]
	});

	locations = getLocations()

	for(var i = 0; i < locations.length; ++i)
	{
		addMarker(locations[i])
	}
}