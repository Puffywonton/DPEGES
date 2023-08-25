import download from "downloadjs"
import dpeGes from "./dpeGes"
import * as htmlToImage from 'html-to-image';
import "./scss/demo.scss"

const dateGenerator = () => {
    let currentDate = new Date().toJSON().slice(0, 19);
    return(currentDate)
}

const initDownloadOption = () => {
    let date = dateGenerator()
    let downloadButton = document.getElementById("downloadButton")
    downloadButton.addEventListener("click", (e) => {
        const frame = document.getElementById("dpeGesDemoContainer")
        htmlToImage.toPng(frame)
            .then(function (dataUrl) {
                download(dataUrl, date+"dpeGes.png")
            })
            .catch(function (error) {
                alert("error")
                console.error('oops, something went wrong!', error);
            })
    })
    downloadButton.style.display = "block";
}

const launchDpeGes = (demoContainer, dpeValue, gesValue, heightValue) => {
    let dpeGesDemoContainer = document.getElementById("dpeGesDemoContainer")
    if (dpeGesDemoContainer.childNodes.length != 0) {
        dpeGesDemoContainer.removeChild(dpeGesDemoContainer.firstElementChild)
    }
    dpeGes({ containerId: demoContainer, dpeValue: dpeValue, gesValue: gesValue, stickerHeight: heightValue })
    initDownloadOption()
}

export function dpeGesDemoInit() { 
    let downloadButton = document.getElementById("downloadButton")
    downloadButton.style.display = "none";
    const createBtn = document.getElementById("createButton")
    createBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let dpeValue = document.getElementById('dpeInput').value
        let gesValue = document.getElementById('gesInput').value
        let heightValue = document.getElementById('heightInput').value
        launchDpeGes("dpeGesDemoContainer", dpeValue, gesValue, heightValue)
        // window.scrollTo(0, document.body.scrollHeight);
    })
    launchDpeGes("dpeGesDemoContainer", 12, 50, 600)    
    
}