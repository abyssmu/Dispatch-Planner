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
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "all",
			"stylers": [{
				"color": "#f2f2f2"
			}]
		}, {
			"featureType": "administrative.province",
			"elementType": "all",
			"stylers": [{
				"color": "#404040"
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "all",
			"stylers": [{
				"color": "#404040"
			}]
		}, {}]
	});

	getLocations()
}