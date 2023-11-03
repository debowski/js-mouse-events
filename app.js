
/** @type {HTMLElement} */ /*podanie typu dla zmiennej żeby działało intelisense*/

const img1 = document.querySelector("#obraz1")
const img2 = document.querySelector("#obraz2")


//-------- Sposób 1 --------------
img1.addEventListener('mouseover', () => {
    img1.setAttribute("src", "img/abw.jpg");
})

img1.addEventListener('mouseout', () => {
    img1.setAttribute("src", "img/a.jpg");
})

img1.addEventListener('click', () => {
    img1.setAttribute("src", "img/a.jpg");
})

//---------Sposób 2 --------------
function mouseOver() {
    img2.setAttribute("src", "img/ac.jpg");
}

function mouseOut() {
    img2.setAttribute("src", "img/a.jpg");
}

function mouseClick() {
    img2.setAttribute("src", "img/a.jpg");
}

