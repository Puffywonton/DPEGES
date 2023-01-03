# DPE GES

## Générateur de graphique DPE GES

Démo : https://puffywonton.github.io/DPEGPE/

NPM package : https://www.npmjs.com/package/dpegpe

## DOCUMENTATION

```js
dpeGes(id, width, height, dpeValue, gesValue)
```
| Input    | Description |
| ---      | ---       |
| id       | Id du div container du graphique |
| width    | Largeur du graphique             |
| height   | Hauteur du graphique             |
| dpeValue | Valeur du DPE                    |
| gesValue | Valeur des GES                   |

## UTILISATION

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

## DEVELOPMENT

```sh
npm install
npm run dev
```
