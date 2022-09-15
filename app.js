const container = document.querySelector("#container");
const input = document.getElementById("input")

calculator.addEventListener("click", clickBox)

function clickBox(e){
    let clickedButton = e.target.textContent;
   
    input.value = clickedButton;
     if(input.value){
        
     }
  
}