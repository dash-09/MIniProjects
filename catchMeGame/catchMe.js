

const colours = [
     "#F7EC09",
  "#F637EC",
  "#37E2D5",
  "#FF4949",
  "#06FF00",
  "#FF0075",
]

const messages = ["try again", "you can't catch me bitch", "still very close", "you are piece of shit "];

function getRandomColour() {
    return colours[Math.floor(Math.random() * colours.length)];     // math.random takes number from 0 and 1 and (0.1 to 0.68 to 0.9 to 1.0 )
}

function getmessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getmessage());

const btn = document.getElementById("btn");
btn.addEventListener("mouseover", (event) => {
    let top, bottom, left, right;
    top = getRandomNumber(1, 500);
    bottom = getRandomNumber(1, 500);
    left = getRandomNumber(1, 800);
    right = getRandomNumber(1, 800);

    event.target.style.backgroundColor = `${getRandomColour()}`;
    event.target.style.color = "black";

    event.target.style.top = `${top}px`;
    event.target.style.bottom = `${bottom}px`;
    event.target.style.left = `${left}px`;
    event.target.style.right = `${right}px`;

    btn.innerHTML = `${getmessage()}`;
});
 