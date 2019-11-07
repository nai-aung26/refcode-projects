

document.addEventListener("DOMContentLoaded", () => {
 
const buttonClass = "box";
const buttons = document.getElementsByClassName(buttonClass);

let turn = 1;

const onButtonClick = (button) => {
  // if (button.innerText === "") {
  //   button.innerText = "X";
  // } else if (button.innerText === "X") {
  //   button.innerText = "O";
  // } else {
  //   button.innerText = "";
  // }

  if (turn % 2 === 1) {
    button.innerText = "X";
    turn++;
  } else {
    button.innerText = "O";
    turn++;
  }
};

for (let i=0; i < buttons.length; i++) {
  const button = buttons[i];
  console.log(button)
  button.onclick = () => onButtonClick(button);
}
});
