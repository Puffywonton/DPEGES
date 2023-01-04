import { dpeGesDemoInit } from './dpeGesDemoInit'

document.querySelector('#app').innerHTML = `
    <h1>Générateur d'étiquettes DPE/GES</h1>
    <div id="params" class="params">
        <span class="instructions">Entrez les valeurs DPE et GES:</span>
        <div class="values-container">
            <div class="dpe-container">
                <label for="dpeInput">valeur du DPE</label>
                <input type="text" value="12" id="dpeInput"></input>
            </div>
            <div class="ges-container">
                <label for="gesInput">valeur du GES</label>
                <input type="text" value="50" id="gesInput"></input>
            </div>
        </div>
        <div class="param-selector">
            <button class="param-selector-button" id="presetParamBtn">dimension prédéfinie</button>
            <button class="param-selector-button" id="customParamBtn">dimension personnalisée</button>
        </div>
        <div class="preset-param-container" id="presetParamContainer">
            <form>
                <span class="instructions">Format:</span>
                <div class="sticker-ratio-container" id="stickerRatioContainer">
                    <input type="radio" id="stickerRatioSquare"
                    name="ratio" value="square" required="required" checked="checked">
                    <label for="stickerRatioSquare">carré</label>
                    <input type="radio" id="stickerRatioRectangle"
                    name="ratio" value="rectangle">
                    <label for="stickerRatioRectangle">rectangle</label>
                </div>
                <span class="instructions">Taille:</span>
                <div class="sticker-size-container" id="stickerSizeContainer">
                    <input type="radio" id="stickerSizeSmall"
                    name="size" value="small" >
                    <label for="stickerSizeSmall">petit</label>
                    <input type="radio" id="stickerSizeMedium"
                    name="size" value="medium" required="required" checked="checked">
                    <label for="stickerSizeMedium">moyen</label>
                    <input type="radio" id="stickerSizeLarge"
                    name="size" value="large">
                    <label for="stickerSizeLarge">grand</label>
                </div>               
                <button id="createButton" class="create-button">générer</button>
            </form>
        </div>
        <div id="customParamContainer">
            <div class="custom-size-container">
                <label for="widthInput" class="instructions">Largeur: </label>
                <input type="text" value="400" id="widthInput"></input>
                <label for="heightInput" class="instructions">Hauteur: </label>
                <input type="text" value="400" id="heightInput"></input>
            </div>
            <button id="createCustomButton" class="create-button">générer</button>
        </div>
    </div>
    <div id="dpeGesDemoContainer" class="dpeges-demo-container"></div>
    <button class="download-button" id="downloadButton">télécharger</button>
`
dpeGesDemoInit()

