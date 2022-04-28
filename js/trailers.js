class Load
{
    origin = 0;
    destination = 0;
    percentage = 0;
    packages = 0;
    due = "";
}

class Trailer
{
    number = 0;
    isEmpty = true;
    loads = [];
    origin = 0;
    destination = 0;
    percentage = 0;
    packages = 0;
    due = "";
    currentLocation = 0;

    constructor(number = 0, isEmpty = true, loads = [],
            origin = 0, destination = 0, percentage = 0,
            packages = 0, due = "", currentLocation = 0)
    {
        this.number = number;
        this.isEmpty = isEmpty;
        this.loads = loads;
        this.origin = origin;
        this.destination = destination;
        this.percentage = percentage;
        this.packages = packages;
        this.due = due;
        this.currentLocation = currentLocation;
    }
}

var trailers = []