const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gallery = document.getElementById("gallery");
const area = document.getElementById("area");
const title = document.getElementById("title");

let yesClicked = false;
let noCount = 0;

/* exactly 4 YES photos (YOUR IMAGES — unchanged) */
const yesImages = [
    "IMG_6869.JPG",
    "IMG_6853.JPG",
    "IMG_0084.JPG",
    "IMG_0083.JPG"
];

const noImages = [
    "ed.jpg",
    "unnad.jpg",
    "pleased.jpg"
];


/* ❤️ floating hearts */
const hearts = document.querySelector(".hearts");

function createHeart() {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "❤️";

    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (15 + Math.random() * 25) + "px";
    h.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(h);
    setTimeout(() => h.remove(), 8000);
}
setInterval(createHeart, 300);


/* ❌ NO click (same behavior) */
noBtn.addEventListener("click", () => {

    if (yesClicked) return;

    addImage(noImages[noCount % noImages.length]);
    noCount++;

    const maxX = area.clientWidth - noBtn.offsetWidth;
    const maxY = area.clientHeight - noBtn.offsetHeight;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
});


/* ✅ YES click → PROPOSAL + SLIDESHOW */
yesBtn.addEventListener("click", () => {

    yesClicked = true;

    noBtn.disabled = true;

    /* 💖 BIG PROPOSAL TEXT */
    title.innerText = "Iloveeeyouuuuu mero sanu ❤️🫂";
    title.classList.add("proposal-text");

    /* start slideshow */
    startSlideshow();
});


/* 🖼️ SLIDESHOW FUNCTION */
function startSlideshow() {

    gallery.innerHTML = "";

    const img = document.createElement("img");
    img.classList.add("slide-img");
    gallery.appendChild(img);

    let index = 0;

    function showNext() {
        img.style.opacity = 0;

        setTimeout(() => {
            img.src = yesImages[index];
            img.style.opacity = 1;
            index = (index + 1) % yesImages.length;
        }, 300);
    }

    showNext();
    setInterval(showNext, 2000); // change every 2 sec
}


/* helper (for NO images only) */
function addImage(src) {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
}
