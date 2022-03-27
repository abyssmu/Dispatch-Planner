var markerList = []

function addMarker(name)
{
	console.log(name)
	loc = findLocation(locations, name)
	hubRad = 15
	hubIcon = {
		url: "./icons/hubIcon.png",
		scaledSize: new google.maps.Size(hubRad, hubRad)
	}

	notHubRad = 8
	stationIcon = {
		url: "./icons/stationIcon.png",
		scaledSize: new google.maps.Size(notHubRad, notHubRad)
	}

	annexIcon = {
		url: "./icons/stationIcon.png",
		scaledSize: new google.maps.Size(notHubRad, notHubRad)
	}

	hubLocIcon = {
		url: "./icons/stationIcon.png",
		scaledSize: new google.maps.Size(notHubRad, notHubRad)
	}

	nfsIcon = {
		url: "./icons/stationIcon.png",
		scaledSize: new google.maps.Size(notHubRad, notHubRad)
	}

	smartIcon = {
		url: "./icons/stationIcon.png",
		scaledSize: new google.maps.Size(notHubRad, notHubRad)
	}

	subStatIcon = {
		url: "./icons/stationIcon.png",
		scaledSize: new google.maps.Size(notHubRad, notHubRad)
	}

	if(loc['type'] == "hub")
	{
		createMarker(loc, hubIcon)
	}
	else if(loc['type'] == "station")
	{
		createMarker(loc, stationIcon)
	}
	else if(loc['type'] == "annex")
	{
		createMarker(loc, annexIcon)
	}
	else if(loc['type'] == "hub local")
	{
		createMarker(loc, hubLocIcon)
	}
	else if(loc['type'] == "nfs")
	{
		createMarker(loc, nfsIcon)
	}
	else if(loc['type'] == "smartpost hub")
	{
		createMarker(loc, smartIcon)
	}
	else if(loc['type'] == "substation")
	{
		createMarker(loc, subStatIcon)
	}
}

function createMarker(loc, iconType)
{
	lat = loc['lat']
	lng = loc['lng']

	var marker = new google.maps.Marker(
		{
			position: {lat, lng},
			map: map,
			icon: iconType
		}
	)
	markerList.push(marker)

	addInfoWindow(marker, loc)
}

function removeMarker()
{
	markerList.forEach(entry => {
		entry.setMap(null)
	})

	makerList = []
}

function addLine(route)
{
	polyline = new google.maps.Polyline(
		{
			path: [{lat: route[0].lat, lng: route[0].lng}, {lat: route[1].lat, lng: route[1].lng}],
			geodesic: false,
			strokeColor: "black",
			strokeOpacity: 1.0,
			strokeWeight: 2.0,
		}
	);

	polyline.setMap(map)
    lines.push(polyline)
}

function addInfoWindow(marker, loc)
{
	var infoWindow = new google.maps.InfoWindow(
		{
			content: "<h3>" + loc.number + "/" + loc.name.toUpperCase() + "</h3>"
		}
	);

	marker.addListener('mouseover', () => infoWindow.open(map, marker))
	marker.addListener('mouseout', () => infoWindow.close())
	marker.addListener('click', () => showRuns(loc.name))
}

function clearLines()
{
    if(lines.length <= 0) return

    for(var i = 0; i < lines.length; ++i)
    {
        lines[i].setMap(null)
    }
}