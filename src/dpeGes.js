import "./scss/dpeGes.scss"
import dpeGesData from "./dpeGesData"

const isFocusChecker = (dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax) => {
    if (((dpeValue >= dpeMin && dpeValue <= dpeMax) && gesValue <= gesMax) || ((gesValue >= gesMin && gesValue <= gesMax) && dpeValue <= gesMax)) {
        return(true)
    } 
}

const barLetterBuilder = (letter, stickerHeight, isFocus) => {
    let barLetter = document.createElement("span")
    barLetter.innerHTML = letter
    barLetter.classList.add("dpeGes-bar-letter")
    let fontSize = stickerHeight / 10
    if (isFocus) {
        fontSize = (stickerHeight / 5)
        barLetter.classList.add("dpeGes-bar-letter-focus")
    }
    barLetter.style.fontSize = fontSize + "px"
    return(barLetter)
}

const topBottomLegendBuilder = (type, stickerHeight) => {
    const topLegendData = {
        innerHtml: "logement très performant",
        alignItems: "end",
        color: "#329837"
    }
    const bottomLegendData = {
        innerHtml: "passoire énergétique",
        alignItems: "start",
        color: "#e4251f"
    }
    let data = {}
    if (type === "top") {
        data = topLegendData
    } else if (type === "bottom") {
        data = bottomLegendData
    }
    let legendFontSize = stickerHeight / 50
    let legend = document.createElement("div")
    legend.classList.add("dpeGes-top-bottom-legend")
    legend.style.alignItems = data.alignItems
    legend.style.fontSize = legendFontSize + "px"
    legend.innerHTML = data.innerHtml
    legend.style.color = data.color
    return(legend)
}

const barsGenerator = (dpeValue, gesValue, stickerHeight) => {
    const datas = dpeGesData()
    let barBaseWidthIncrementor = 10
    let barBaseWidthSize = 36
    let barsContainer = document.createElement("div")
    barsContainer.classList.add("dpeGes-bars-container")
    barsContainer.appendChild(topBottomLegendBuilder("top", stickerHeight))
    for (let data of datas) {
        barsContainer.append(barGenerator(
            barBaseWidthSize,
            data.color,
            dpeValue,
            data.cepMin,
            data.cepMax,
            gesValue,
            data.egesMin,
            data.egesMax,
            data.letter,
            stickerHeight,
            ))
        barBaseWidthSize = barBaseWidthSize + barBaseWidthIncrementor;
    }
    barsContainer.appendChild(topBottomLegendBuilder("bottom", stickerHeight))
    return(barsContainer)
}
const barGenerator = (barBaseWidthSize, color, dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax, letter, stickerHeight) => {
    let barContainer = document.createElement("div")
    barContainer.classList.add("dpeGes-bar-container")
    let isFocus = false
    let tipWidth = "15"
    if (isFocusChecker(dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax)) {
        isFocus = true
        tipWidth = "30"
        barContainer.style.height = "22%"
        
    } else {
        barContainer.style.height = "11%"
    }
    barContainer.appendChild(arrowBuilder(barBaseWidthSize, tipWidth, color, letter, stickerHeight, isFocus))
    if (isFocus) {
        barContainer.appendChild(legendBuilder(dpeValue, gesValue, stickerHeight))
    }
    return (barContainer)
}

const arrowBuilder = (bodyWidth, tipWidth, color, letter, stickerHeight, isFocus) => {
    let arrowContainer = document.createElement("div")
    arrowContainer.classList.add("dpeGes-arrow-container")
    arrowContainer.appendChild(arrowBodyBuilder(bodyWidth, color, letter, stickerHeight, isFocus))
    arrowContainer.appendChild(arrowTipBuilder(tipWidth, color, isFocus))
    return(arrowContainer)
}

const arrowBodyBuilder = (width, color, letter, stickerHeight, isFocus) => {
    let arrowBody = document.createElement("div")
    arrowBody.classList.add("dpeGes-arrow-body")
    arrowBody.style.width = width + "%"
    arrowBody.style.backgroundColor = color
    if (isFocus) {
        arrowBody.style.borderTop = "solid 2px black"
        arrowBody.style.borderBottom = "solid 2px black"
    }
    arrowBody.appendChild(barLetterBuilder(letter, stickerHeight, isFocus))
    return(arrowBody)
}

const arrowTipBuilder = (width, color, isFocus) => {
    let arrowTip = document.createElement("div")
    arrowTip.classList.add("dpeGes-arrow-tip")
    arrowTip.style.width = width + "px"
    let styleStroke = "none"
    if (isFocus) {
       styleStroke = "black"
    }
    arrowTip.insertAdjacentHTML('afterbegin',
        `
        <svg 
            height='100%'
            width='100%' 
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <path 
                d="M 0 0 L 97 50 L 0 100 " 
                vector-effect="non-scaling-stroke"
                style="stroke:`+styleStroke+`;stroke-width:2;fill:`+color+`"
            />
        </svg>
        `
    )
    return(arrowTip)
}

const legendBuilder = (dpeValue, gesValue, stickerHeight) => {
    let legendContainer = document.createElement("div")
    legendContainer.classList.add("dpeGes-focus-legend-container")
    legendContainer.appendChild(dpeGesLegendBuilder("dpe", dpeValue, stickerHeight))
    legendContainer.appendChild(dpeGesLegendBuilder("ges", gesValue, stickerHeight))
    return(legendContainer)
}

const dpeGesLegendBuilder = (type, value, stickerHeight) => {
    let topFontSize = stickerHeight / 53
    let bottomFontSize = stickerHeight / 48
    let valueFontSize = stickerHeight / 12
    const dpeData = {
        topInfoSpan: "consommation",
        bottomInfoSpan: `kWh/m<sup>2</sup>.an`
    }
    const gesData = {
        topInfoSpan: "émissions",
        bottomInfoSpan: `kgCO<sub>2</sub>/m<sup>2</sup>.an`
    }
    let data = {}
    if (type === "dpe") {
        data = dpeData
    } else if (type === "ges") {
        data = gesData
    }
    let container = document.createElement("div")
    container.classList.add("dpeGes-focus-dpeGes-legend-container")
    let bottomInfo = document.createElement("span")
    bottomInfo.innerHTML = data.bottomInfoSpan
    bottomInfo.classList.add("dpeGes-focus-dpeGes-legend-top-bottom-info")
    bottomInfo.style.fontSize = bottomFontSize + "px"
    container.appendChild(bottomInfo)
    let topInfo = document.createElement("span")
    topInfo.classList.add("dpeGes-focus-dpeGes-legend-top-bottom-info")
    topInfo.style.fontSize = topFontSize + "px"
    topInfo.innerHTML = data.topInfoSpan
    container.appendChild(topInfo)
    let legendValue = document.createElement("span")
    legendValue.classList.add("dpeGes-focus-dpeGes-legend-value")
    legendValue.style.fontSize = valueFontSize + "px"
    legendValue.innerHTML = value
    container.appendChild(legendValue)
    return(container)
}


const dpeGes = ({containerId: containerId, dpeValue: dpeValue, gesValue: gesValue, stickerHeight: stickerHeight }) => {
    let containerElement = document.getElementById(containerId)
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("dpeGes-main-container")
    mainContainer.style.height = stickerHeight + "px"
    mainContainer.appendChild(barsGenerator(dpeValue, gesValue, stickerHeight))
    containerElement.appendChild(mainContainer)
}

export default dpeGes