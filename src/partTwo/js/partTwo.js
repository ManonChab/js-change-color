//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js

function changeColor(){
    let background =document.getElementById("background");
    let currentbackground = window.getComputedStyle(background).backgroundColor;

    if (currentbackground === "rgb(255, 0, 0)") {
    return background.style.backgroundColor = "darkblue";
    }

    else if (currentbackground === "rgb(0, 0, 139)") {
    return background.style.backgroundColor = "red";
    }

//     return (currentbackground === "rgb(255, 0, 0)")? background.style.backgroundColor = "darkblue" 
//         : (currentbackground === "rgb(0, 0, 139)")? background.style.backgroundColor = "red":
        
}

function changeText(){
    let text = document.getElementById("text");

    if (text.textContent == "red") {
    return text.textContent = "darkblue";
    }

    else if (text.textContent == "darkblue") {
    return text.textContent = "red";
}};


function changeStyles(){
    changeColor(); 
    changeText();
};

export {changeColor, changeText, changeStyles}