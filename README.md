# Roadmap

Egy dokumentációs repo.

## Hogyan is van ez

A `docs` mappában szöveges fájlokat találsz [markdown](https://www.markdownguide.org/cheat-sheet/) formátumban. Ezek könnyen olvashatóak a kedvenc szövegszerkesztődben és könnyen lehet belőlük akár weboldalt is generálni. Mindamellett megvan az az előnye, hogy verziókövetésre is alkalmas, azaz többen is szerkeszthetitek egyszerre.

## Mi történik?

Ez a repo [MkDocs](https://www.mkdocs.org/) segítségével generál statikus HTML kódot a *docs/* mappából az *mkdocs.yml* fájl alapján Docker környezetben. A `Dockerfile`-ban van leírva, hogy mi történjen a konténer építése során. Ezt a folyamatot automatikusan végrehajtja a GitLab CI folyamata.

## Repo letöltése

*Git*-et használva, *SSH*-n keresztül töltsük le a projektet, majd lépjünk be az imént létrejött mappába:

```bash
git clone git@git.sch.bme.hu:schdesign/roadmap.git
cd .\roadmap\
```

## Futtatás egyszerűen

Windows és Linux rendszerek alól egyszerűen el lehet indítani a projektet a megfelelő *builrun* fájlt kiválasztva.

```bash
# Linux bash
./buildrun.sh

# Windows PowerShell
./buildrun.ps1
```

Ekkor megpróbál buildelni, azután meg elindítja a :8000 porton a lokális szervert.

## Docker image ...

### ...buildelése

Buildelni csak egyszer fog kelleni, különös esetekben többször, de olyan esettel nem fogunk foglalkozni.

Add ki az alábbi parancsot a `roadmap` mappából:

```bash
docker build -t roadmap .
```

Ezt követően a `Dockerimage` fájlban leírtak alapján létre fog jönni egy futtatható Docker Image.

Amennyiben hibával tér vissza a parancs, akkor:

- *(Windows esetén)* ellenőrizd le, hogy elindítottad-e *Docker Desktop* appot.
- ellenőrizd le, hogy létezik-e korábbi buildje az image-nek *(pl. nem törölted ki korábbról)*
- ellenőrizd le, hogy a Windows felhasználód benne van-e a `docker-users` csoportban.\
  *(Windows keresőbe)* Computer Management -> *(megnyílik a program)* -> Computer Management -> System tools -> Local Users and Groups -> Groups -> docker-users *(dupla klikk)*

### ...futtatása

Az alábbi parancsot a `roadmap` mappából kiadva el fog indulni http://localhost:8000 címen a lokális másolatod a weboldalnak.

```bash
# Linux Bash:
docker run -it -v "$PWD:/docs" --rm --publish 8000:8000 roadmap

# Windows PowerShell:
docker run -it -v "${PWD}:/docs" --rm --publish 8000:8000 roadmap
```

Amennyiben hibával tér vissza a parancs, akkor:

- *(Windows esetén)* ellenőrizd le, hogy elindítottad-e *Docker Desktop* appot.
- ellenőrizd le, hogy nem fut-e már *(lehet egy korábbi futás után nem zártad be rendese)*
- ellenőrizd le, hogy a Windows felhasználód benne van-e a `docker-users` csoportban.\
  *(Windows keresőbe)* Computer Management -> *(megnyílik a program)* -> Computer Management -> System tools -> Local Users and Groups -> Groups -> docker-users *(dupla klikk)*

Ez egy teljes értékű dev szerver, ha változtat valamelyik fájlon a `roadmap` mappában, akkor annak a módosítása automatikusan tükröződni fog egy kis idő elteltével, a weboldal újratöltése nélkül.

## Szerkesztés

### Első lépés

Mivel a *master* branch védve va, így semmi képpen sem tudsz közvetlen oda pusholni. Ez azárt van így, mert amint változik a *master* ág, egyből elindul a háttérben 3 darab job, amik fordítanak, majd FTP-n feltöltik a módosítást. Ez elég költséges, ezért csak mergelni lehet más ágakat a fő ágra.

Hozz létre egy új ágat:

```bash
git checkout -b uj-agnak-a-neve
```

Amint látod, máris az új ágon vagy, el is kezdhetsz módosítani.

### Módosítások feltöltése

Ha végeztél a módosításokkal, akkor *push*-old fel a *commit*-jaidat, majd a webes felületen kezdeményezd a *merge*-elést. Ha az imént töltötted fel az utolsó módosításod, akkor a repo tetején szólni fog egy kis dobozban, hogy mergelhetnéd a dolgaidat.

Első push esetén hibát fog írni, ilyenkor az alábbi formában kell pusholni:

```bash
git push --set-upstream origin fix-header-logo
```

Ezt csak egyszer kell megtenni, következő push esetén nyugodtan használhatod már a `git push` parancsot.

### Mergelés

Webes felületen kövesd végig a merge-elés folyamatát, ahol kell, ott adják meg valamit, hogy mások tudják miért és mit merge-elsz.