function addMarker(loc)
{
	radius = 15

	hubIcon = {
		url: "./icons/hubIcon.png",
		scaledSize: new google.maps.Size(radius, radius)
	}

	stationIcon = {
		url: "./icons/stationIcon.png",
		scaledSize: new google.maps.Size(radius, radius)
	}

	if(loc['type'] == "hub")
	{
		const marker = new google.maps.Marker(
			{
				position: [loc['lat'], loc['lng']],
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
				position: [loc['lat'], loc['lng']],
				map: map,
				icon: stationIcon
			}
		);

		addInfoWindow(marker, loc)
	}
}

function addLine(route)
{
	polyline = new google.maps.Polyline(
		{
			path: [route[0].coordinates, route[1].coordinates],
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
			content: "<h3>" + loc.number + "/" + loc.name + "</h3>"
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