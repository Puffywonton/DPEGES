# DPE GES

## Générateur de graphique DPE GES

vous en avez marre d'utiliser png/jpg pour afficher le dpe/gpe, nous avons la solution!

Avec le DPEGPE, entrez simplement la valeur du dpe/gpe, nous nous occupons de tout!

Essayez le DPEGPE, <strong>great sucess!</strong> :D

Démo : https://puffywonton.github.io/DPEGPE/
NPM package : https://www.npmjs.com/package/dpegpe

## DOCUMENTATION

```
dpeGes(id, width, height, dpeValue, gesValue)
```

| id | Id du div container du graphique |
| width | Largeur du graphique |
| height | Hauteur du graphique |
| dpeValue | Valeur du DPE |
| gesValue | Valeur des GES |

## UTILISATION

```
npm i dpegpe
```

HTML

```
<div id="dpeGesDemoContainer"></div>
```

JAVASCRIPT

```
import "dpegpe/styles/style.css";
import dpeGes from "dpegpe";

// ...


dpeGes("dpeGesDemoContainer", 400, 400, 56, 98);
```

## DEVELOPMENT

```
npm install
npm run dev
```
