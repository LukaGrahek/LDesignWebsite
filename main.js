let homeImageCount = 0;
const homePhotosSRC = [
    "photos/whiteandblackkitchentabletvhouse.jpg",
    "photos/brownchairlivingroom.jpg",
    "photos/greencouchhouse.jpg",
    "photos/shower+whitekitchen.png",
    "photos/whitecitybed.jpg"
];

//Changes Home Section Image on Click
function changeImage() {
    if(homeImageCount < 4) homeImageCount++;
    else homeImageCount = 0;

    document.getElementById('homeimages').src=homePhotosSRC[homeImageCount];
}

 //   setInterval(changeImage(), 5000);