//I parte, cambiar color y texto a darkblue

console.log("Hello World");

function changeColor(){
    let background =document.getElementById("background");
    return background.style.backgroundColor = "darkblue";
};


function changeText(){
    let text = document.getElementById("text");
    return text.textContent = "darkblue"
}; 

function changeStyles(){
    changeColor(); 
    changeText();
};

export {changeColor, changeText, changeStyles}