var totalAmmo = 6;
var maxAmmo = 6;
var currentAmmo = maxAmmo;

function shoot()
{ 
    if(currentAmmo > 0)
    {
        currentAmmo--;
    }
    updatescreen();
}
function updatescreen()
{
    document.getElementById("total-ammo").innerHTML=""+totalAmmo;
    document.getElementById("current-ammo").innerHTML=""+currentAmmo;
}
function getDiff(a,b)
{
    var c=a-b;
    return c;
}
function reload()
{
    var difference = getDiff(maxAmmo, currentAmmo)
    if(totalAmmo>=difference)
    {
        currentAmmo +=difference;
        totalAmmo -= difference;
    }
    else
    {
        currentAmmo += totalAmmo;
        totalAmmo -= totalAmmo;
    }
    updatescreen();
}