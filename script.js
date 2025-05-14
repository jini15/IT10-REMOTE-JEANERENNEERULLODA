document.addEventListener("DOMContentLoaded", function() {
    const fontSelect = document.getElementById("fontSelect");
    const displayText = document.getElementById("displayText");

    fontSelect.addEventListener("change", function() {
        displayText.style.fontFamily = fontSelect.ariaValueMax;
    });
});