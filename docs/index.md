---
title: A Roadmap projekt
---

# Üdvözöllek az schdesign Roadmap oldalán!

Ez a projekt azért jött létre, hogy egyszerűen tudjunk megosztani tutorial/workshop/lifehack szerű tartalmakat a másokkal.

## Az oldal felépítése

*Mobilon vizuálisan egy kicsit másabb a helyzet, így csak a PC-s megjelenésre koncentrálok.*

### Aloldalak

Az oldalt alapvetően 3+1 aloldalra lehet bontani. Ezek:

- [web/](./web/)<br>
  Minden, a web divízióhoz köthető tartalomnak a helye.
- [grafika/](./grafika/)<br>
  Minden, a grafika divízióhoz köthető tartalomnak a helye.
- [3d/](./3d/)<br>
  Minden, a 3d divízióhoz köthető tartalomnak a helye.
- [schdesign/](./schdesign/)<br>
  Ez az egyetlen kakukktojás a másik 3 közül. Ez egy inkább általánosabb jellegű aloldal, olyan tartalom számára, amit nem lehet közvetlenül divízióhoz kötni.

#### Aloldalak aloldalai

Az oldal felépítésében próbáltunk arra törekedni, hogy a linkek szépek legyenek, elég legyen csak a linket elolvasni, hogy legyen egy sejtésünk arról, hogy mi fog fogadni minket, amikor rákattintunk. Ennek érdekében az alábbi *alaloldalak* léteznek:

- *<divízió\>*/tutorial/<br>
  Nem workshop jellegű irományok, ahol bemutatunk egy klassz technikát vagy valamilyen lifehack pro tippet adunk. Az ilyen linkek alatt maga a tutorial neve lesz látható. Ha több cikkből áll, akkor az *"oldalszámot"* is aloldalként fogod látni.
- *<divízió\>*/workshop/<br>
  A workshop, amit az adott divízióból tartottunk. Az ilyen linkek alatt általában a workshopnak az időpontja lesz látható. Vagy valamilyen YouTube videót fogsz itt találni az adott workshopról, vagy egy jegyzetet róla *(esetleg a kettő ötvözetét)*.

Általánosságban, ilyen fajta linkkekel találkozhatsz majd:

```text
# Tutorial
https://roadmap.schdesign.hu/<divízió>/tutorial/<név>/<oldalszám?>

# Workshop
https://roadmap.schdesign.hu/<divízió>/workshop/<dátum>/
```

### Header

Itt tudsz navigálni a 4 aloldal között. Ha lejjebb görgetsz, akkor összecsukódik és az éppen olvasott tartalomnak a címe fog megjelenni az oldal nevének a helyén.

Egy kis kapcsoló segítségével tudsz változtatni azon, hogy milyen témát szeretnél használni *(világos vagy sötét)*. Illetve, ha általánosabban keresnél az oldalon, akkor azt is itt teheted meg.

Emellett helyett kapott itt a [GitLab repora mutató link](https://git.sch.bme.hu/schdesign/roadmap), amiben a forráskódját találod meg az oldalnak.

### Footer

Tartalmilag, mint minden más weboldalnak a footerje. Link az [schdesign.hu](https://schdesign.hu/)-ra, hivatkozás a [host](https://kszk.sch.bme.hu/)ra és egyéb, közösségi médiás profiljaink linkjei: [:fontawesome-brands-youtube:](https://www.youtube.com/channel/UCrpoUHr-I8VjjLgXUz-AV6Q), [:fontawesome-brands-facebook:](https://www.facebook.com/schonherzdesignstudio/), [:fontawesome-brands-instagram:](https://www.instagram.com/schdesign.hu/), [:fontawesome-brands-behance:](https://www.behance.net/wearethesds/), [:fontawesome-brands-gitlab:](https://git.sch.bme.hu/schdesign) és [:fontawesome-brands-github:](https://github.com/simonyiszk).

### Sidebar

#### Bal oldal

Ezen a helyen tudsz az aloldalak között mozogni kényelmesen. Mutatja, hogy éppen melyik aloldal van megnyitva.

#### Jobb oldal

Ezen a helyen tudsz a konkrét oldalon navigálni. Kiemelt színnel jelzi, hogy éppen melyik bekezdésnél jársz, amin már túlgörgettél, azt elsötétíti.

## Hogyan tudsz hozzájárulni a projekthez

### Slack / Mattermost(?)

Elsődlegesen, lépj be [Slacken](https://schdesign.slack.com/archives/C019S43GNC8) vagy [Mattermoston](https://mattermost.schdesign.hu/) a *#Roadmap* publikus csatornába, hogy up-to-date legyél a projektel kapcsolatban.

### GitLab

A projekthez való hozzájáruláshoz be kell lépned az [schdesign](https://git.sch.bme.hu/schdesign) csoportba GitLaben és megfelelő jogosultságokkal kell, hogy rendelkezz.

Bővebben a hozzájárulásról itt olvashatsz: [Hozzájárulás](/schdesign/tutorial/hozzajarulas/)

### Markdown

Markdown nyelven íródnak a cikkek, amiket ezen az oldalon olvashatsz. Ez az alapja az egész oldalnak. Ezen felül, fel van túrbózva a nyelv *(lásd: [cheatsheet](./schdesign/tutorial/markdown-cheatsheet/)*, azaz ki van egészítve nem annyira szabványos újításokkal.

Az ilyen nyelven íródott fájlokból végül HTML kód fog generálódni, ami fel lesz töltve a webszerverre.

### TLDR

1. Klónozod a repot
2. Új <i>branch</i>-et hozol létre
3. Elindítod a <i>buildrun</i> scriptet, ezzel egy develop szervert hozol létre a :8000 porton
4. Az új <i>branch</i>-en dolgozol
    1. Új fájl esetén az <i>mkdocs.yml</i> fájlt frissíted
5. <i>Commit</i>olod a módosításokat
6. <i>Push</i>olod a <i>remot</i>ra
7. GitLaben indítasz egy <i>merge request</i>et
8. ???
9. A <i>merge request</i>et elfogadja valaki, akinek van ehhez joga
10. Mágiával HTML kód generálódik, ami fel lesz töltve a webszerverre