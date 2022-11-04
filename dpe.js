import graphBuilder from "./graphBuilder"
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
graphBuilder(containerId, value, dpeInfos, "dpe")
}
