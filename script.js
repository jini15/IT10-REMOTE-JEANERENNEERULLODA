document.addEventListener("DOMContentLoaded", function() {
    const fontSelect = document.getElementById("fontSelect");
    const displayText = document.getElementById("displayText");

    fontSelect.addEventListener("change", function() {
        displayText.style.fontFamily = fontSelect.ariaValueMax;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const fontSelect = document.getElementById("fontSelect");
    const sizeSelect = document.getElementById("sizeSelect");
    const displayText = document.getElementById("displayText");

    fontSelect.addEventListener("change", function() {
        displayText.style.fontFamily = fontSelect.value;
    });

    sizeSelect.addEventListener("change", function() {
        displayText.style.fontFamily = sizeSelect.value;
    });
});
