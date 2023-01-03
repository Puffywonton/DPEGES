# DPE GES

<p align="center">
<img src="https://github.com/puffywonton/DPEGPE/blob/main/public/dpeGes.png?raw=true" width="300">
</p>
## Générateur de graphique DPE GES

Démo : https://puffywonton.github.io/DPEGPE/

NPM package : https://www.npmjs.com/package/dpegpe

## Documentation

```js
dpeGes(id, width, height, dpeValue, gesValue);
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
npm i dpegpe
```

HTML

```html
<div id="dpeGesDemoContainer"></div>
```

JAVASCRIPT

```js
import "dpegpe/styles/style.css";
import dpeGes from "dpegpe";

// ...

dpeGes("dpeGesDemoContainer", 400, 400, 56, 98);
```

## Development

```sh
npm install
npm run dev
```
