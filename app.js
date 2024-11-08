let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const resetgame = () => {
  turn0 = true;
  enablebox();
  msgcontainer.classList.add("hide");
};
const disablebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  msg.innerText = "Winner is " + winner;
  msgcontainer.classList.remove("hide");
  disablebox();
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;

    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value)
        console.log("winner", pos1value);
      showwinner(pos1value);
    }
  }
};
newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
