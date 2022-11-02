import cepEges from "./cepEges"

export function params() { 
    const createBtn = document.getElementById("createButton")
    createBtn.addEventListener("click", (e)=> {
        let dpeValue = document.getElementById('dpeInput').value
        let gesValue = document.getElementById('gesInput').value
        cepEges("cepeges", dpeValue, gesValue)
    })
}