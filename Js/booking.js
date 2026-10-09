
document.addEventListener("DOMContentLoaded", function () {

    const selectedCarName = localStorage.getItem("selectedCarName");
    const selectedCarImage = localStorage.getItem("selectedCarImage");
    const selectedCarType = localStorage.getItem("selectedCarType");

    const carNameElement = document.getElementById("selectedCarName");
    const carImageElement = document.getElementById("selectedCarImage");
    const carTypeElement = document.getElementById("selectedCarType");

    if (selectedCarName && carNameElement) {
        carNameElement.textContent = selectedCarName;
    }

    if (selectedCarImage && carImageElement) {
        carImageElement.src = selectedCarImage;
    }

    if (selectedCarType && carTypeElement) {
        carTypeElement.textContent = selectedCarType;
    }


    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");

    const startDateDisplay = document.getElementById("startDateDisplay");
    const endDateDisplay = document.getElementById("endDateDisplay");

    const totalDays = document.getElementById("totalDays");


    function formatDate(dateValue) {

        if (!dateValue) {
            return "";
        }

        const date = new Date(dateValue + "T00:00:00");

        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }


    function calculateDays() {

        if (!startDate.value || !endDate.value) {
            totalDays.textContent = "0 Days";
            return;
        }

        const start = new Date(startDate.value + "T00:00:00");
        const end = new Date(endDate.value + "T00:00:00");

        if (end < start) {

            alert("Ending date cannot be before starting date.");

            endDate.value = "";
            endDateDisplay.textContent = "Select ending date";
            totalDays.textContent = "0 Days";

            return;
        }

        const difference = end - start;

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        ) + 1;

        totalDays.textContent =
            days + (days === 1 ? " Day" : " Days");
    }


    startDate.addEventListener("change", function () {

        startDateDisplay.textContent =
            formatDate(this.value);

        endDate.min = this.value;

        calculateDays();

    });


    endDate.addEventListener("change", function () {

        endDateDisplay.textContent =
            formatDate(this.value);

        calculateDays();

    });


    const carOptions =
        document.querySelectorAll(".car-option");

    carOptions.forEach(function (button) {

        button.addEventListener("click", function () {

            carOptions.forEach(function (option) {
                option.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    const whatsappBooking =
        document.getElementById("whatsappBooking");


    whatsappBooking.addEventListener("click", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const pickup =
            document.getElementById("pickup").value.trim();

        const destination =
            document.getElementById("destination").value.trim();


        if (name === "") {
            alert("Please enter your name.");
            return;
        }


        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }


        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }


        if (pickup === "") {
            alert("Please enter pickup location.");
            return;
        }


        if (destination === "") {
            alert("Please enter destination.");
            return;
        }


        if (startDate.value === "") {
            alert("Please select starting date.");
            return;
        }


        if (endDate.value === "") {
            alert("Please select ending date.");
            return;
        }


        if (endDate.value < startDate.value) {
            alert("Ending date cannot be before starting date.");
            return;
        }


        const activeCarOption =
            document.querySelector(".car-option.active");


        const carType =
            activeCarOption
                ? activeCarOption.dataset.type
                : selectedCarType || "AC";


        const carName =
            localStorage.getItem("selectedCarName")
            || "Car Not Selected";


        const formattedStartDate =
            formatDate(startDate.value);


        const formattedEndDate =
            formatDate(endDate.value);


        const start =
            new Date(startDate.value + "T00:00:00");

        const end =
            new Date(endDate.value + "T00:00:00");


        const days =
            Math.floor(
                (end - start) /
                (1000 * 60 * 60 * 24)
            ) + 1;


        const message =


            "🚘 *MANASVI TOURS & TRAVELS*\n\n" +

            "📋 *BOOKING REQUEST*\n\n" +

            " *Name:* " + name + "\n" +

            "📞 *Phone:* " + phone + "\n" +

            "📍 *Pickup:* " + pickup + "\n" +

            "🏁 *Destination:* " + destination + "\n\n" +

            "🚗 *Car:* " + carName + "\n" +

            "❄️ *Car Type:* " + carType + "\n\n" +

            "📅 *Starting Date:* " +
            formattedStartDate + "\n" +

            "📅 *Ending Date:* " +
            formattedEndDate + "\n" +

            "🗓️ *Total Days:* " +
            days +
            (days === 1 ? " Day" : " Days");



        const whatsappNumber =
            "917030151303";


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);


        window.open(
            whatsappURL,
            "_blank"
        );

    });

});
