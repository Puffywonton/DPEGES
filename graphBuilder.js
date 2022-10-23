const graphBuilder = (containerId, value, datas, type) => {
    let containerElement = document.getElementById(containerId)
    let barsContainer = document.createElement("div");
    barsContainer.classList.add('bars-container')
    let size = 20;
    for(let data of datas) {
        let barContainer = document.createElement("div");
        barContainer.classList.add('bar-container');
        let bar = document.createElement("div");
        bar.classList.add('bar')
        if (type === "dpe"){
            bar.classList.add("dpe-bar")
        }
        bar.classList.add(data.letter + '-bar')
        bar.style.width =  size + "%";
        bar.style.backgroundColor = data.color;
        bar.style.setProperty('--color', data.color);
        let barRange = document.createElement("span");
        barRange.innerHTML = data.range;
        bar.append(barRange);
        barRange.classList.add('range')
            let barLetter = document.createElement("span");
        barLetter.innerHTML = data.letter;
        barLetter.classList.add('letter')
        bar.append(barLetter);
        barContainer.append(bar);
        barsContainer.append(barContainer);
        size  = size+10;
        if (value > data.rangevalue.start && value < data.rangevalue.end){
            let indicator = document.createElement("div");
            indicator.classList.add("indicateur");
            indicator.innerHTML = value;
            let indicatorLegend = document.createElement("span");
            if( type === "ges"){
                indicatorLegend.innerHTML = 
                `
                    kg<sub>éqCO2</sub>/m<sup>2</sup>.an
                `
            }else{
                indicatorLegend.innerHTML = 
                `
                    kWh<sub>EP</sub>/m<sup>2</sup>.an
                `
            }
            
            indicatorLegend.classList.add("indicateur-legend")
            indicator.appendChild(indicatorLegend)
            barContainer.append(indicator);
        }
    }
    containerElement.appendChild(barsContainer);
}

export default graphBuilder