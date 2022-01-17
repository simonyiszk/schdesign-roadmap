# Roadmap

Az schdesign öntevékeny szakmai kör tudásmegosztó weboldala. Megtanulhatsz többet a körről, a körön belül található divíziókrók. Ezen kívül az általunk tartott workshopok anyagát és egyéb cikkeket találhatsz az oldalon.

## Hogyan is van ez

A `docs` mappában szöveges fájlokat találsz [markdown](https://www.markdownguide.org/cheat-sheet/) formátumban. Ezek könnyen olvashatóak a kedvenc szövegszerkesztődben és könnyen lehet belőlük akár weboldalt is generálni. Mindamellett megvan az az előnye, hogy verziókövetésre is alkalmas, azaz többen is szerkeszthetitek egyszerre.

## Mi történik?

Ez a repo [MkDocs](https://www.mkdocs.org/) segítségével generál statikus HTML kódot a *docs/* mappából az *mkdocs.yml* fájl alapján.

## Letöltése

1. Forkold meg a repot

2. Töltsd le

*Git*-et használva, *SSH*-n keresztül:

```bash
git clone git@github.com:GITHUB_NEVED/schdesign-roadmap.git
cd schdesign-roadmap

git remote add upstream git@github.com:simonyiszk/schdesign-roadmap.git
```

## Futtatás

Indítsd el a Dockert.

A repo mappájából adjuk ki az alábbi parancsot:

```powershell
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material:8.1.7
```

vagy használd a `run.ps1` fájlt.

Ekkor megkeresi a `squidfunk/mkdocs-material:8.1.7` képet, amit ha nem talál, akkor letölti azt, majd elindítja.

Ha minden jól ment, akkor a [localhost:8000](https://localhost:8000/) címen lesz elérhető a weboldal.

## Szerkesztés

### Első lépés

A saját forkold változatodban dolgozz.

### Módosítások feltöltése

Ha végeztél a módosításokkal, akkor *push*-old a *commit*-jaidat.

```powershell
# Módosítás mentése
git add modosult_fajl_neve.md
git commit -m "Szöveg a módosításhoz"

# Módosítás feltöltése
git push
```

Ekkor a módosítások csak a te példányodban vannak jelen.

A webes felületen a *Contribute* fül alatt kattints az *Open pull request* gombra. Innen a zöld gombokat követve kezdeményezheted azt hogy a módosításaid a *simonyiszk* változatában is jelen legyenek.

## GitHub Actions

A munka megkönnyítésének az érdekében a webes felületen az *Actions* fül alatt találhatod meg ezeket a folyamatokat.

Ha forkoltad a repo-t, akkor neked kell kezdeményezned az engedélyezésüket.

### Syntax check

Ellenőrzi a *docs* mappában a markdown fájlok formázását. Ha bármelyik hibás, akkor hibával tér vissza.

Amikre ügyelj markdown fájlok esetén:

- 4 szóközzel kell indentálni
- Ne legyen felesleges szóköz a sor végén
- Üres sorral kell végződnie a fájlnak

Ilyenkor futhat le:

- Minden push esemény hatására a main/master ágon
- Pull request hatására
- Publish folyamat esetén
- Manuálisan, a webes felületen lehet kezdeményezni

### Build

Előállítja a statikus weboldal fájljait, majd a fájlokat *artifact*-ként elérhetővé teszi.

Ilyenkor futhat le:

- A Publish folyamat részeként
- Manuálisan, a webes felületen lehet kezdeményezni

### Deploy

Az előbb előaállított *artifact*-ot letölti, majd a *gh-pages* ágra másolja, ahol .

Ilyenkor futhat le:

- A Publish folyamat részeként

### Publish

Az előbbi 3 folyamat elindulásáért felel. Ha valamelyik megakad, akkor nem fut tovább.

Forkolt repo esetén csak a Syntax check fog lefutni, a többit figyelmen kívül hagyja.
