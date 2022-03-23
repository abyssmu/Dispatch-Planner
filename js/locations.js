async function getLocations()
{
    fetchURL = "https://abyssmu.github.io/Dispatch-Planner/js/locations.json"
    locations = await fetch(fetchURL, {method: 'GET'}).then(function(response) {return response.json()})
    
    for(var i = 0; i < locations.length; ++i)
    {
        addMarker(locations[i])
    }
}