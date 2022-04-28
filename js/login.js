function login()
{
    var pass = document.getElementById("facilitypassword").value;

    if(pass == "")
    {
        alert('Password is blank!');
        return;
    }

    if(pass == "seanrulz")
    {
        alert('Damn right he does!');
    }

    pass = 0;
    document.getElementById("facilitypassword").value = "";
}