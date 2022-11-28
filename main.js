import './styles/style.css'
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
        <span class="instructions">Choisissez entre des dimensions prédéfinies ou personalisées:</span>
        <div class="param-selector">
            <button class="param-selector-button" id="presetParamBtn">dimension prédéfinie</button>
            <button class="param-selector-button" id="customParamBtn">dimension personnalisée</button>
        </div>
        <div class="preset-param-container" id="presetParamContainer">
            <form>
                <span class="instructions">Selectionnez le format:</span>    
                <div class="sticker-ratio-container" id="stickerRatioContainer">
                    <input type="radio" id="stickerRatioSquare"
                    name="ratio" value="square" required="required">
                    <label for="stickerRatioSquare">carré</label>
                    <input type="radio" id="stickerRatioRectangle"
                    name="ratio" value="rectangle">
                    <label for="stickerRatioRectangle">rectangle</label>
                </div>
                <span class="instructions">Selectionnez la taille:</span>
                <div class="sticker-size-container" id="stickerSizeContainer">
                    <input type="radio" id="stickerSizeSmall"
                    name="size" value="small" required="required">
                    <label for="stickerSizeSmall">petit</label>
                    <input type="radio" id="stickerSizeMedium"
                    name="size" value="medium">
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
                <label for="widthInput">largeur</label>
                <input type="text" value="500" id="widthInput"></input>         
                <label for="heightInput">hauteur</label>
                <input type="text" value="600" id="heightInput"></input>
            </div>
            <button id="createCustomButton" class="create-button">générer</button>
        </div>
    </div>
    <div id="dpeGesDemoContainer" class="dpegesDemoContainer"></div>
    <button class="download-button" id="downloadButton">télécharger</button>
`
dpeGesDemoInit()

