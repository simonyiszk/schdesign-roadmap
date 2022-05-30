---
title: A Roadmap projekt
---

# Üdvözöllek az schdesign Roadmap oldalán!

Ez a projekt azért jött létre, hogy egyszerűen tudjunk megosztani tutorial/workshop/lifehack szerű tartalmakat a másokkal.

## Az oldal felépítése



### Aloldalak

Az oldalt alapvetően 3+1 aloldalra lehet bontani. Ezek:

- [3d/](./3d/)<br>
    A 3D divízióhoz köthető tartalmak helye.
- [grafika/](./grafika/)<br>
    A grafika divízióhoz köthető tartalmak helye.
- [web/](./web/)<br>
    A web divízióhoz köthető tartalmak helye.
- [schdesign/](./schdesign/)<br>
    Egy általánosabb jellegű aloldal, ahol a körrel kapcsolatban tudhatsz meg dolgokat, illetve a nem divízióhoz kapcsolódó anyagokat is itt találhatod meg.

#### Aloldalak aloldalai

Az oldal felépítésében próbáltunk arra törekedni, hogy a linkek szépek legyenek, elég legyen csak a linket elolvasni, hogy legyen egy sejtésünk arról, hogy mi fog fogadni minket, amikor rákattintunk. Ennek érdekében az alábbi *alaloldalak* léteznek:

- *<divízió\>*/tutorial/<br>
    Nem workshop jellegű irományok, ahol bemutatunk egy klassz technikát vagy valamilyen lifehack / pro tippet adunk. Az ilyen linkek alatt maga a tutorial neve lesz látható. Ha több cikkből áll, akkor az *"oldalszámot"* is aloldalként fogod látni.
- *<divízió\>*/workshop/<br>
    A workshop, amit az adott divízióból tartottunk. Az ilyen linkek alatt általában a workshopnak az időpontja lesz látható. Vagy valamilyen YouTube videót fogsz itt találni az adott workshopról, vagy egy jegyzetet róla *(esetleg a kettő ötvözetét)*.

Általánosságban, ilyen fajta linkekkel találkozhatsz majd:

```text
# Tutorial
https://roadmap.schdesign.hu/<divízió>/tutorial/<név>/<oldalszám?>

# Workshop
https://roadmap.schdesign.hu/<divízió>/workshop/<dátum>/
```

### Header

Itt tudsz:

- Navigálni a 4 aloldal között
- Egy kapcsoló segítségével változtatni a világos és sötét témák közt.
- Keresni az oldalak közt.
- Illetve, a [GitHub repo](https://github.com/simonyiszk/schdesign-roadmap)ra tudsz könnyedén átnavigálni

### Footer

Linkek a további oldalainkra. Link az [schdesign.hu](https://schdesign.hu/)-ra és a [Logótár](https://logotar.schdesign.hu/)-ra, közösségi médiás profiljaink linkjei: [:fontawesome-brands-facebook:](https://www.facebook.com/schdesignbme/), [:fontawesome-brands-instagram:](https://www.instagram.com/schdesign.hu/), [:fontawesome-brands-youtube:](https://www.youtube.com/channel/UCrpoUHr-I8VjjLgXUz-AV6Q), [:fontawesome-brands-github:](https://github.com/simonyiszk), [:fontawesome-brands-gitlab:](https://git.sch.bme.hu/schdesign), [:fontawesome-brands-behance:](https://www.behance.net/wearethesds/).

### Sidebar

#### Bal oldal

Ezen a helyen tudsz az aloldalak között mozogni kényelmesen. Mutatja, hogy éppen melyik aloldal van megnyitva.

#### Jobb oldal

Ezen a helyen tudsz a konkrét oldalon navigálni. Kiemelt színnel jelzi, hogy éppen melyik bekezdésnél jársz, amin már túlgörgettél, azt elsötétíti.

## Hogyan tudsz hozzájárulni a projekthez

### Slack

Elsődlegesen, lépj be [Slacken](https://schdesign.slack.com/archives/C019S43GNC8) a *#p-wb-schdesign-logotar* publikus csatornába, hogy up-to-date legyél a projekttel kapcsolatban.

### GitHub

Bővebben a hozzájárulásról itt olvashatsz: [Hozzájárulás](/schdesign/tutorial/hozzajarulas/)

### Markdown

Markdown nyelven íródnak a cikkek, amiket ezen az oldalon olvashatsz. Ez az alapja az egész oldalnak. Ezen felül, ki van bővítve a nyelv *(lásd: [cheat sheet](./schdesign/tutorial/markdown-cheatsheet/)*, azaz ki van egészítve nem annyira szabványos újításokkal.

Az ilyen nyelven íródott fájlokból végül HTML kód fog generálódni, ami fel lesz töltve a webszerverre.

### TLDR

1. Forkold a repot
2. Klónozd a saját példányodat
3. Futtasd a `run.ps1` scriptet
4. <i>Commit</i>-old a módosításaidat
5. <i>Push</i>old a <i>remote</i>-ra
6. GitHubon indíts egy <i>pull request</i>-et
7. A <i>pull request</i>-et elfogadja valaki
8. Mágiával HTML kód generálódik, majd élesedik a módosításod
