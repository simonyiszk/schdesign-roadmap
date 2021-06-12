# Bevezető

Ebben a tutorialban végigvesszük, hogy mi az a HTML, CSS, JS, amikre minden weboldal épül. Majd ezeket a nyelveket felhasználva létere fogunk hozni egy nagyon egyszerű, statikus weboldalt, ami tökéletes lesz egy kezdetleges jegyzetnek a megjelenítésére.

Mit is akarunk pontosan csinálni?

- Szövegeket szeretnénk tárolni.
- Képeket megjeleníteni.
- Opcionális képaláírás.

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

Lesz egy gyökérkönyvtár *(step-by-step)*. Minden, amit használni fogunk ebben a mappában lesz.

Az alábbi fájlstruktúrát fogjuk használni:

<img src="/web/tutorial/step-by-step/sbs_00_fajlok.png">

Ügyeljünk arra, hogy minden fájl, amit létrehozunk, UTF-8-as kódolást használjon. Ezt a szövegszerkesztőnk *(általában)* jobb alsó sarkában tudjuk megtekinteni. Ha nem UTF-8 van kiválasztva, akkor változtassuk meg azt UTF-8-ra.

A képeket *(cat.jpg, logo.png, logo.svg)* és a szövegtípus fájlt *(Roboto-Regular.ttf)* nem kell létrehozni, azokat itt lehet letölteni:

- cat.jpg : [letöltés](https://github.com/gergoradeczki/gergoradeczki.github.io/raw/master/tutorials/step-by-step/vegleges/Roboto-Regular.ttf)
- logo.png : [letöltés](https://github.com/gergoradeczki/gergoradeczki.github.io/raw/master/tutorials/step-by-step/vegleges/cat.jpg)
- logo.svg : [letöltés](https://github.com/gergoradeczki/gergoradeczki.github.io/raw/master/tutorials/step-by-step/vegleges/logo.png)
- Roboto-Regular.ttf : [letöltés](https://github.com/gergoradeczki/gergoradeczki.github.io/raw/master/tutorials/step-by-step/vegleges/logo.svg)

Helyezzük el ezeket a fájlokat a gyökérkönyvtárban.