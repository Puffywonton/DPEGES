# DPE GES

<p align="center">
<img src="https://github.com/puffywonton/DPEGES/blob/main/src/public/dpeGes.png?raw=true" width="300">
</p>

## Générateur d'étiquettes DPE/GES

Ce module npm a été conçu pour simplifier le processus de création d'étiquettes énergétiques réactives pour les applications Web. il génère automatiquement des étiquettes énergétiques au chargement de la page. Grâce à sa conception réactive, les étiquettes s'adaptent sans effort à différentes tailles d'écran, garantissant ainsi que votre contenu s'affiche parfaitement sur desktop et mobile.

Démo : https://puffywonton.github.io/DPEGES/

NPM package : https://www.npmjs.com/package/dpeges

## Documentation

```js
dpeGes({
  containerId: "containerName",
  dpeValue: 56,
  gesValue: 98,
  stickerHeight: 600,
});
```

| Input    | Description                      |
| -------- | -------------------------------- |
| id       | Id du div container du graphique |
| dpeValue | Valeur du DPE                    |
| gesValue | Valeur des GES                   |
| height   | Hauteur du graphique             |

## Utilisation

Installer le package via NPM

```sh
npm i dpeges
```

HTML

```html
<div id="containerName"></div>
```

JAVASCRIPT

```js
import "dpeges/dist/style.css";
import dpeGes from "dpeges";

// ...

dpeGes({
  containerId: "containerName",
  dpeValue: 56,
  gesValue: 98,
  stickerHeight: 600,
});
```
l'étiquette est responsive de 375px (width) jusqu'à l'infini (testé jusqu'à 3000px).
La hauteur doit être défini dans les paramètres (il est recommandé de rester au dessus de 500px pour que l'étiquette reste lisible)

## Development

```sh
npm install
npm run dev
```
