import depGesData from "./depGesData"
import dpeGesParamsData from "./dpeGesParamsData"

// top and bottom legend builder:
const topBottomLegendBuilder = (containerHeight, className, innerText) => {
    const params = dpeGesParamsData()
    let legendheight = containerHeight / (params.barContainerHeightProportion * 3)
    let legendFontSize = ((containerHeight / params.barContainerHeightProportion) * params.barFocusSizeModifier) * params.infoLegendModifier
    let legend = document.createElement("span")
    legend.style.height = legendheight + "px"
    legend.style.fontSize = legendFontSize + "px"
    legend.classList.add(className)
    legend.innerHTML = innerText
    return(legend)
}

// side legend builder
const sideLegendBuilder = (containerWidth, containerHeight, barsContainerProportion) => {
    const params = dpeGesParamsData()
    let legendFontSize = ((containerHeight / params.barContainerHeightProportion) * params.barFocusSizeModifier) * params.infoLegendModifier
    let legendHeight = (containerHeight / params.barContainerHeightProportion) * 1.6
    let legendBottom = ((containerHeight / params.barContainerHeightProportion) / 1.6 )
    let sideLegend = document.createElement("span")
    sideLegend.style.width = (containerWidth * (1 - barsContainerProportion) - 7) + "px"
    sideLegend.style.height = legendHeight + "px"
    sideLegend.style.bottom = legendBottom + "px"
    sideLegend.style.fontSize = legendFontSize + "px"
    sideLegend.classList.add("side-legend")
    sideLegend.innerHTML = params.sideLegendText
    return(sideLegend)
}

// focus info builder both for dpe & ges
const dpeGesInfoBuilder = (containerHeight, spanValue, legendInnerHtml) => {
    const params = dpeGesParamsData()
    let infoTitleFontSize = ((containerHeight / params.barContainerHeightProportion) * params.barFocusSizeModifier) * params.infoTitleModifier
    let infoValueFontSize = ((containerHeight / params.barContainerHeightProportion) * params.barFocusSizeModifier) * params.infoValueModifier
    let infoLegendFontSize = ((containerHeight / params.barContainerHeightProportion) * params.barFocusSizeModifier) * params.infoLegendModifier
    let info = document.createElement("div")
    info.style.fontSize = infoTitleFontSize + "px"
    info.classList.add("focus-dpe-info")
    let infoSpan = document.createElement("span")
    infoSpan.classList.add("focus-info-span")
    infoSpan.style.fontSize = infoValueFontSize + "px"
    infoSpan.innerHTML = spanValue
    info.appendChild(infoSpan)
    let infoLegend = document.createElement("span")
    infoLegend.classList.add("focus-legend")
    infoLegend.style.fontSize = infoLegendFontSize + "px"
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
const focusInfoBuilder = (containerWidth, containerHeight, barsContainerProportion, dpeLegendHtml, gesLegendHtml, dpeValue, gesValue) => {
    let focusInfo = document.createElement("div")
    focusInfo.classList.add("bar-info-focus")
    focusInfo.style.width = (containerWidth * (1 - barsContainerProportion))-4 + "px"
    focusInfo.style.left = "-" + ((containerWidth * (1 - barsContainerProportion))-4) + "px"
    focusInfo.appendChild(dpeGesInfoBuilder(containerHeight, dpeValue, dpeLegendHtml))
    focusInfo.appendChild(dpeGesInfoBuilder(containerHeight, gesValue, gesLegendHtml))
    return(focusInfo)
}

// to build the bar letter
const barLetterBuilder = (letter, classList, size) => {
    let barLetter = document.createElement("span")
    barLetter.innerHTML = letter
    barLetter.classList.add(classList);
    barLetter.style.fontSize = size + "px"
    return(barLetter)
}

// to assemble the bar
const barContainerBuilder = (barContainerWidthSize, dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax, letter, color, containerHeight, containerWidth ) => {
    let params = dpeGesParamsData()
    let styleStroke = "stroke:none"
    let modifier = params.barFocusSizeModifier
    let height = containerHeight / params.barContainerHeightProportion
    let heightFocus= modifier * height
    let letterSize = height * params.barLetterModifier
    let letterSizeFocus = heightFocus * params.barLetterModifier
    let barContainer = document.createElement("div")
    barContainer.classList.add('container-bar')
    barContainer.style.width = barContainerWidthSize + "%";
    if (isFocusChecker(dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax)) {
        styleStroke = "stroke:black"
        barContainer.style.height = heightFocus + "px"
        barContainer.appendChild(focusInfoBuilder(
            containerWidth,
            containerHeight,
            params.barsContainerProportion,
            params.dpeLegendHtml,
            params.gesLegendHtml,
            dpeValue,
            gesValue,
        ))
        barContainer.appendChild(barLetterBuilder(
            letter,
            "bar-letter-focus",
            letterSizeFocus,
        ))
    } else {
        barContainer.style.height = height + "px"
        barContainer.appendChild(barLetterBuilder(
            letter,
            "bar-letter",
            letterSize,

        ))
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
    const params = dpeGesParamsData()
    let barContainerWidthIncrementor = 10
    let barContainerWidthSize = 40
    let barsContainer = document.createElement("div");
    barsContainer.classList.add('container-bars')
    barsContainer.style.width = (containerWidth * barsContainerProportion) + "px"
    barsContainer.appendChild(topBottomLegendBuilder(containerHeight, "top-legend", params.topLegendText))
    for (let data of datas) {
        barsContainer.append(
            barContainerBuilder(
                barContainerWidthSize,
                cepValue,
                data.cepMin,
                data.cepMax,
                egesValue,
                data.egesMin,
                data.egesMax,
                data.letter,
                data.color,
                containerHeight,
                containerWidth
            )
        )
        barContainerWidthSize = barContainerWidthSize + barContainerWidthIncrementor;
    }
    barsContainer.appendChild(topBottomLegendBuilder(containerHeight, "bottom-legend", params.bottomLegendText))
    return(barsContainer)
}

const DepGes = (containerId, containerWidth, containerHeight, cepValue, egesValue) => {
    let barsContainerProportion = 0.6
    let containerElement = document.getElementById(containerId)
    containerElement.style.width = containerWidth + "px"
    containerElement.style.height = containerHeight + "px"
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container")
    mainContainer.appendChild(sideLegendBuilder(containerWidth, containerHeight, barsContainerProportion))
    mainContainer.appendChild(barsContainerBuilder(containerWidth, containerHeight, barsContainerProportion, cepValue, egesValue))
    if (containerElement.childNodes.length != 0) {
        containerElement.removeChild(containerElement.firstElementChild)
    }
    containerElement.appendChild(mainContainer)
}

export default DepGes