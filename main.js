import './styles/style.css'
import { dpe } from './dpe'
import { ges } from './ges'
import cepEges from './cepEges'
import { params } from './params'
import { screenshot } from './screenshot'
import DepGes from './DepGes'

document.querySelector('#app').innerHTML = `
    <div id="params" class="params">
        <form>
            <div class="values-container">
                <div class="dpe-container">
                    <span>valeur dpe</span>
                    <input type="text" value="12" id="dpeInput"></input>
                </div>
                <div class="ges-container">
                    <span>valeur ges</span>
                    <input type="text" value="50" id="gesInput"></input>
                </div> 
            </div>
            <div class="paramSelector">
                <button id="presetParamBtn">Preset</button>
                <button id="customParamBtn">Custom</button>
            </div>
            <div id="presetParamContainer">
                <div id="stickerRatioContainer">
                    <p>Veuillez choisir le format:</p>
                    <input type="radio" id="stickerRatioSquare"
                    name="ratio" value="square">
                    <label for="stickerRatioSquare">square</label>
                    <input type="radio" id="stickerRatioRectangle"
                    name="ratio" value="rectangle">
                    <label for="stickerRatioRectangle">rectangle</label>
                </div>
                <div id="stickerSizeContainer">
                    <p>Veuillez choisir la taille:</p>
                    <input type="radio" id="stickerSizeSmall"
                    name="size" value="small">
                    <label for="stickerSizeSmall">small</label>
                    <input type="radio" id="stickerSizeMedium"
                    name="size" value="medium">
                    <label for="stickerSizeMedium">medium</label>
                    <input type="radio" id="stickerSizeLarge"
                    name="size" value="large">
                    <label for="stickerSizeLarge">large</label>
                </div>
                <button id="createButton" class="create">create</button>
            </div>
            <div id="customParamContainer">
                <div class="size-container">
                    <span>width</span>
                    <input type="text" value="500" id="widthInput"></input>
                    <span>height</span>
                    <input type="text" value="600" id="heightInput"></input>
                </div>
                <button id="createCustomButton" class="create">create</button>
            </div>
        </form>

        <div>
            <span>SCREENSHOT</span>
            <button id="screenshotButton">CLICK</button>
        </div>
    </div>
    <div id="DepGes" class="depges"></div>
`

// dpe('dpe', 92)
// ges('ges', 40)
params()
screenshot()
// DepGes("DepGes", 600, 500, 12, 12)

// min width seems to be 450



// cepEges("cepeges")
// barBuilder("dpe") 
