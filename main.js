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

    document.getElementById('homeimages').src=homePhotos[count];
}

