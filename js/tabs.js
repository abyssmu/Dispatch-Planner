function openTab(name, element)
{
    var i, tabContent, tabLinks;

    //Get all tabcontents and set display to invisible
    tabContent = document.getElementsByClassName("tabContent");
    for(i = 0; i < tabContent.length; ++i)
    {
        tabContent[i].style.display = "none";
    }

    //Get all tablinks and set their bg colors default
    tabLinks = document.getElementsByClassName("tabLink");
    for(i = 0; i < tabLinks.length; ++i)
    {
        tabLinks[i].style.backgroundColor = "";
    }

    //Get tabcontent by id name and set display to visible
    document.getElementById(name).style.display = "flex";

    //Set current tablink to "active" background color
    element.style.backgroundColor = "green";
}