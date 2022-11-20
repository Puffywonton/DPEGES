import depGesData from "./depGesData"
import depGesParamsData from "./depGesParamsData"

// top and bottom legend builder:
const topBottomLegendBuilder = (containerWidth, containerHeight, barsContainerProportion, className, innerText) => {
    let legend = document.createElement("span")
    legend.style.width = (containerWidth * barsContainerProportion) + "px"
    legend.style.fontSize = containerHeight / 45 + "px"
    legend.classList.add(className)
    legend.innerHTML = innerText
    return(legend)
}

// side legend builder
const sideLegendBuilder = (containerWidth, containerHeight, barsContainerProportion) => {
    let sideLegend = document.createElement("span")
    sideLegend.style.width = (containerWidth * (1 - barsContainerProportion) - 7) + "px"
    sideLegend.style.height = (containerHeight / 5) + "px"
    sideLegend.style.fontSize = containerHeight / 45 + "px"
    sideLegend.classList.add("side-legend")
    sideLegend.innerHTML = "passoire énergétique"
    return(sideLegend)
}

// focus info builder both for dpe & ges
const dpeGesInfoBuilder = (containerHeight, infoClassName, spanClassName, spanValue, legendClassList, legendInnerHtml) => {
    let info = document.createElement("div")
    info.style.fontSize = containerHeight / 45 + "px"
    info.classList.add(infoClassName)
    let infoSpan = document.createElement("span")
    infoSpan.classList.add(spanClassName)
    infoSpan.style.fontSize = containerHeight / 13 + "px"
    infoSpan.innerHTML = spanValue
    info.appendChild(infoSpan)
    let infoLegend = document.createElement("span")
    infoLegend.classList.add(legendClassList)
    infoLegend.innerHTML = legendInnerHtml
    info.appendChild(infoLegend)
    return(info)
}

// to check if bar should be in focus or not
const isFocusChecker = (cepValue, cepMin, cepMax, egesValue, egesMin, egesMax ) => {
    if (((cepValue >= cepMin && cepValue <= cepMax) && egesValue <= egesMax) || ((egesValue >= egesMin && egesValue <= egesMax) && cepValue <= cepMax)) {
        return(true)
    } 
}

// to build the side panels containing the focus info
const focusInfoBuilder = (containerWidth, barsContainerProportion, dpeInfoBuilder, gesInfoBuilder) => {
    let focusInfo = document.createElement("div")
    focusInfo.classList.add("bar-info-focus")
    focusInfo.style.width = (containerWidth * (1 - barsContainerProportion))-4 + "px"
    focusInfo.style.left = "-" + ((containerWidth * (1 - barsContainerProportion))-4) + "px"
    focusInfo.appendChild(dpeInfoBuilder)
    focusInfo.appendChild(gesInfoBuilder)
    return(focusInfo)
}

// to build the bar letter
const barLetterBuilder = (letter, className, containerHeight, factor) => {
    let barLetter = document.createElement("span")
    barLetter.innerHTML = letter
    barLetter.classList.add(className);
    barLetter.style.fontSize = containerHeight / factor + "px"
    return(barLetter)
}

// to assemble the bar
const barContainerBuilder = (barContainerWidthSize, isFocusChecker, focusInfoBuilder, letter, color, containerHeight ) => {
    let styleStroke = "stroke:none"
    let height = 12; //percentage cannot be above 12
    let barContainer = document.createElement("div")
    barContainer.classList.add('container-bar')
    barContainer.style.width = barContainerWidthSize + "%";
    if (isFocusChecker) {
        styleStroke = "stroke:black"
        barContainer.style.height = height * 1.6 + "%" //can modify height of focus element here
        barContainer.appendChild(focusInfoBuilder)
        barContainer.appendChild(barLetterBuilder(letter, "bar-letter-focus", containerHeight, 5))
    } else {
        barContainer.style.height = height + "%"
        barContainer.appendChild(barLetterBuilder(letter, "bar-letter", containerHeight, 10))
    }
    barContainer.insertAdjacentHTML("afterbegin",  
        `
        <svg 
            width='100%' 
            height='100%' 
            viewBox="700 0 100 100" 
            style='background-color: white'
            preserveAspectRatio="xMaxYMax meet"
        >
            <path 
                d="M1 1 L 780 1 L 797 50 L 780 99 L 1 99 Z" 
                vector-effect="non-scaling-stroke" 
                style="`+styleStroke+`;stroke-width:3;fill:`+color+`"/>
        </svg>
        `
        //add variable d
    )
    return(barContainer)
}

const barsContainerBuilder = (containerWidth, containerHeight, barsContainerProportion, cepValue, egesValue) => {
    const datas = depGesData()
    let barContainerWidthSize = (100 - (datas.length - 1) * 10) // datas length must be inferior to 10 *might be stupid maybe delete
    let barContainerWidthIncrementor = 10
    let barsContainer = document.createElement("div");
    barsContainer.classList.add('container-bars')
    barsContainer.style.width = (containerWidth * barsContainerProportion) + "px"
    for (let data of datas) {
        barsContainer.append(barContainerBuilder(
            barContainerWidthSize,
            isFocusChecker(
                cepValue,
                data.cepMin,
                data.cepMax,
                egesValue,
                data.egesMin,
                data.egesMax
            ),
            focusInfoBuilder(
                containerWidth,
                barsContainerProportion,
                dpeGesInfoBuilder( //adding dpe info
                    containerHeight,
                    "focus-dpe-info",
                    "span", //might need to modify css classname very confusing
                    cepValue,
                    "focus-legend",
                    `kWh/m<sup>2</sup>.an`
                ),
                dpeGesInfoBuilder( //adding ges info
                    containerHeight,
                    "focus-ges-info",
                    "span",//might need to modify css classname very confusing
                    egesValue,
                    "focus-legend",
                    `kgCO<sub>2</sub>/m<sup>2</sup>.an`
                ),
            ),
            data.letter,
            data.color,
            containerHeight
        ))
        barContainerWidthSize = barContainerWidthSize + barContainerWidthIncrementor;
    }
    return(barsContainer)
}

const DepGes = (containerId, containerWidth, containerHeight, cepValue, egesValue) => {
    let barsContainerProportion = 0.6
    let containerElement = document.getElementById(containerId)
    containerElement.style.width = containerWidth + "px"
    containerElement.style.height = containerHeight + "px"
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container")
    mainContainer.appendChild(topBottomLegendBuilder(containerWidth, containerHeight, barsContainerProportion, "top-legend", "logement très performant"))
    mainContainer.appendChild(sideLegendBuilder(containerWidth, containerHeight, barsContainerProportion))
    mainContainer.appendChild(topBottomLegendBuilder(containerWidth, containerHeight, barsContainerProportion, "bottom-legend", "logement extrêmement consommateur d'énergie"))
    mainContainer.appendChild(barsContainerBuilder(containerWidth, containerHeight, barsContainerProportion, cepValue, egesValue))
    if (containerElement.childNodes.length != 0) {
        containerElement.removeChild(containerElement.firstElementChild)
    }
    containerElement.appendChild(mainContainer)
}

export default DepGes