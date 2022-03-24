async function getLocations()
{
    fetchURL = "https://abyssmu.github.io/Dispatch-Planner/js/locations.json"
    locations = await fetch(fetchURL, {method: 'GET'}).then(function(response) {return response.json()})
    
    for(var i = 0; i < locations['locations'].length; ++i)
    {
        loc = locations['locations'][i]

        addMarker(loc)

        if(loc.type == "hub")
        {
            menu = document.getElementById("hubs")
        }
        else if(loc.type == "station")
        {
            menu = document.getElementById("stations")
        }
        else if(loc.type == "substation")
        {
            menu = document.getElementById("substations")
        }
        else if(loc.type == "hub local")
        {
            menu = document.getElementById("hublocals")
        }
        else if(loc.type == "annex")
        {
            menu = document.getElementById("annexes")
        }
        else if(loc.type == "smartpost hub")
        {
            menu = document.getElementById("smartposts")
        }
        else if(loc.type == "nfs")
        {
            menu = document.getElementById("nfs")
        }

        element = document.createElement("a")

        element.setAttribute("href", "#")
        element.appendChild(document.createTextNode(loc.number + "/" + loc.name.toUpperCase()))

        menu.appendChild(element)
    }
}