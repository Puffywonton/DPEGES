const cepEges = (containerId) => {
    let cepValue = 216;
    let egesValue = 50;

    const cepEgesDatas = [
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
    let stickerContainer = document.createElement("div");
    stickerContainer.classList.add('sticker-container')
    let size = 15;
    for(let data of cepEgesDatas) {
        let barContainer = document.createElement("div");
        barContainer.classList.add('bar-container');
        barContainer.style.width =  size + "%";
        size  = size+5;
        let bar = document.createElement("div");
        bar.classList.add('bar')
        bar.classList.add(data.letter + '-bar')
        bar.style.backgroundColor = data.color;
        bar.style.setProperty('--color', data.color);
        let barLetter = document.createElement("span");
        barLetter.innerHTML = data.letter;
        barLetter.classList.add('letter')
        bar.append(barLetter);
        barContainer.append(bar);
        stickerContainer.append(barContainer);
        if(((cepValue >= data.cepMin && cepValue <= data.cepMax) && egesValue <= data.egesMax) || ((egesValue >= data.egesMin && egesValue <= data.egesMax) && cepValue <= data.cepMax)){
            console.log("cep:", cepValue)
            console.log("eges:", egesValue)
            console.log("letter:",data.letter)
            // let indicator = document.createElement("div");
            // indicator.classList.add("indicateur");
            bar.classList.add('focus')
            // indicator.innerHTML = value;
            // barContainer.append(indicator);
        }else{
            bar.classList.add('no-focus')
        }
    }
    containerElement.appendChild(stickerContainer);
}

export default cepEges