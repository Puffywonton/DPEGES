const DepGes = (containerId, containerHeight, containerWidth) => {
    const Datas = [
        {
            letter: "A",
            cepMin: 0,
            cepMax: 69, //original is 70 but I wan to use inferior equal
            egesMin: 0,
            egesMax: 5, //original 6
            color: '#329837'
        },
        {
            letter: "B",
            cepMin: 70,
            cepMax: 109, //110
            egesMin: 6,
            egesMax: 10, //11
            color: '#57af37'
        },
        {
            letter: "C",
            cepMin: 110,
            cepMax: 179, //180
            egesMin: 11,
            egesMax: 29, //30
            color: '#c6d300'
        },
        {
            letter: "D",
            cepMin: 180,
            cepMax: 249, //250
            egesMin: 30,
            egesMax: 49, //50
            color: '#f2e500'
        },
        {
            letter: "E",
            cepMin: 250,
            cepMax: 329, //330
            egesMin: 50,
            egesMax: 69, //70
            color: '#ffcb03'
        },
        {
            letter: "F",
            cepMin: 330,
            cepMax: 419, //420
            egesMin: 70,
            egesMax: 99, //100
            color: '#f39739'
        },
        {
            letter: "G",
            cepMin: 420,
            cepMax: 1000, //what is max??
            egesMin: 100,
            egesMax: 1000, //what is max ??
            color: '#e4251f'
        },
    ]
    let containerElement = document.getElementById(containerId)
    containerElement.style.height = containerHeight + "px"
    containerElement.style.width = containerWidth + "px"
    let barsContainer = document.createElement("div");
    barsContainer.classList.add('container-bars')
    barsContainer.style.width = (containerWidth * 0.7) + "px"
    let size = 40; //40% to get 100% at the end
    for (let data of Datas) {
        let barContainer = document.createElement("div");
        barContainer.classList.add('container-bar')
        barContainer.style.width = size + "%";
        size = size + 10;
        barsContainer.append(barContainer);
        let barLetter = document.createElement("span");
        barLetter.innerHTML = data.letter;
        barLetter.classList.add('bar-letter');
        let height = 12; //percentage cannot be above 12
        if (data.letter === "C") {
            barLetter.classList.add('bar-letter-focus');
            barContainer.style.height = height * 1.9 + "%" //can modify height of focus element here
            barContainer.style.fontSize = containerHeight / 5 + "px"
            barContainer.innerHTML = `
            <svg 
                width='100%' 
                height='100%' 
                viewBox="500 0 100 100" 
                style='background-color: white'
                preserveAspectRatio="xMaxYMax meet"
            >
                <path 
                    d="M1 1 L 580 1 L 597 50 L 580 99 L 1 99 Z" 
                    vector-effect="non-scaling-stroke" 
                    style="stroke:black;stroke-width:3;fill:`+data.color+`"/>
            </svg>
            `
            let focusInfo = document.createElement("div")
            focusInfo.classList.add("bar-info-focus")
            focusInfo.style.width = (containerWidth * 0.3)-4 + "px"
            focusInfo.style.left = "-" + ((containerWidth * 0.3)-4) + "px"
            barContainer.appendChild(focusInfo)
        } else {
            barContainer.style.height = height + "%"
            barContainer.style.fontSize = containerHeight / 10 + "px"
            barContainer.innerHTML = `
            <svg 
                width='100%' 
                height='100%' 
                viewBox="500 0 100 100" 
                style='background-color: white'
                preserveAspectRatio="xMaxYMax meet"
            >
                <path 
                    d="M2 2 L 580 2 L 597 50 L 580 98 L 2 98 Z" 
                    vector-effect="non-scaling-stroke" 
                    style="stroke:none;stroke-width:3;fill:`+data.color+`"/>
            </svg>
            `
        }
        barContainer.appendChild(barLetter);
    }
    containerElement.appendChild(barsContainer)
}

export default DepGes