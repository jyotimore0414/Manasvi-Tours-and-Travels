const carImages = [
    "",
    "../Images/car2.jpg",
    "../Images/car3.jpg"
];

let currentImage = 0;

function showImage() {
    const carImage = document.getElementById("car1Image");

    if (carImage) {
        carImage.src = carImages[currentImage];
    }
}

function nextImage() {
    currentImage++;

    if (currentImage >= carImages.length) {
        currentImage = 0;
    }

    showImage();
}

function prevImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = carImages.length - 1;
    }

    showImage();
}


document.addEventListener("DOMContentLoaded", function () {

    const carButtons = document.querySelectorAll(".book-car-btn");

    carButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const carName = this.getAttribute("data-booking-name");
            const carImage = this.getAttribute("data-booking-image");
            const carType = this.getAttribute("data-booking-type");

            localStorage.setItem("selectedCarName", carName);
            localStorage.setItem("selectedCarImage", carImage);
            localStorage.setItem("selectedCarType", carType);

        });

    });

});