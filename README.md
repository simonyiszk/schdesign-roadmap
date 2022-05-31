# Roadmap

Az schdesign öntevékeny szakmai kör tudásmegosztó weboldala. Megtanulhatsz többet a körről, a körön belül található divíziókról. Ezen kívül az általunk tartott workshopok anyagát és egyéb cikkeket találhatsz az oldalon.

## Hogyan is van ez

A `docs` mappában szöveges fájlokat találsz [markdown](https://www.markdownguide.org/cheat-sheet/) formátumban. Ezek könnyen olvashatóak a kedvenc szövegszerkesztődben és könnyen lehet belőlük akár weboldalt is generálni. Mindamellett megvan az az előnye, hogy verziókövetésre is alkalmas.

## Mi történik?

Ez a repo [MkDocs](https://www.mkdocs.org/) segítségével generál statikus HTML kódot a *docs/* mappából az *mkdocs.yml* fájl alapján.

## Letöltése

1. Forkold meg ezt a repot

2. Klónozd

*Git*-et használva, *SSH*-n keresztül:

```bash
git clone git@github.com:GITHUB_NEVED/schdesign-roadmap.git
cd schdesign-roadmap

git remote add upstream git@github.com:simonyiszk/schdesign-roadmap.git
```

## Futtatás

Indítsd el a Dockert.

A repo mappájából adjuk ki az alábbi parancsot:

```bash
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material:8.2.16
```

Ekkor megkeresi a `squidfunk/mkdocs-material:8.2.16` képet, amit ha nem talál, akkor letölti azt, majd elindítja.

Ha minden jól ment, akkor a [localhost:8000](http://localhost:8000/) címen lesz elérhető a weboldal.

## Szerkesztés

### Első lépés

A saját forkold változatodban dolgozz.

### Módosítások feltöltése

Ha végeztél a módosításokkal, akkor *push*-old a *commit*-jaidat.

```bash
# Módosítás mentése
git add eleresi/utvonal/modosult_fajl_neve.md
git commit -m "Szöveg a módosításhoz"

# Módosítás feltöltése
git push
```

Ekkor a módosítások csak a te példányodban vannak jelen.

A webes felületen a *Contribute* fül alatt kattints az *Open pull request* gombra. Innen a zöld gombokat követve kezdeményezheted azt hogy a módosításaid a *simonyiszk* változatában is jelen legyenek.

## GitHub Actions

A munka megkönnyítésének érdekében GitHub Actions-t használunk. Ezt a webes felületen az *Actions* fül alatt találod meg.

Ha forkoltad a repo-t, akkor alapból ki van kapcsolva, de a repo beállításaiban be tudod kapcsolni. Forkolt példányban a *build* és *publish* workflow csak manuálisan fut le.

### Linter

Ellenőrzi a *docs* mappában a markdown fájlok formázását. Hibával jelzi, ha valamelyik fájlnak rossz a formázása.

Amikre ügyelj markdown fájlok esetén:

- 4 szóközzel kell indentálni
- Ne legyen felesleges szóköz a sor végén
- Üres sorral kell végződnie a fájlnak

Ilyenkor futhat le:

- Minden push esemény hatására a main/master ágon
- Pull request hatására
- Publish folyamat esetén
- Manuálisan *(a webes felületen lehet kezdeményezni)*

Lokálisan is ki tudod próbálni, de ehhez [Node.js](https://nodejs.org/en/)-nek kell lennie telepítve a gépedre. Saját gépen való kipróbáláshoz:

```powershell
npm i
npm run lint
```

### Build

Előállítja a statikus weboldal fájljait, majd a fájlokat *artifact*-ként elérhetővé teszi.

Ilyenkor futhat le:

- A Publish folyamat részeként
- Manuálisan *(a webes felületen lehet kezdeményezni)*

### Deploy

Létrehoz egy üres *gh-pages* ágat, az előbb előállított *artifact*-ot letölti és kicsomagolja. Feljegyzi, hogy melyik commit alapján indult el a folyamat. Commitol és pusholja a módosítást.

Ilyenkor futhat le:

- A Publish folyamat részeként

### Publish

Az előbbi 3 folyamat elindulásáért felel. A szintaxis ellenőrzőt leszámítva ha valamelyik elakad, akkor a teljes folyamat leáll.

Forkolt repo esetén csak a Syntax check fog lefutni, a többit figyelmen kívül hagyja.
