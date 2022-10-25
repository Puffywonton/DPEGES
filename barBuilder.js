import { arrowBuilder } from "./arrowBuilder";

export function barBuilder (){
    // let containerElement = document.getElementById(containerId)
    let pizza = document.createElement("div");
    pizza.classList.add("bar-container")
    pizza.style.backgroundColor = "black";
    // pizza.classList.add("temp")
    // containerElement.appendChild(pizza);
    pizza.appendChild(arrowBuilder())
    return(
        pizza
    )
}