# Roadmap

Egy dokumentációs repo.

## Hogy is van ez?
A `docs` mappában szöveges fájlokat találsz [markdown](https://www.markdownguide.org/cheat-sheet/) formátumban. Ezek könnyen olvashatóak a kedvenc szövegszerkesztődben és könnyen lehet belőlük akár weboldalt is generálni. Mindamellett megvan az az előnye, hogy verziókövetésre is alkalmas, azaz többen is szerkeszthetitek egyszerre.

## Hogyan lehet szerkeszteni?
Git.sch-n is megteheted online fájlszerkesztő használatával. Azonban, ha nem szeretnél fél giga memóriát elégetni csak ezzel, akkor:

```bash
git clone git@git.sch.bme.hu:schdesign/roadmap.git
cd roadmap
cd docs
git checkout -b sajat_modositasod_vagy_neved
nano 'kedvenc fájlod.md'
git add 'kedvenc fájlod.md'
git status
git commit -m "Módosításod rövid és világos leírása"
git push
```

## Mi történik?
Ez a repo [MkDocs](https://www.mkdocs.org/) segítségével generál statikus HTML kódot a docs/ mappából az mkdocs.yml fájl alapján Docker környezetben. A `Dockerfile`-ban van leírva, hogy mi történjen a konténer építése során. Ezt a folyamatot automatikusan végrehajtja a Git.sch CI folyamata.

## Hogyan próbálhatom ki a saját gépemen?

A Docker kép elkészítéséhez használd a következő parancsot: `docker build -t roadmap .` Ez az aktuális (ponttal jelzett) mappában található Dockerfile alapján elkészíti a roadmap nevű Docker képet.

Futtatáshoz: `docker run -it -v "$PWD:/docs" --rm --publish 8000:8000 roadmap` Ez a parancs elindít egy konténert a roadmap képből és annak 8000-es portját  kiengedi a gépedre. Ha módosítasz a forrásfájljaidon, az oldal *automatikusan frissül*.

### Mindezt még ennél is egyszerűbben szeretnéd?
A repo klónozása után add ki a `./buildrun.sh` parancsot, amivel elkészíted és elindítod a Docker imaget.

### Windows cuccos

Ellenőrizd le, hogy a Windows felhasználód benne van-e a `docker-users` csoportban.

*(Windows keresőbe)* Computer Management -> *(megnyílik a program)* -> Computer Management -> System tools -> Local Users and Groups -> Groups -> docker-users *(dupla klikk)*

Add hozzá magad, ha nem vagy a listán. Jelentkezz ki, majd lépj be újra, hogy a módosítás érvényesüljön.

``` PowerShell
git clone git@git.sch.bme.hu:schdesign/roadmap.git
cd .\roadmap\
git checkout -b uj-branch-neve
docker build -t roadmap .
docker run -it -v "${PWD}:/docs" --rm --publish 8000:8000 roadmap
```

Ezt követően a http://localhost:8000/ címen lesz elérhető a weboldal.

# Roadmap readma 2.0

Ebben a részben megpróbálom jobban elmagyarázni hogyan működik minden.

## Repo letöltése

Gitet használva, ssh-n keresztül töltsük le a projektet, majd lépjünk be az imént létrejött mappába:

``` PowerShell
git clone git@git.sch.bme.hu:schdesign/roadmap.git
cd .\roadmap\
```

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
docker run -it -v "${PWD}:/docs" --rm --publish 8000:8000 roadmap
```

Amennyiben hibával tér vissza a parancs, akkor:

- *(Windows esetén)* ellenőrizd le, hogy elindítottad-e *Docker Desktop* appot.
- ellenőrizd le, hogy nem fut-e már *(lehet egy korábbi futás után nem zártad be rendese)*
- ellenőrizd le, hogy a Windows felhasználód benne van-e a `docker-users` csoportban.\
  *(Windows keresőbe)* Computer Management -> *(megnyílik a program)* -> Computer Management -> System tools -> Local Users and Groups -> Groups -> docker-users *(dupla klikk)*

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