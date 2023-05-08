const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");
const btn = document.querySelector('#btn');

const getRandomNumber = () => {    
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', () => {
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[getRandomNumber()];        
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});