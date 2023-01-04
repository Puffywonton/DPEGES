# DPE GES

<p align="center">
<img src="https://github.com/puffywonton/DPEGES/blob/main/public/dpeGes.png?raw=true" width="300">
</p>

## Générateur de graphique DPE GES

Démo : https://puffywonton.github.io/DPEGES/

NPM package : https://www.npmjs.com/package/dpeges

## Documentation

```js
dpeGes({
  containerId: "dpeGesDemoContainer",
  dpeValue: 56,
  gesValue: 98,
  containerWidth: 600,
  containerHeight: 600,
});
```

| Input    | Description                      |
| -------- | -------------------------------- |
| id       | Id du div container du graphique |
| width    | Largeur du graphique             |
| height   | Hauteur du graphique             |
| dpeValue | Valeur du DPE                    |
| gesValue | Valeur des GES                   |

## Utilisation

Installer le package via NPM

```sh
npm i dpeges
```

HTML

```html
<div id="dpeGesDemoContainer"></div>
```

JAVASCRIPT

```js
import "dpeges/dist/style.css";
import dpeGes from "dpeges";

// ...

dpeGes({
  containerId: "dpeGesDemoContainer",
  dpeValue: 56,
  gesValue: 98,
  containerWidth: 600,
  containerHeight: 600,
});
```

## Development

```sh
npm install
npm run dev
```
