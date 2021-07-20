---
Title: Hozzájárulás
Description: Elsőre nem is lehet olyan egyértelmű, hogy hogyan lehet tartalmilag bővíteni az oldalt. Ennek a lépésein megyünk végig.
Author: Radeczki Gergő István
---

# Hogyan járulhatok hozzá az oldalhoz?

Nem feltétlenül kell egy workshop/tutorial ötlettel rendelkezned ahhoz, hogy hozzá tudjál járulni az oldalhoz. Már az is bőven megteszi, ha találtál egy elgépelést, vagy már egy meglévő irományban szeretnél módosítást végezni, mert valami nem lett elég jól leírva/helytelen.

## Előkészületek

### 1. GitLab hozzáférés

#### Ha még nincs felhasználód

Ez a GitLab példány a KSZK által van hosztolva a kollégiumból. Ahhoz, hogy be tudjál lépni, szükséged lesz egy [SCH Account](https://kszk.sch.bme.hu/szolgaltatasaink/sch-account/) felhasználóra. A linkelt oldalon olvashatsz róla bővebben, hogyan lehet létrehozni, mire jó stb.

#### Ha már van felhasználód

Az oldalra GitLaben keresztül történik a tartalom feltöltése. Ahhoz, hogy hozzá tudjál járulni az oldalhoz, először is hozzáférés fog kelleni vagy a [repo](https://git.sch.bme.hu/schdesign/roadmap)-hoz, vagy a [GitLab group](https://git.sch.bme.hu/schdesign)-hoz.

GitLab grouphoz csak **owner** rangú személy tud hozzáadni, így érdemes a [csoport tagjai](https://git.sch.bme.hu/groups/schdesign/-/group_members) közt körbenézni, hogy kinek van ehhez joga.

GitLab repohoz minimum **maintainer** joggal kell rendelkeznie a személynek, aki meg tud hívni.

!!! tip
    Lehet jobban megéri csoport tagnak lenni, mint sima repo tagnak, mert ekkor öröklésen keresztül más repokhoz is lesz automatikusan jogod.

### 2. Docker letöltése

Lokálisan lehet futtatni egy dev servert, amiben élőben láthatod a módosításaidat. Ehhez egy Docker Image-et fogunk letölteni és felkonfigurálni.

https://docs.docker.com/get-docker/

Operációs rendszertől függően válaszd ki a neked kellő verziót.

!!! danger
    Windows esetén, ha **nem rendszergazda** vagy, akkor telepítést követően manuálisan hozzá kell adni a felhasználódat a `docker-users` csoporthoz. Ennek hiányában nem fogod tudni elindítani az alkalmazást. Jelentkezz ki és be, hogy érvényesüljön a csoport módosulás.

### 3. Git kliens letöltése

Mivel lokálisan fogunk dolgozni, így kelleni fog valami ami majd fel tudja tölteni a munkánkat. Erre tökéletes lesz egy Git kliens.

https://git-scm.com/downloads

### 4. SSH vagy HTTPS

Munkánkat feltölteni két féle képpen tudjuk: SSH-n vagy HTTPS-en keresztül. Tetszés szerint válaszd ki a neked szimpatikusat.

!!! tip
    Ajánlott SSH-t használni, mert ekkor nem kell felhasználónév-jelszó párossal azonosítanod magadat.

## Helyi példány elkészítése

### 1. Klónozd a repot

Vagy konzolon keresztül vagy grafikus kliensen keresztül másold le azt a példányt, ami a szerveren van.

=== "SSH"
    ```git
    git clone git@git.sch.bme.hu:schdesign/roadmap.git
    ```
=== "HTTPS"
    ```git
    git clone https://git.sch.bme.hu/schdesign/roadmap.git
    ```

### 2. Indítsd el a Docker példányodat

Windows esetében először el kell indítani a `Docker Desktop` alkalmazást mielőtt ki tudnánk adni parancsokat neki.

Star Menüből keressük ki és indítsuk el.

### 3. Futtassuk a Buildrun scriptet

Windows és Linux esetére kettő script fájl található meg a mappában. A megfelelő elindításával le fognak töltődni a virtualizációhoz szükséges fájlok és el fog indulni a developer server.

Konzolba az alábbi parancsot kiadva is el tudjuk indítani a fájlt:

=== "Windows"
    ```powershell
    .\buildrun.ps1
    ```
=== "Linux"
    ```bash
    ./buildrun.sh
    ```

Ezt követően elindul a developer server a http://localhost:8000/ címen.

!!! tip
    Nézd meg a gépednek milyen címe van a belső hálózatodon, mert ha engedélyezed tűzfalban, akkor pl. mobilon is megnézheted a webodoldalt.

## Munka megkezdése

Elméletben ezen a ponton már minden megvan ahhoz, hogy megkezdhesd a munkát.

Először is válts egy új branch-re, mert a master az védett, arra nem tudsz majd feltölteni.

```git
git checkout -b uj-branch-neve-ide
```

### a) Meglévő tartalom módosítása

A mappák és fájlok hierarchiája a weboldal tagolódását követi. Minden dokumentumot a `docs` mappában fogsz megtalálni, innen tudsz a divíziók felé elnavigálni stb.

Ha megtaláltad a neked kellő Markdown fájlt, akkor nyisd meg, keresed meg a módosítandó részt, végezd el a módosítást, majd mentsd el a fájlt. Ekkor a Dev Server újra fog töltődni, adj neki pár másodpercet. A módosításod automatikusan tükröződnia fog a lokális szervereden.

### b) Új tartalmi bővítés

Mindenek előtt gondold végig, hogy amit hozzá akarsz adni, az logikailag hova illene.

- Melyik divízióhoz illene a tartalom?
- Workshop vagy inkább tutorial jellegű?
- Lesznek hozzá képek?
    - Lehet kelleni fog egy új mappa is neki?
- Ki legyen a szerző?
- Van-e már hasonló témában tartalom?

És ami a legfontosabb: **egy öregebbnek is kérd ki a véleményét**, ha nem vagy biztos magadban.

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
    Kérd ki egy öregebb véleményét ha nem vagy biztos magadban

Használd a Markdown [alapok](/schdesign/tutorial/markdown-alapok/) és [cheatsheet](/schdesign/tutorial/markdown-cheatsheet/) doksit, hogy formailag helyes legyen amit írsz.

#### Link hozzáadása a navigációs panelhez

A projekt gyökerében találhatsz egy `mkdocs.yml` nevű fájlt. Ennek a fájlnak a végén tudod hozzáadni az oldaladat.

!!! danger
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

3\. *Push*-old a *remot*-ra.

!!! note
    Ha először pusholsz, akkor be kell állítanod az *upstream*-et:
    ```git
    git push --set-upstream origin uj-branch-neve-ide
    ```

    Ha már beállítottad az upstreamet, akkor utána a rövidebb formában is tudsz majd pusholni.

    ```git
    git push
    ```

### Véglegesítés

Ha lokálisan minden oké volt és már fel is töltötted a remote-ra a módosításodat, akkor a GitLab webes felületén nyisd meg a repot és kezdeményez a *merge request*-et.

Valószínűleg az oldal tetején lesz egy gomb, amire rányomva ezt meg tudod tenni.

#### Elfogadásra várás

Ezt követően egy megfelelő jogosultsággal rendelkező személy majd átnézi, amit csináltál. Ha minden oké, akkor el fogja fogadni. Ha nem, akkor majd kapsz egy üzenetet, hogy mi a gond.

Amennyiben el lett fogadva a módosításod, akkor kb. 2 percen belül már élesedni is fog az Roadmap oldalán a hozzájárulásod.