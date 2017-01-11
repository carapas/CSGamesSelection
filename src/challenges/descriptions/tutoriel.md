# Tutoriel
## Sélection des CS Games
Bienvenu aux sélections des CS Games. Dans cette compétition, vous aurez à coder des scripts en [python 2.7](https://www.python.org/downloads/release/python-2713/) et [javascript (nodejs v4.2.0)](https://nodejs.org/en/blog/release/v4.2.0/) et à trouver des flags.

## Le but
Votre but est de résoudre le plus de challenges possibles pour obtenir un maximum de force!
Chaque challenge dispose d'un nombre de force différent dépendemment de la difficulté du challenge.

![alt text](https://raw.githubusercontent.com/carapas/CSGamesSelectionPublic/master/force.png?token=AEjGqx5J_Qeapc7dPXs_OE9rb82BrLaMks5Yfi7hwA "Force")

## Comment ça marche?
Les défis de programmation sont de type stdin et stdout. C'est à dire que vous lirez les inputs à partir des entrées de la console et que vous envoierez les résultats de vos algorithmes par stdout.

## Tester localement (**Extremement utile**)
Vous avez accès à un script utilitaire qui agit exactement comme le serveur. Le [Validator](https://github.com/carapas/CSGamesSelectionPublic/tree/master/Validator) vous permet de tester les challenges que vous voulez localement. Pour ce faire, vous devez lui fournir un script et fichier de test comme [celui-ci](https://github.com/carapas/CSGamesSelectionPublic/blob/master/Tutoriel/tutoriel.js).

Tous les fichiers sont disponible sur le [github publique des sélections](https://github.com/carapas/CSGamesSelectionPublic).

### stdin
**python**
```
input1 = raw_input()
input2 = raw_input()
```

**javascript**
```
"use strict";

const fs = require("fs");

const BUFSIZ = 65536;
let buf = new Buffer(BUFSIZ);
buf.fill('\x00');
let response = [""];
try {
  fs.readSync(process.stdin.fd, buf, 0, BUFSIZ, null);
  const stopIdx = buf.indexOf(0);
  buf = buf.slice(0,stopIdx);
} catch(e) {
  console.warn(e);
  console.warn("No inputs in defi");
  process.exit(1);
}

response = buf.toString("utf-8");
let idx__ = 0;
let lines__ = response.split('\r\n');

var readline = () => {
    idx__++;
    return lines__[idx__-1];
};

var input1 = readline();
var input2 = readline();
```

### stdout
**python**
```
print 'Résultat'
```

**javascript**
```
console.log('Résultat');
```

## Tutoriel
Pour finir ce tutoriel, vous n'avez qu'à printer `J'ai compris!`.
#Bonne chance et que la force soit avec vous!