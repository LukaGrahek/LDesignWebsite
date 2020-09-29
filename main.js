let count = 0;
var homePhotos = [
    "photos/whiteandblackkitchentabletvhouse.jpg",
    "photos/brownchairlivingroom.jpg",
    "photos/greencouchhouse.jpg",
    "photos/shower+whitekitchen.png",
    "photos/whitecitybed.jpg"
];

//Changes Home Section Image on Click
function changeImage() {
    if(count < 4) count++;
    else count = 0;

    document.getElementById('123').src=getHomeImage(count);
}

//returns homeImage path
function getHomeImage(imageNum){
    return homePhotos[imageNum];
    
}
