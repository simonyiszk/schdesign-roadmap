# Bevezető

Ebben a tutorial sorozatban az alapoktól kezdve fogunk felépíteni egy statikus weboldalt, ami tökéletes lesz egyszerű szövegek tárolására és valamennyire jól fog kinézni. Ezen kívül megpróbáljuk valami publikusan elérhető helyre feltenni, hogy egyszerűen meg tudjuk mutatni másoknak is a weboldalunk.

## Mire lesz szükséged

Minimum:

- Szövegszerkesztő *(nem Word!)*
- Böngésző

Opcionális:

- Engedélyezd az ismert kiterjesztések mutatását Windowsban 

Ha tovább szeretnél majd haladni:

- GitHub felhasználó
- Valamilyen terminál, amibe tudsz `git` parancsokat írni és ezt értelmezi neked

## Mit is fogunk pontosan csinálni

1. Megnézzük, mi is ez a HTML, lefektetjük a weboldalunk alapjait
2. Kicsit szépítjük CSS-sel, megpróbáljuk megérteni a reszponzivitást
3. Majd kísérletet teszünk a felhasználó gépének a leterhelésére JS-tel, túllépünk a statikusságon
4. És végül mindezt publikussá tesszük; hova tovább?; stb.

### Előnézet

<iframe style="width: 100%; height: 500px;" src="https://gergoradeczki.github.io/tutorials/step-by-step/vegleges/index.html"></iframe>

## Környezet

Lesz egy gyökér mappánk *(step-by-step)*, amiben létre fogjuk hozni az általunk használandó fájlokat.

Az alábbi fájlstruktúrát fogjuk használni:

<img src="/web/tutorials/step-by-step/sbs_00_fajlok.png">

Ügyeljünk arra, hogy minden fájl, amit létrehozunk, UTF-8-as kódolást használjon. Ezt a szövegszerkesztőnk *(általában)* jobb alsó sarkában tudjuk megtekinteni. Ha nem UTF-8 van kiválasztva *(hanem pl. ASCII)*, akkor változtassuk meg azt UTF-8-ra.

A képeket *(cat.jpg, logo.png, logo.svg)* és a szövegtípus fájlt *(Roboto-Regular.ttf)* nem kell létrehozni, azokat majd az internetről fogjuk letölteni.