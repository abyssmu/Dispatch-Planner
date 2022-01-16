/*
Source for pulling JSON from URL:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
*/

async function getLocations()
{    
    fetchURL = "https://abyssmu.github.io/Dispatch-Planner/locations.json"
    response = await fetch(fetchURL, {method: 'GET'})
        .then(function(response) {return response.json()})
    
    return response
}