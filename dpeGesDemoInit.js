import download from "downloadjs"
import dpeGes from "./dpeGes"
import * as htmlToImage from 'html-to-image';

const launchDpeGes = (demoContainer, heightValue, widthValue, dpeValue, gesValue) => {
    let dpeGesDemoContainer = document.getElementById("dpeGesDemoContainer")
    if (dpeGesDemoContainer.childNodes.length != 0) {
        dpeGesDemoContainer.removeChild(dpeGesDemoContainer.firstElementChild)
    }
    dpeGes(demoContainer, heightValue, widthValue, dpeValue, gesValue)
    initDownloadOption()
}

const displaySwitch = (optionOne, optionTwo) => {
    if (optionOne.style.display === "none") {
            optionOne.style.display = "block"
        } else {
            optionOne.style.display = "none"
        }
        if (optionTwo.style.display === "block") {
            optionTwo.style.display = "none"
        }
}

const initDownloadOption = () => {
    let downloadButton = document.getElementById("downloadButton")
    downloadButton.addEventListener("click", (e) => {
        const frame = document.getElementById("dpeGesDemoContainer")
        htmlToImage.toPng(frame)
            .then(function (dataUrl) {
                download(dataUrl, "dpeGes.png")
            })
            .catch(function (error) {
                alert("error")
                console.error('oops, something went wrong!', error);
            })
    })
    downloadButton.style.display = "block";
}

export function dpeGesDemoInit() { 
    let downloadButton = document.getElementById("downloadButton")
    downloadButton.style.display = "none";
    const presetParamBtn = document.getElementById("presetParamBtn")
    const presetParamContainer = document.getElementById("presetParamContainer")
    presetParamContainer.style.display = "none";
    const customParamBtn = document.getElementById("customParamBtn")
    const customParamContainer = document.getElementById("customParamContainer")
    customParamContainer.style.display = "none";
    presetParamBtn.addEventListener("click", (e) => {
        e.preventDefault()
        displaySwitch(presetParamContainer, customParamContainer)
    })
    customParamBtn.addEventListener("click", (e) => {
        e.preventDefault()
        displaySwitch(customParamContainer, presetParamContainer)
    })
    const createBtn = document.getElementById("createButton")
    let ratio
    let size
    let stickerRatioContainer = document.getElementById("stickerRatioContainer")
    stickerRatioContainer.addEventListener('change', function (e) {
        ratio = e.target.value;
    });
    let stickerSizeContainer = document.getElementById("stickerSizeContainer")
    stickerSizeContainer.addEventListener('change', function (e) {
        size = e.target.value;
    });
    createBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (ratio === undefined || size === undefined) {
            alert("selectionnez format et/ou taille")
            return
        }
        let dpeValue = document.getElementById('dpeInput').value
        let gesValue = document.getElementById('gesInput').value
        let heightValue = 750
        let widthValue
        if (size === "large") {
            heightValue = heightValue * 1.2
        }
        if (size === "small") {
            heightValue = heightValue * 0.8
        }
        if (ratio === "square") {
            widthValue = heightValue 
        }
        if (ratio === "rectangle") {
            widthValue = heightValue * 0.7
        }
        launchDpeGes("dpeGesDemoContainer", heightValue, widthValue, dpeValue, gesValue)
    })
    const createCustomBtn = document.getElementById("createCustomButton")
    createCustomBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let dpeValue = document.getElementById('dpeInput').value
        let gesValue = document.getElementById('gesInput').value
        let heightValue = document.getElementById('heightInput').value
        let widthValue = document.getElementById('widthInput').value
        launchDpeGes("dpeGesDemoContainer", widthValue, heightValue, dpeValue, gesValue)
    })
}