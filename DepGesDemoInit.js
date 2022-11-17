import DepGes from "./DepGes"

export function DepGesDemoInit() { 
    const presetParamBtn = document.getElementById("presetParamBtn")
    const presetParamContainer = document.getElementById("presetParamContainer")
    presetParamContainer.style.display = "none";
    const customParamBtn = document.getElementById("customParamBtn")
    const customParamContainer = document.getElementById("customParamContainer")
    customParamContainer.style.display = "none";
    presetParamBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (presetParamContainer.style.display === "none") {
            presetParamContainer.style.display = "block"
        } else {
            presetParamContainer.style.display = "none"
        }
        if (customParamContainer.style.display === "block") {
            customParamContainer.style.display = "none"
        }
    })
    customParamBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (customParamContainer.style.display === "none") {
            customParamContainer.style.display = "block"
        } else {
            customParamContainer.style.display = "none"
        }
        if (presetParamContainer.style.display === "block") {
            presetParamContainer.style.display = "none"
        }
    })
    const createBtn = document.getElementById("createButton")
    let ratio
    let size
    let stickerRatioContainer = document.getElementById("stickerRatioContainer")
    stickerRatioContainer.addEventListener('change', function (e) {
        ratio = e.target.value;
        console.log(ratio)
    });
    let stickerSizeContainer = document.getElementById("stickerSizeContainer")
    stickerSizeContainer.addEventListener('change', function (e) {
        size = e.target.value;
        console.log(size)
    });
    createBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let dpeValue = document.getElementById('dpeInput').value
        let gesValue = document.getElementById('gesInput').value
        let heightValue = 600
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
        DepGes("DepGes", heightValue, widthValue, dpeValue, gesValue)
    })
    const createCustomBtn = document.getElementById("createCustomButton")
    createCustomBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let dpeValue = document.getElementById('dpeInput').value
        let gesValue = document.getElementById('gesInput').value
        let heightValue = document.getElementById('heightInput').value
        let widthValue = document.getElementById('widthInput').value
        DepGes("DepGes", heightValue, widthValue, dpeValue, gesValue)
    })
}