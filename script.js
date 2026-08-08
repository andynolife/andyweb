function diffImage(img) 
{
    if(img.src.match(/infinite/)) img.src = "andy.png";
    else img.src = "../media/images/infinite.gif";
    if(img.src.match(/infinite/)) {
        document.body.style.backgroundImage = "url('../media/images/astolfo-wallpaper.png')";
    }
    else document.body.style.backgroundImage = "none";
}