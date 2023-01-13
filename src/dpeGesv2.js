import "./scss/dpeGes.scss"
import dpeGesData from "./dpeGesData"

const isFocusChecker = (dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax) => {
    if (((dpeValue >= dpeMin && dpeValue <= dpeMax) && gesValue <= gesMax) || ((gesValue >= gesMin && gesValue <= gesMax) && dpeValue <= gesMax)) {
        return(true)
    } 
}

const barLetterBuilder = (letter, letterSize, isFocus) => {
    let barLetter = document.createElement("span")
    barLetter.innerHTML = letter
    barLetter.classList.add("dpeGes-barLetter");
    let fontSize = letterSize
    if (isFocus) {
        fontSize = (letterSize * 2)
        barLetter.classList.add("dpeGes-barLetter-focus")
    }
    barLetter.style.fontSize = fontSize + "px"
    return(barLetter)
}

const topLegendBuilder = () => {
    let topLegend = document.createElement("div")
    topLegend.style.width = "50%"
    topLegend.innerHTML = "logement très performant"
    topLegend.style.color = "#329837"
    topLegend.style.fontSize = "12px"
    topLegend.style.fontWeight = "bold"
    return(topLegend)
}
const bottomLegendBuilder = () => {
    let bottomLegend = document.createElement("div")
    bottomLegend.style.width = "50%"
    bottomLegend.innerHTML = "passoire énergétique"
    bottomLegend.style.color = "#e4251f"
    bottomLegend.style.fontSize = "12px"
    bottomLegend.style.fontWeight = "bold"
    return(bottomLegend)

}
const barsGenerator = (dpeValue, gesValue) => {
    const datas = dpeGesData()
    let barBaseWidthIncrementor = 10
    let barBaseWidthSize = 32
    let barsContainer = document.createElement("div")
    barsContainer.classList.add("dpeGes-barsContainer")
    barsContainer.appendChild(topLegendBuilder())
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
            ))
        console.log(data.color, barBaseWidthSize)
        barBaseWidthSize = barBaseWidthSize + barBaseWidthIncrementor;
    }
    barsContainer.appendChild(bottomLegendBuilder())
    return(barsContainer)
}
const barGenerator = (barBaseWidthSize, color, dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax, letter) => {
    let barContainer = document.createElement("div")
    barContainer.classList.add("toto-barContainer")
    barContainer.style.height = "50px"
    let isFocus = false
    let tipWidth = "15"
    if (isFocusChecker(dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax)) {
        isFocus = true
        tipWidth = "30"
        barContainer.style.height = "20%"
        
    } else {
        barContainer.style.height = "10%"
    }
    barContainer.appendChild(arrowBuilder(barBaseWidthSize, tipWidth, color, letter, "60", isFocus))
    if (isFocus) {
        barContainer.appendChild(legendBuilder(dpeValue, gesValue))
    }
    return (barContainer)
}

const arrowBuilder = (bodyWidth, tipWidth, color, letter, letterSize, isFocus) => {
    let arrowContainer = document.createElement("div")
    arrowContainer.classList.add("toto-arrowContainer")
    arrowContainer.appendChild(arrowBodyBuilder(bodyWidth, color, letter, letterSize, isFocus))
    arrowContainer.appendChild(arrowTipBuilder(tipWidth, color, isFocus))
    return(arrowContainer)
}

const arrowBodyBuilder = (width, color, letter, letterSize, isFocus) => {
    let arrowBody = document.createElement("div")
    arrowBody.classList.add("toto-arrowBody")
    arrowBody.style.width = width + "%"
    arrowBody.style.height = "100%"
    arrowBody.style.backgroundColor = color
    if (isFocus) {
        arrowBody.style.borderTop = "solid 2px black"
        arrowBody.style.borderBottom = "solid 2px black"
    }
    arrowBody.appendChild(barLetterBuilder(letter, letterSize, isFocus))
    return(arrowBody)
}

const arrowTipBuilder = (width, color, isFocus) => {
    let arrowTip = document.createElement("div")
    arrowTip.classList.add("toto-arrowTip")
    arrowTip.style.width = width + "px" // link this to the height input
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

const legendBuilder = (dpeValue, gesValue) => {
    let legendContainer = document.createElement("div")
    legendContainer.classList.add("dpeGes-legendContainer")
    legendContainer.appendChild(dpeLegendBuilder(dpeValue))
    legendContainer.appendChild(gesLegendBuilder(gesValue))
    return(legendContainer)
}

const dpeLegendBuilder = (value) => {
    let dpeLegendContainer = document.createElement("div")
    dpeLegendContainer.classList.add("dpeGes-dpeGesLegendContainer")
    let bottomInfo = document.createElement("span")
    bottomInfo.innerHTML = `kWh/m<sup>2</sup>.an`
    bottomInfo.style.fontSize = "12px"
    dpeLegendContainer.appendChild(bottomInfo)
    let topInfo = document.createElement("span")
    topInfo.style.fontSize = "11px"
    topInfo.style.paddingTop = "5px"
    topInfo.innerHTML = "consommation"
    dpeLegendContainer.appendChild(topInfo)
    let legendValue = document.createElement("span")
    legendValue.style.fontSize = "45px"
    legendValue.innerHTML = value
    legendValue.style.paddingTop = "10px"
    dpeLegendContainer.appendChild(legendValue)
    return(dpeLegendContainer)
}
const gesLegendBuilder = (value) => {
    let gesLegendContainer = document.createElement("div")
    gesLegendContainer.classList.add("dpeGes-dpeGesLegendContainer")
    let bottomInfo = document.createElement("span")
    bottomInfo.innerHTML = `kgCO<sub>2</sub>/m<sup>2</sup>.an`
    bottomInfo.style.fontSize = "12px"
    gesLegendContainer.appendChild(bottomInfo)
    let topInfo = document.createElement("span")
    topInfo.style.fontSize = "11px"
    topInfo.style.paddingTop = "5px"
    topInfo.innerHTML = "émissions"
    gesLegendContainer.appendChild(topInfo)
    let legendValue = document.createElement("span")
    legendValue.style.fontSize = "45px"
    legendValue.innerHTML = value
    legendValue.style.paddingTop = "10px"
    gesLegendContainer.appendChild(legendValue)
    return(gesLegendContainer)
} //regroup geslegend and dpe legend into one maybe ?

const dpeGesv2 = ({containerId: containerId, dpeValue: dpeValue, gesValue: gesValue, }) => {
    let containerElement = document.getElementById(containerId)
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("dpeGes-main-container")
    mainContainer.appendChild(barsGenerator(dpeValue, gesValue))
    containerElement.appendChild(mainContainer)
}

export default dpeGesv2