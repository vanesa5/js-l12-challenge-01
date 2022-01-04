const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//Randomly Select the Index of an Image
//----------------------------------------

// Button Asyn Function 
const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);

    selectRandomImage(images);
};
//getImage();
//(100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// Select random Image Function
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex); //console should show a random number 0-99 every refresh
    const randomImage = images[randomIndex];
    //console.log(randomImage); //{id: '1020', author: 'Adam Willoughby-Knox', width: 4288, height: 2848, url: 'https://unsplash.com/photos/_snqARKTgoc', …}
    displayImage(randomImage);
};

// Display the Image
//-------------------

//Display Image Function

const displayImage = function (randomImage) {
    const author = randomImage.author
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

// Add a Click Event Handler
//---------------------------------------

button.addEventListener("click", function () {
    getImage();
});

 


