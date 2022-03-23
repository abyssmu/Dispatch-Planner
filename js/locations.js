async function getLocations()
{
    fetchURL = "https://abyssmu.github.io/Dispatch-Planner/locations.json"
    locations = await fetch(fetchURL, {method: 'GET'}).then(function(response) {return response.json()})
    
    for(var i = 0; i < locations['locations'].length; ++i)
    {
        addMarker(locations['locations'][i])
    }
}