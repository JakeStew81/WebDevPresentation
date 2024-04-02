function init() {
    document.addEventListener('keydown', function(event) {
        if(event.key == "ArrowLeft") {
            moveSlide(-1);
        }
        else if(event.key == "ArrowRight") {
            moveSlide(1);
        }
    });

    console.log("loaded");
    moveSlide(0);
}

let slides = document.getElementsByClassName("slide");
let currentslide = 0;

function moveSlide(direction) {
    console.log("moved " + direction);
    if (currentslide + direction < slides.length && currentslide + direction >= 0) {
        currentslide += direction;
    }
    slides[currentslide].style.display = "block";
    for(let a = 0; a < slides.length; a++) {
        if(a != currentslide) {
            slides[a].style.display = "none";
            console.log("Slide " + a + " hidden");
        }
    }
}
window.onload = init;