# Bevezető

Ebben a tutorialban végigvesszük, hogy mi az a HTML, CSS, JS, amikre minden weboldal épül. Majd ezeket a nyelveket felhasználva léte fogunk hozni egy nagyon egyszerű, statikus weboldalt, ami tökéletes lesz egy kezdetleges jegyzetnek a megjelenítésére.

Egyszerű, szövegeket szeretnénk tárolni, képeket megjeleníteni és opcionálisan képaláírást elhelyezni.

## Mire lesz szükséged

Minimum:

- Szövegszerkesztő *(pl. Visual Studio Code)*
- Böngésző *(pl. valami Chromium alapú böngésző)*

Opcionális:

- Engedélyezd az ismert kiterjesztések mutatását Windowsban 

Ha tovább szeretnél majd haladni:

- GitHub felhasználó
- Valamilyen terminál, amibe tudsz `git` parancsokat írni és ezt értelmezi neked

## Mit is fogunk pontosan csinálni

1. Megnézzük, mi is ez a HTML, megcsináljuk a weboldalunk struktúráját.
2. Tovább lépünk a CSS-re, leírjuk a HTML elemek elrendezését, megjelenését.
3. Bevezetjük a JS-t, mire lehetne felhasználni ebben a projektben.
4. Bónusz 1: mitől lesz valami reszponzív?
5. Bónusz 2: GitHub-ra feltesszük, hogy bárki számára elérhető legyen.

### Előnézet

<iframe style="width: 100%; height: 500px;" src="https://gergoradeczki.github.io/tutorials/step-by-step/vegleges/index.html"></iframe>

## Környezet

Lesz egy gyökér mappánk *(step-by-step)*. Minden, amit használni fogunk ebben a mappában lesz.

Az alábbi fájlstruktúrát fogjuk használni:

<img src="/web/tutorials/step-by-step/sbs_00_fajlok.png">

Ügyeljünk arra, hogy minden fájl, amit létrehozunk, UTF-8-as kódolást használjon. Ezt a szövegszerkesztőnk *(általában)* jobb alsó sarkában tudjuk megtekinteni. Ha nem UTF-8 van kiválasztva *(hanem pl. ASCII)*, akkor változtassuk meg azt UTF-8-ra.

A képeket *(cat.jpg, logo.png, logo.svg)* és a szövegtípus fájlt *(Roboto-Regular.ttf)* nem kell létrehozni, azokat majd az internetről fogjuk letölteni.