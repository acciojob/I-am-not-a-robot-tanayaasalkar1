// Select images
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");

let imgArr = [img1, img2, img3, img4, img5];


// Select random image for duplicate
let randomIndex = Math.floor(Math.random() * imgArr.length);
let duplicateSource = imgArr[randomIndex].src;

// Create duplicate image
let duplicateImg = document.createElement("img");
duplicateImg.src = duplicateSource;
duplicateImg.className = imgArr[randomIndex].className;


// Add duplicate
imgArr.push(duplicateImg);


// Shuffle
let shuffledArr = [];

while (imgArr.length > 0) {
    let randomIndex = Math.floor(Math.random() * imgArr.length);

    shuffledArr.push(imgArr[randomIndex]);

    imgArr.splice(randomIndex, 1);
}


// Display images
let flex = document.querySelector(".flex");

for (let i = 0; i < shuffledArr.length; i++) {
    flex.append(shuffledArr[i]);
}


// Select elements
let reset = document.getElementById("reset");
let verify = document.getElementById("verify");
let heading = document.getElementById("h");


// Initial state
reset.style.display = "none";
verify.style.display = "none";


// Store selected images
let selectedImages = [];


// Image click
shuffledArr.forEach((img) => {

    img.addEventListener("click", () => {

        if (!selectedImages.includes(img)) {

            selectedImages.push(img);

            img.classList.add("selected");
        }

        // Show Reset after first click
        if (selectedImages.length >= 1) {
            reset.style.display = "block";
        }

        // Show Verify after exactly two clicks
        if (selectedImages.length === 2) {
            verify.style.display = "block";
        }
    });

});


// Verify
verify.addEventListener("click", () => {

    if (selectedImages[0].src === selectedImages[1].src) {

        heading.textContent = "You are a human. Congratulations!";

    } else {

        heading.textContent =
            "We can't verify you as a human. You selected the non-identical tiles.";
    }

    verify.style.display = "none";
});


// Reset
reset.addEventListener("click", () => {

    // Clear selected images
    selectedImages = [];

    // Remove selected class
    shuffledArr.forEach((img) => {
        img.classList.remove("selected");
    });

    // Hide buttons
    reset.style.display = "none";
    verify.style.display = "none";

    // Restore initial heading
    heading.textContent =
        "Please click on the identical tiles to verify that you are not a robot.";
});