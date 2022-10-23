
export function dpe (containerId, value){
// input
// possibles inputs : 
// - space between bars 
// hauteur
// largeur
// afficher les légendes
// type  : dpe / ges / dpe + ges 
// border
//png / svg / html

// defaults
const dpeInfos = [
 {
 	letter : 'A',
  range:  '≤ 50',
  rangevalue: {
  	start: 0,
    end: 50
  },
  color: '#329837'
 },
 {
 	letter : 'B',
  range:  '51 à 90',
  rangevalue: {
  	start: 51,
    end: 90
  },
  color: '#57af37'
 },
 {
 	letter : 'C',
  range:  '91 à 150',
  rangevalue: {
  	start: 91,
    end: 150
  },
  color: '#c6d300'
 },
 {
 	letter : 'D',
  range:  '151 à 230',
  rangevalue: {
  	start: 151,
    end: 230
  },
  color: '#f2e500'
 },
 {
 	letter : 'E',
  range:  '231 à 330',
  rangevalue: {
  	start: 231,
    end: 330
  },
  color: '#ffcb03'
 },
 {
 	letter : 'F',
  range:  '331 à 450',
  rangevalue: {
  	start: 331,
    end: 450
  },
  color: '#f39739'
 },
 {
 	letter : 'G',
  range:  '> 450',
  rangevalue: {
  	start: 451,
    end: 1000
  },
  color: '#e4251f'
 }
 
]

let containerElement = document.getElementById(containerId)
let barsContainer = document.createElement("div");
barsContainer.classList.add('bars-container')

let size = 20;
for(let dpeInfo of dpeInfos) {
	console.log('dpeInfo', dpeInfo)
  let barContainer = document.createElement("div");
  barContainer.classList.add('bar-container');
  let bar = document.createElement("div");
  bar.classList.add('bar')
  bar.classList.add(dpeInfo.letter + '-bar')
  bar.style.width =  size + "%";
  bar.style.backgroundColor = dpeInfo.color;
  bar.style.setProperty('--color', dpeInfo.color);
  let barRange = document.createElement("span");
  barRange.innerHTML = dpeInfo.range;
  bar.append(barRange);
  barRange.classList.add('range')
	let barLetter = document.createElement("span");
  barLetter.innerHTML = dpeInfo.letter;
  barLetter.classList.add('letter')
  bar.append(barLetter);
  barContainer.append(bar);
  barsContainer.append(barContainer);
  size  = size+10;
  if (value > dpeInfo.rangevalue.start && value < dpeInfo.rangevalue.end){
    let indicator = document.createElement("div");
    indicator.classList.add("indicateur");
    indicator.innerHTML = value;
    barContainer.append(indicator);
  }
}

containerElement.appendChild(barsContainer);
}
