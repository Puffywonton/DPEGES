export function arrowBuilder (){
    const element = document.createElement("style")
    element.innerHTML =
        `
            .bar-container {
                clip-path: polygon(0 0, 90% 0%, 100% 50%, 90% 100%, 0 100%);
                border: 4px solid transparent;
            }

        `
    ;
    return(
        element
    )
}