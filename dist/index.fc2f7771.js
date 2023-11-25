function changeImage() {
    let array = [
        "slideshow-container",
        "slideshow-container2",
        "slideshow-container3"
    ];
    if (document.getElementById("header").classList.contains(array[0])) {
        document.getElementById("header").classList.remove(array[0]);
        document.getElementById("header").classList.add(array[1]);
        document.getElementById("paragraph").textContent = "2/3";
    } else if (document.getElementById("header").classList.contains(array[1])) {
        document.getElementById("header").classList.remove(array[1]);
        document.getElementById("header").classList.add(array[2]);
        document.getElementById("paragraph").textContent = "3/3";
    } else if (document.getElementById("header").classList.contains(array[2])) {
        document.getElementById("header").classList.remove(array[2]);
        document.getElementById("header").classList.add(array[0]);
        document.getElementById("paragraph").textContent = "1/3";
    }
}

//# sourceMappingURL=index.fc2f7771.js.map
