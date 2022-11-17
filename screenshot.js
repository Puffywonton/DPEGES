import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

export function screenshot() {
let screenContainer = document.getElementById("screenContainer")
const takeScreen = document.getElementById("screenshotButton")
    takeScreen.addEventListener("click", (e) => {
        console.log('hello')
        const frame = document.getElementById("DepGes")
        htmlToImage.toSvg(frame)
            .then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
                // document.body.appendChild(img);
                screenContainer.appendChild(img)
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    })
}