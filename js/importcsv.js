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
}