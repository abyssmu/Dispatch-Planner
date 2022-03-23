function showRuns(name)
{
    name = name.toUpperCase()

    if(name == "CHAM")
    {
        clearLines()

        CHAMruns(locations)
    }

    if(name == "LNXA")
    {
        clearLines()
    }
}

function findLocation(locs, dest)
{
    result = ""
    locs['locations'].forEach(entry => {        
        if(dest === entry.name.toUpperCase())
        {
            result = entry
        }
    })

    return result
}

function CHAMruns(locs)
{
    destinations = [
        "HART",
        "METU",
        "WOOD",
        "SYRA",
        "HRBG",
        "LEHI",
        "HAGE",
        "GRNB",
        "CHAR",
        "ATLA",
        "MARI",
        "OCAL",
        "NASH",
        "NOKY",
        "COLO",
        "TOLE",
        "CHIC",
        "MEMP",
        "OLIV",
        "STPL",
        "LNXA",
        "KCMO",
        "DALL",
        "FTWO",
        "HOUS",
        "DENV",
        "SALT",
        "PHOE",
        "RLTO",
        "SACR",
        "PORT"
    ]

    destinations.forEach(entry => {
        addLine([findLocation(locations, "CHAM"), findLocation(locations, entry)])
    })
}