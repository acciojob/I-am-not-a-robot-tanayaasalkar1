let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");

let imgArr = [img1, img2, img3, img4, img5];

// Get the source of a randomly selected image
let randomIndex = Math.floor(Math.random() * imgArr.length);
let duplicateSource = imgArr[randomIndex].src;

// Create the sixth image
let duplicateImg = document.createElement("img");
duplicateImg.src = duplicateSource;

// Give it the same class as the original image
duplicateImg.className = imgArr[randomIndex].className;

// Add duplicate to array
imgArr.push(duplicateImg);


// Shuffle the six images
let shuffledArr = [];

while (imgArr.length > 0) {
    let randomIndex = Math.floor(Math.random() * imgArr.length);

    shuffledArr.push(imgArr[randomIndex]);

    imgArr.splice(randomIndex, 1);
}


// Display shuffled images
let flex = document.querySelector(".flex");

for (let i = 0; i < shuffledArr.length; i++) {
    flex.append(shuffledArr[i]);
}


// Buttons and message
let reset = document.getElementById("reset");
let verify = document.getElementById("verify");
let para = document.getElementById("para");

reset.style.display = "none";
verify.style.display = "none";


// Selected images
let selectedImages = [];


// Image click
shuffledArr.forEach((img) => {

    img.addEventListener("click", () => {

        // Don't allow the same tile to be selected twice
        if (!selectedImages.includes(img)) {

            selectedImages.push(img);

            img.classList.add("selected");
        }

        // Show Reset after first selection
        if (selectedImages.length >= 1) {
            reset.style.display = "block";
        }

        // Show Verify only after exactly two selections
        if (selectedImages.length === 2) {
            verify.style.display = "block";
        }
    });

});


// Reset
reset.addEventListener("click", () => {

    selectedImages = [];

    shuffledArr.forEach((img) => {
        img.classList.remove("selected");
    });

    reset.style.display = "none";
    verify.style.display = "none";

    para.textContent = "";
});


// Verify
verify.addEventListener("click", () => {

    if (selectedImages[0].src === selectedImages[1].src) {

        para.textContent = "You are a human. Congratulations!";

    } else {

        para.textContent =
            "We can't verify you as a human. You selected the non-identical tiles.";
    }

    verify.style.display = "none";
});