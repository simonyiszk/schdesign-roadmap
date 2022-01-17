---
title: Markdown szerkesztési segédlet
description: Végig megyünk a markdown alapjain, lényegretőrően bemutatva mi hogyan épül fel.
---

# Markdown alapok

## Miért Markdown

WYSIWYG-nek hívjuk azt, amikor úgy szerkeszted a fájlt, hogy közben a végeredményt látod. Ennek az egyik legnagyobb hátránya akkor jelentkezik, amikor formázott szövegek közt kell oda-vissza lépkedned. Hányszor fordult elő, hogy be volt kapcsolva a **félkövér**/*dőlt* betűtípus, de te már egy új sorban elkezdtél gépelni, erre *minden amit leírtál az formázott lett*. Markdownban sokkal valószínűtlenebb, hogy ilyen előfordul, mert mindig látod milyen stílusnak mikor van vége.

*[WYSIWYG]: What You See Is What You Get

A HTML-hez hasonló szintaxisa van, de ez sokkal jobban le van egyszerűsítve. Ez azt jelenti, hogy elég lesz nekünk csak a szöveges tartalomra, annak a helyes formázására koncentrálni. A webes megjelenést majd egy másik eszköz fogja megoldani.

!!! note
    Nincs megtiltva az, hogy HTML-t használj a fájlban, sőt, ezt még ki is egészítheted a `style` attribútummal, ezzel is jobban személyre szabhatod a fájlt.

### Markdown fájl: .md

Egy Markdown fájl létrehozásához elég egy `*.md` elnevezésű fájlt létrehoznod.

## Alap szintaxis

A szintaxist 2 csoportra lehet bontani: *teljes sorra* és *sor egy kis részére* alkalmazódóra.

Egész sorra kiható elemeket mindig egy üres sorral kell elválasztani a többitől.

### Fejlécek

Egy jól szervezett Markdown fájlnak a tartalmát fejlécek választják el. Ezek HTML-hez hasonlóan H1-től H6-ig terjednek, ahol H1 a legnagyobb. Általában egy darab H1-es fejléc szokott szerepelni egy dokumentumban, ami a dokumentum címét szokta viselni.

=== "Kód"
    ```markdown linenums="1"
    # H1

    ## H2

    ### H3

    #### H4

    ##### H5

    ###### H6
    ```
=== "Megjelenés"
    Tönkre menne az aloldal, ha ide sima kódként lenne berakva a megjelenés. Szóval inkább néz körbe az oldalon.

### Új sor

Néha nem akarsz új bekezdést kezdeni, de új sort viszont igen. Erre két megoldás van:

**Simán új sorban kezded amit írsz.**

Ennek az a hátránya, hogy lehet nincs támogatva, így egy sornak fogja tekinteni a program, ami HTML kódot generál belőle.

**Használod a `<br>` HTML címkét**

Ez sokkal hatásosabb, látványosabb. Az ilyeneket 1:1-ben átemeli a HTML kódba a fordító.

=== "Kód"
    ```html linenums="1"
    Ez az első sor
    Ez a második

    Ez az első sor<br>
    Ez a második
    ```
=== "Megjelenés"
    Ez az első sor
    Ez a második

    Ez az első sor<br>
    Ez a második

### Bekezdés

Egy bekezdés egy sorból áll. Minden új bekezdést egy üres sorral kell elválasztani a többitől.

=== "Kód"
    ```markdown linenums="1"
    Ez az első bekezdés

    Ez a második bekezdés
    ```
=== "Megjelenés"
    Ez az első bekezdés

    Ez a második bekezdés


### Szöveg kiemelés

Szerkesztőtől függ, de általában gyorsgombok támogatva vanna, így annyival kevesebb szintaxisra kell emlékezni. HTML-hez hasonlóan, ha valamira valamit alkalmazni akarunk, akkor azt körbe kell fogni valamivel. Gyorsgomb használatakor jelöljük ki a formázandó szöveget, majd meg fog jelenni az elején és a végén két jel. Ami ez a két jel között van, arra fog alkalmazódni a formázás.

| Gyorsgomb | Szintaxis | Végeredmény |
|-----------|-----------|-------------|
| ++ctrl+i++ | `*dőlt*` | *dőlt* |
| ++ctrl+b++ | `**félkövér**` | **félkövér** |
| - | `***dőltfélkövér***` | ***dőltfélkövér*** |

### Idézés

Ha idézni szeretnél, akkor minden idézendő sort egy `>` jellel kell kezdened.

=== "Kód"
    ```markdown linenums="1"
    > Ez egy több soros
    >
    > idézet.
    ```
=== "Megjelenés"
    > Ez egy több soros
    >
    > idézet.

!!! note
    Egy idézeten belül is lehet formálni a szöveget.

### Lista készítés

Listából két fajta van: **számozott** és **számozatlan**.

=== "Kód"
    ```markdown linenums="1"
    1. Ez
    2. Egy
    3. Számozott
        1. Lista
    4. Amiben
    5. Van
    6. Beljebb kezdés

    - Ez
    - Egy
    - Számozatlan
        - Lista
    - Amiben
    - Van
    - Beljebb kezdés
    ```
=== "Megjelenés"
    1. Ez
    2. Egy
    3. Számozott
        1. Lista
    4. Amiben
    5. Van
    6. Beljebb kezdés
    
    Lista lista utánt nem szeret a program, így kell ide valamilyen elválasztó szöveg 😢.

    - Ez
    - Egy
    - Számozatlan
        - Lista
    - Amiben
    - Van
    - Beljebb kezdés


!!! danger
    Indentálásnál **4 darab** ++space++-t kell használni.

!!! note
    Számozott és számozatlan listát lehet egymásba ágyazni.

### Kód beillesztés

Kódot lehet teljes vagy részleges formában beilleszteni.

=== "Kód"
    ```markdown
    Ebben a mondatban van egy `function()` kód, ami nem fut le.
    ```

            <div>
                <span>Ez egy többsoros kód, amit beljebb kezdéssel érek el, hogy ne fusson le</span>
            </div>
=== "Megjelenés"
    Ebben a mondatban van egy `function()` kód, ami nem fut le.

        <div>
            <span>Ez egy többsoros kód, amit beljebb kezdéssel érek el, hogy ne fusson le</span>
        </div>


### Linkek

Linkeket is sokféleképpen lehet beilleszteni.

=== "Kód"
    ```markdown
    Lehet egy szövegrésznek [a link](https://google.com).
    ```

    Lehet hivatkozni is rá, pl. ha sok link van, sok helyen újra felhasználnád.

    ```markdown
    Ez egy [hivatkozás][id] egy linkre, amit valahol máshol definiálok.

    ...
    [id]: https://google.com
    ```
=== "Megjelenés"
    Lehet egy szövegrésznek [a link](https://google.com).

    Lehet hivatkozni is rá, pl. ha sok link van, sok helyen újra felhasználnád.

    Ez egy [hivatkozás][id] egy linkre, amit valahol máshol definiálok.

    [id]: https://google.com

### Képek

=== "Kód"
    ```markdown
    ![Ide jön a kép neve, ha nem töltődne be](https://a-kép-elérési-útvonala.hu/kép.png "Ide pedig az a szöveg jön, amit egér rávitel során kell látni")
    ```
=== "Megjelenés"
    ![Ide jön a kép neve, ha nem töltődne be](https://a-kép-elérési-útvonala.hu/kép.png "Ide pedig az a szöveg jön, amit egér rávitel során kell látni")

### További olvasmány

Ez csak egy gyors összefoglalója az alap Markdown szintaxisnak, ennél bővebb útmutatók találhatóak szertemenően az interneten.

Forrás: https://www.markdownguide.org/basic-syntax/

## Kibővített szintaxis

Ha a fenti feature-ökön végignézünk, akkor az elég szegényes. Nem is volt a célja a nyelvnek, hogy újra feltalálja a kereket, de ettől függetlenül néhány dolog még mindig hiányzik a nyelvől, amit jó volna, ha tudna. Ennek az lett az eredménye, hogy ki lett egészítve a nyelv.

Az itt leírtak már nem biztos hogy mindenhol, ahol Markdownt használnak, működni fog. Lehet egy kicsit módosítani kell majd rajta, de a *"nagyoknál"* működik.

### Táblázatok

=== "Kód"
    ```markdown linenums="1"
    | Valami | Más |
    | ------ | --- |
    | 1      | 2   |
    | 3      | 4   |
    ```
=== "Megjelenés"
    | Valami | Más |
    | ------ | --- |
    | 1      | 2   |
    | 3      | 4   |

### Határolt kódblokk

Eddig beljebb kellett kezdeni minden sort, amiben kód volt és nem szerettük volna, hogy lefusson.

Most már elég lesz körbehatárolni azt.

=== "Kód"
    ````markdown linenums="1"
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```
    ````
=== "Megjelenés"
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```

Emellett az első sornak a végén meg lehet adni, hogy milyen kódról van szó, így ha támogatva van a szintaxis felismerés, akkor már helyes színek mellett fog megjelenni a kód.

### Lábjegyzet

=== "Kód"
    ```markdown linenums="1"
    Ez egy átvett szöveg, aminek a végén van egy lábjegyzet[^1]

    [^1]: Link vagy valami.
    ```
=== "Megjelenés"
    Ez egy átvett szöveg, aminek a végén van egy lábjegyzet[^1]

    [^1]: Link vagy valami.

### Definíciós lista

=== "Kód"
    ```markdown linenums="1"
    First Term
    : This is the definition of the first term.

    Second Term
    : This is one definition of the second term.
    : This is another definition of the second term.
    ```
=== "Megjelenés"
    First Term
    : This is the definition of the first term.

    Second Term
    : This is one definition of the second term.
    : This is another definition of the second term.

### Áthúzott szöveg

=== "Kód"
    ```markdown
    ~~Ez át van húzva~~, ez már nem.
    ```
=== "Megjelenés"
    ~~Ez át van húzva~~, ez már nem.

### Feladat lista

=== "Kód"
    ```markdown linenums="1"
    - [x] Write the press release
    - [ ] Update the website
    - [ ] Contact the media
    ```
=== "Megjelenés"
    - [x] Write the press release
    - [ ] Update the website
    - [ ] Contact the media

### Emoji

Unicode vagy *shortcode* használatával.

=== "Kód"
    ```markdown linenums="1"
    :apple:

    :cheese:

    :fontawesome-brands-facebook:

    😍☺️👀✅➡️😕
    ```
=== "Megjelenés"
    :apple:

    :cheese:

    :fontawesome-brands-facebook:

    😍☺️👀✅➡️😕

!!! note
    Vegyük észre, hogy a shortcode-dal beillesztett `:apple:` vagy más emoji igazából egy kép, unicode karakter meg egy... nos... karakter. Ez akkor lehet igazán fontos, ha szöveget szeretnénk másolni.

### Automatikus URL felismerés

Ha csak egy gyors linket szeretnél beilleszteni, akkor nem kell formázással törődnöd, elég csak a linket beilleszteni, amiből automatikusan kattintható változat lesz.

### További olvasmány

Ez csak egy gyors összefoglalója a kibővített Markdown szintaxisnak, ennél bővebb útmutatók találhatóak szertemenően az interneten.

- Forrás: https://www.markdownguide.org/extended-syntax/
- [Markdown Cheatsheet](/schdesign/tutorial/markdown-cheatsheet/)
