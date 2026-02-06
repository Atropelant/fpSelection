document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const indicators = document.querySelectorAll(".indicators li");
    const numberDisplay = document.querySelector(".indicators .number");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = Array.from(items).findIndex(item => item.classList.contains("active"));

    function updateCarousel(index) {
        items.forEach(item => item.classList.remove("active"));
        indicators.forEach(indicator => indicator.classList.remove("active"));

        items[index].classList.add("active");
        indicators[index].classList.add("active");
        numberDisplay.textContent = String(index + 1).padStart(2, "0");
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel(currentIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function () {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });
});