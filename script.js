function diffImage(img) 
{
    if(img.src.match(/infinite/)) img.src = "andy.png";
    else img.src = "../media/images/infinite.gif";
    if(img.src.match(/infinite/)) {
        document.body.style.backgroundImage = "url('../media/images/astolfo-wallpaper.webp')";
        document.getElementById('navbar').style.backgroundColor = "#d400b4";
        document.getElementById('bi-container').style.borderColor = "#d400b4";
    }
    else {
        document.body.style.backgroundImage = "none";
        document.getElementById('navbar').style.backgroundColor = "#9d0505";
        document.getElementById('bi-container').style.borderColor = "#9d0505";
    }
}