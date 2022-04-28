function importcsv()
{
    var selected = document.getElementById('csvtype').value;
    var input = document.getElementById('csvinput').value;

    console.log('selected: ' + selected);
    console.log('input: ' + input);

    if(input == "")
    {
        alert('There is nothing in the box!\nPlease export from TMS and copy paste the raw data here.');
        return;
    }

    if(selected == "outbound")
    {
        console.log('importing outbound');
    }
    else if(selected == "dockload")
    {
        console.log('importing dock loading');
    }

    trailer = new Trailer(number = 123456);

    trailers.push(trailer);
    trailers.push(trailer);
    trailers.push(trailer);
    trailers.push(trailer);
    trailers.push(trailer);
    trailers.push(trailer);
    trailers.push(trailer);
    trailers.push(trailer);
    trailers.push(trailer);

    importTrailers();
}

function importTrailers()
{
    var trailersDiv = document.getElementById("trailers");

    trailers.forEach(element => 
    {
        var newTrailerButton = document.createElement("button");

        newTrailerButton.setAttribute('id', element.number);
        newTrailerButton.setAttribute('class', "trailer");
        newTrailerButton.innerHTML = element.number.toString();

        trailersDiv.appendChild(newTrailerButton);
    })
}