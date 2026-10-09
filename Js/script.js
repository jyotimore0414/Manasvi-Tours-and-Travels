
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");

    if (navbar && menuToggle) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navbar.classList.toggle("nav-open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        navbar.querySelectorAll("nav a").forEach((link) => {

            link.addEventListener("click", () => {

                navbar.classList.remove("nav-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    document.querySelectorAll(".book-car-btn").forEach((button) => {

        button.addEventListener("click", function () {

            const carName = this.dataset.bookingName;
            const carImage = this.dataset.bookingImage;
            const carType = this.dataset.bookingType;

            if (carName) {
                localStorage.setItem(
                    "selectedCarName",
                    carName
                );
            }

            if (carImage) {
                localStorage.setItem(
                    "selectedCarImage",
                    carImage
                );
            }

            if (carType) {
                localStorage.setItem(
                    "selectedCarType",
                    carType
                );
            }

        });

    });

});


