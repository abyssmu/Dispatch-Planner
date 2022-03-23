function addMarker(loc)
{	
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

	lat = loc['lat']
	lng = loc['lng']

	if(loc['type'] == "hub")
	{
		const marker = new google.maps.Marker(
			{
				position: {lat, lng},
				map: map,
				icon: hubIcon
			}
		);

		addInfoWindow(marker, loc)
	}
	
	if(loc['type'] == "station")
	{
		const marker = new google.maps.Marker(
			{
				position: {lat, lng},
				map: map,
				icon: stationIcon
			}
		);

		addInfoWindow(marker, loc)
	}

	if(loc['type'] == "annex")
	{
		const marker = new google.maps.Marker(
			{
				position: {lat, lng},
				map: map,
				icon: annexIcon
			}
		);

		addInfoWindow(marker, loc)
	}

	if(loc['type'] == "hub local")
	{
		const marker = new google.maps.Marker(
			{
				position: {lat, lng},
				map: map,
				icon: hubLocIcon
			}
		);

		addInfoWindow(marker, loc)
	}

	if(loc['type'] == "nfs")
	{
		const marker = new google.maps.Marker(
			{
				position: {lat, lng},
				map: map,
				icon: nfsIcon
			}
		);

		addInfoWindow(marker, loc)
	}

	if(loc['type'] == "smartpost hub")
	{
		const marker = new google.maps.Marker(
			{
				position: {lat, lng},
				map: map,
				icon: smartIcon
			}
		);

		addInfoWindow(marker, loc)
	}

	if(loc['type'] == "substation")
	{
		const marker = new google.maps.Marker(
			{
				position: {lat, lng},
				map: map,
				icon: subStatIcon
			}
		);

		addInfoWindow(marker, loc)
	}
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