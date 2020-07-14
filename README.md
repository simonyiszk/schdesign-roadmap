# Roadmap

Egy dokumentációs repo.

## Hogy is van ez?
A `docs` mappában szöveges fájlokat találsz 
[markdown](https://www.markdownguide.org/cheat-sheet/) formátumban.
Ezek könnyen olvashatóak a kedvenc szövegszerkesztődben és könnyen lehet
belőlük akár weboldalt is generálni. Mindamellett megvan az az előnye,
hogy verziókövetésre is alkalmas, azaz többen is szerkeszthetitek
egyszerre.

## Hogyan lehet szerkeszteni?
Git.sch-n is megteheted online fájlszerkesztő használatával. Azonban, ha nem
szeretnél fél giga memóriát elégetni csak ezzel, akkor:
```
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
Ez a repo [MkDocs](https://www.mkdocs.org/) segítségével generál statikus HTML
kódot a docs/ mappából az mkdocs.yml fájl alapján Docker környezetben. A
`Dockerfile`-ban van leírva, hogy mi történjen a konténer építése során.
Ezt a folyamatot automatikusan végrehajtja a Git.sch CI folyamata.

## Hogyan próbálhatom ki a saját gépemen?
A Docker kép elkészítéséhez használd a következő parancsot:
`docker build -t roadmap .` Ez az aktuális (ponttal jelzett) mappában található Dockerfile alapján elkészíti a roadmap nevű Docker képet.

Futtatáshoz:
`docker run -it --rm --publish 8000:8000 roadmap`
Ez a parancs elindít egy konténert a roadmap képből és annak 8000-es portját 
kiengedi a gépedre.

## Mindezt még ennél is egyszerűbben szeretnéd?
A repo klónozása után add ki a következő parancsokat:
```
echo "#\!/bin/bash" > buildrun.sh
echo "docker build -t roadmap ." >> buildrun.sh
echo "docker run -it --rm --publish 8000:8000 roadmap" >> buildrun.sh
chmod +x ./buildrun.sh
./buildrun.sh
```

Ezután pedig a `./buildrun.sh` parancs kiadásával automatikusan elkészíted és
elindítod a Docker imaget.
