const botonRosa = document.querySelector(".botones-rosa");
const botonAzul = document.querySelector(".botones-azul");
const botonRojo = document.querySelector(".botones-rojo");
const botonReset = document.querySelector(".botones-reset");
const body = document.body;

botonRosa.addEventListener("click", function () {
    body.style.backgroundColor = "pink";
});

botonAzul.addEventListener("click", function () {
    body.style.backgroundColor = "blue";
});

botonRojo.addEventListener("click", function () {
    body.style.backgroundColor = "red";
});

botonReset.addEventListener("click", function () {
    body.style.backgroundColor = "white";
});