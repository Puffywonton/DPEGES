import cepEges from "./cepEges"
import DepGes from "./DepGes"

export function params() { 
    const createBtn = document.getElementById("createButton")
    createBtn.addEventListener("click", (e)=> {
        let dpeValue = document.getElementById('dpeInput').value
        let gesValue = document.getElementById('gesInput').value
        let heightValue = document.getElementById('heightInput').value
        let widthValue = document.getElementById('widthInput').value
        // cepEges("cepeges", dpeValue, gesValue)
        DepGes("DepGes", heightValue, widthValue, dpeValue, gesValue)
    })
}