const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

const getRandomNumber = () => {
    console.log(Math.floor(Math.random() * 255));
    return Math.floor(Math.random() * 255);
}

btn.addEventListener("click", () => {
    const rgbColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    document.body.style.backgroundColor = rgbColor;
    color.textContent = rgbColor;
});