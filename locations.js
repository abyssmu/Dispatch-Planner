/*
Source for pulling JSON from URL:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
*/

function getLocations()
{
    locationsText = ""

    let requestURL = "https://abyssmu.github.io/Dispatch-Planner/locations.json"
    let request = new XMLHttpRequest()
    request.open('GET', requestURL)

    request.responseType = 'text'
    request.send()

    request.onload = function()
    {
        locationsText = request.responseText
    }

    return JSON.parse(locationsText)
}