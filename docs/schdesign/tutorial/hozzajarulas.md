---
title: Hozzájárulás
description: Elsőre nem is lehet olyan egyértelmű, hogy hogyan lehet tartalmilag bővíteni az oldalt. Ennek a lépésein megyünk végig.
---

# Hogyan járulhatok hozzá az oldalhoz?

Nem feltétlenül kell egy workshop/tutorial ötlettel rendelkezned ahhoz, hogy hozzá tudjál járulni az oldalhoz. Már az is bőven megteszi, ha találtál egy elgépelést, vagy már egy meglévő irományban szeretnél módosítást végezni, mert valami nem lett elég jól leírva/helytelen.

## Előkészületek

### 1. GitHub

#### Ha még nincs felhasználód

Regisztrálj a https://github.com/signup oldalon.

#### Ha már van felhasználód

Az oldalra GitHubon keresztül történik a tartalom feltöltése. Ahhoz, hogy hozzá tudjál járulni az oldalhoz, először meg kell forkolnod a [repo](https://github.com/simonyiszk/schdesign-roadmap)-t. Ekkor létre fog jönni a saját példányod, amin nyugodtan dolgozhatsz.

### 2. Docker letöltése

Lokálisan lehet futtatni egy dev szervert, amiben élőben láthatod a módosításaidat. Ehhez egy Docker Image-et fogunk letölteni és felkonfigurálni.

https://docs.docker.com/get-docker/

Operációs rendszertől függően válaszd ki a neked kellő verziót.

!!! danger
    Windows esetén, ha **nem rendszergazda** vagy, akkor telepítést követően manuálisan hozzá kell adni a felhasználódat a `docker-users` csoporthoz. Ennek hiányában nem fogod tudni elindítani az alkalmazást. Jelentkezz ki és be, hogy érvényesüljön a csoport módosulás. Lehet újra is kell majd indítanod a gépedet.

### 3. Git kliens letöltése

Mivel lokálisan fogunk dolgozni, így kelleni fog valami ami majd fel tudja tölteni a munkánkat. Erre tökéletes lesz egy Git kliens.

https://git-scm.com/downloads

### 4. SSH vagy HTTPS

Munkánkat feltölteni kétféleképpen tudjuk: SSH-n vagy HTTPS-en keresztül. Tetszés szerint válaszd ki a neked szimpatikusabbat.

!!! tip
    Ajánlott SSH-t használni, mert ekkor nem kell felhasználónév-jelszó párossal azonosítanod magadat.

## Helyi példány elkészítése

### 1. Klónozd a repot

Vagy konzolon keresztül vagy grafikus kliensen keresztül másold le azt a példányt, ami a szerveren van.

=== "SSH"
    ```git
    git clone git@github.com:GITHUB_NEVED/schdesign-roadmap.git
    ```

=== "HTTPS"
    ```git
    git clone https://github.com/GITHUB_NEVED/schdesign-roadmap.git
    ```

### 2. Indítsd el a Docker példányodat

Windows esetében először el kell indítani a `Docker Desktop` alkalmazást mielőtt ki tudnánk adni parancsokat neki.

Start Menüben keress rá és indítsd el.

### 3. Futtassuk a scriptet

```bash
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material:8.1.11
```

Ezt követően elindul a dev szerver a http://localhost:8000/ címen.

!!! tip
    Nézd meg a gépednek milyen címe van a belső hálózatodon, mert ha engedélyezed tűzfalban, akkor pl. mobilon is megnézheted a weboldalt.

## Munka megkezdése

Elméletben ezen a ponton már minden megvan ahhoz, hogy megkezdhesd a munkát.

### a) Meglévő tartalom módosítása

A mappák és fájlok hierarchiája a weboldal tagolódását követi. Minden dokumentumot a `docs` mappában fogsz megtalálni, innen tudsz a divíziók felé elnavigálni stb.

Ha megtaláltad a neked kellő Markdown fájlt, akkor nyisd meg, keresed meg a módosítandó részt, végezd el a módosítást, majd mentsd el a fájlt. Ekkor a dev szerver újra fog töltődni, adj neki pár másodpercet. A módosításod automatikusan tükröződni fog a lokális szervereden.

### b) Új tartalmi bővítés

Mindenek előtt gondold végig, hogy amit hozzá akarsz adni az logikailag hova illene.

- Melyik divízióhoz illene a tartalom?
- Workshop vagy inkább tutorial jellegű?
- Lesznek hozzá képek?
    - Lehet kelleni fog egy új mappa is neki?
- Ki legyen a szerző?
- Van-e már hasonló témában tartalom?

És ami a legfontosabb: **egy öregebbnek is kérd ki a véleményét**.

#### Új fájl/mappa létrehozása

Ha megvan, hogy hova, melyik mappába akarod elhelyezni az irományodat, akkor egész egyszerűen hozz létre egy Markdown fájlt.

!!! danger
    Ügyelj a helyes fájl elnevezésre!

    ```text
    # Tutorial
    https://roadmap.schdesign.hu/<divízió>/tutorial/<név>/<oldalszám?>

    # Workshop
    https://roadmap.schdesign.hu/<divízió>/workshop/<dátum>/
    ```

!!! danger
    Ügyelj a helyes mappa elnevezésre is!

!!! tip
    Nézd meg más mappában milyen struktúrába vannak a fájlok, használd te is ugyan azt a logikát.

!!! note
    Kérd ki egy öregebb véleményét

Használd a Markdown [alapok](/schdesign/tutorial/markdown-alapok/) és [cheat sheet](/schdesign/tutorial/markdown-cheatsheet/) doksit, hogy formailag helyes legyen amit írsz.

#### Link hozzáadása a navigációs panelhez

A projekt gyökerében találhatsz egy `mkdocs.yml` nevű fájlt. Ennek a fájlnak a végén tudod hozzáadni az oldaladat.

!!! tip
    Tájékozódj a többi link alapján, hogy milyen formában kéne ezt a listát bővítened.

### Módosítások elmentése

1\. Git-ben *stage*-eld a módosításaidat.

```git
git add eleresi/utvonal/a/modositashoz
```

2\. *Commit*-old amit csináltál egy lényegre törő leírással, ami nem túl hosszú, de minden fontos információt tartalmaz.

```git
git commit -m "Egy lényegre törő leírás"
```

3\. *Push*-old a *remote*-ra.

```git
git push
```

### Véglegesítés

Ha lokálisan minden oké volt és már fel is töltötted a remote-ra a módosításodat, akkor a GitHub webes felületén nyisd meg a repodat és a *Contribute* fül alatt kezdeményezz egy *Pull request*-et

#### Elfogadásra várás

Ezt követően egy megfelelő jogosultsággal rendelkező személy majd átnézi, amit csináltál. Ha minden oké, akkor el fogja fogadni. Ha nem, akkor majd kapsz egy üzenetet, hogy mi a gond.

Amennyiben el lett fogadva a módosításod, akkor kb. 2 percen belül már élesedni is fog az Roadmap oldalán a hozzájárulásod.
