import graphBuilder from "./graphBuilder";

export function ges (containerId, value,){
    const gesInfos = [
        {
            letter : 'A',
            range:  '≤ 50',
            rangevalue: {
                start: 0,
                end: 5
            },
            color: '#f5ecfd'
        },
        {
            letter : 'B',
            range:  '6 à 10',
            rangevalue: {
                start: 6,
                end: 10
            },
            color: '#e1c1f8'
        },
        {
            letter : 'C',
            range:  '11 à 20',
            rangevalue: {
                start: 11,
                end: 20
            },
            color: '#d3a8f4'
        },
        {
            letter : 'D',
            range:  '21 à 35',
            rangevalue: {
                start: 21,
                end: 35
            },
            color: '#ca94f2'
        },
        {
            letter : 'E',
            range:  '36 à 55',
            rangevalue: {
                start: 36,
                end: 55
            },
            color: '#b971ee'
        },
        {
            letter : 'F',
            range:  '56 à 80',
            rangevalue: {
                start: 56,
                end: 80
            },
            color: '#a74dea'
        },
        {
            letter : 'G',
            range:  '> 80',
            rangevalue: {
                start: 80,
                end: 250
            },
            color: '#8919de'
        },        
    ]
    graphBuilder(containerId, value, gesInfos, "ges")
}