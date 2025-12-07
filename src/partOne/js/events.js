import { changeColor, changeStyles, changeText } from "./partOne.js";


function clickToChange () {
    let button = document.querySelector(".button");
    return button.addEventListener("click", changeStyles);
}
clickToChange();