// Select the five images
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");

// Store images in an array
let imgArr = [img1, img2, img3, img4, img5];

// Select a random image to duplicate
let randomImgIndex = Math.floor(Math.random() * imgArr.length);
let randomImg = imgArr[randomImgIndex];

// Create a separate copy of the duplicate image
let duplicateImg = randomImg.cloneNode(true);

// Add duplicate to array
imgArr.push(duplicateImg);


// Create an empty array for shuffled images
let shuffledArr = [];

// Shuffle the images
while (imgArr.length > 0) {
    let randomIndex = Math.floor(Math.random() * imgArr.length);

    let randomImg = imgArr[randomIndex];

    shuffledArr.push(randomImg);

    // Remove selected image from original array
    imgArr.splice(randomIndex, 1);
}


// Display shuffled images
let flex = document.querySelector(".flex");

for (let i = 0; i < shuffledArr.length; i++) {
    flex.append(shuffledArr[i]);
}


// Select buttons and message
let reset = document.getElementById("reset");
let verify = document.getElementById("verify");
let para = document.getElementById("para");

// Initially hide buttons
reset.style.display = "none";
verify.style.display = "none";


// Store selected images
let selectedImages = [];


// Add click event to every image
shuffledArr.forEach((img) => {

    img.addEventListener("click", () => {

        // Select image only if it is not already selected
        if (!selectedImages.includes(img)) {
            selectedImages.push(img);

            // Highlight image
            img.classList.add("selected");
        }

        // Show Reset after first click
        if (selectedImages.length >= 1) {
            reset.style.display = "block";
        }

        // Show Verify only when exactly two images are selected
        if (selectedImages.length === 2) {
            verify.style.display = "block";
        } else {
            verify.style.display = "none";
        }
    });

});


// Reset button
reset.addEventListener("click", () => {

    // Empty selected images
    selectedImages = [];

    // Remove selected class from all images
    shuffledArr.forEach((img) => {
        img.classList.remove("selected");
    });

    // Hide buttons
    reset.style.display = "none";
    verify.style.display = "none";

    // Clear message
    para.textContent = "";
});


// Verify button
verify.addEventListener("click", () => {

    // Check whether the two selected images have the same image class
    if (
        selectedImages.length === 2 &&
        selectedImages[0].className === selectedImages[1].className
    ) {
        para.textContent = "You are a human. Congratulations!";
    } else {
        para.textContent =
            "We can't verify you as a human. You selected the non-identical tiles.";
    }

    // Hide Verify after verification
    verify.style.display = "none";
});