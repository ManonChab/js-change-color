import { changeStyles } from "./partTwo.js";

function clickToChange () {
    let button = document.querySelector(".button");
    return button.addEventListener("click", changeStyles);
}
clickToChange();