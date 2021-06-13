---
title: CSS
description: TODO
author: Radeczki Gergő István
---

# CSS

Egy HTML dokumentumnak a megjelenését **CSS** *(Cascading Style Sheets)*-sel tudjuk megadni. A CSS az egy stílusleíró nyelv, az ilyen típusú forráskódoknak a kiterjesztése `.css` szokott lenni.

Ahogy látható, HTML-el a weboldalnak az elemeit és azok kapcsolatait írtuk le, CSS-sel a megjelenést fogjuk leírni.

## A nyelv építőelemei

HTML-hez hasonlóan, ebben is van lehetőségünk kommentelni: 

``` css
/*
ez egy komment
mindez figyelmen kívül lesz hagyva :(
*/
```

Általánosságban, valami ilyesmit fogunk írni:

``` css
valami {
    tulajdonsag1: ertek1;
    tulajdonsag2: ertek2;
}
```

A `valami`-t *szelektor*-nak *(selector)* hívjuk. Ezzel fogjuk megmondani a böngésző számára, hogy ha egy olyan HTML elemet találna, amire illik a szelektorban meghatározott feltétel, akkor a `{..}`-en *(deklaráción)* belül lévő tulajdonságokat alkalmazza rá a megadott értékekkel.

Szóval igazából ezt fogjuk csinálni, amikor CSS-t írunk:

1. csinálunk egy szelektort
2. deklaráljuk
3. tulajdonság-érték párokat adunk neki
4. ellenőrízzük, hogy a böngészőben jól jelenik-e meg amit csináltunk

!!! warning "Erre figyelj"
    HTML-hez hasonlóan CSS-nél se csap rá a kezünkre a böngésző, ha valamit rosszul írunk, de itt valamennyivel látványosabb lesz, ha elgépelünk valamit.

### szelektorok

Szelektorokat rengeteg féle képpen meg lehet adni. Ezekhez nézzünk meg egy leegyszerűsített táblázatot:

| Szelektor | Mire fog hatni |
| --------- | ---------- |
| `* {...}` | Minden HTML elemre |
| `elem {...}` | Minden `<elem>`-re a HTML dokumentumban |
| `elem1 elem2 {...}` | Minden `<elem2>`-re, ami közvetlen vagy közvetett leszármazottja `<elem1>`-nek  |
| `elem1 > elem2 {...}` | Minden `<elem2>`-re, ami **közvetlen** leszármazottja `<elem1>`-nek |
| `elem1, elem2 {...}` | Minden `<elem1>`-re és `<elem2>`-re a HTML dokumentumban |
| `elem:first-child` | Az `<elem>` első leszármazottjára |

És ezek nem állnak meg 2 elemnél, rengeteg elemet fel lehet sorolni egy szelektorban, amikbe általában bele is szoktunk zavarodni, de legalább itt van három HTML attribútum, amik segítenek *(valamennyire)*. Többségében a fentiekből, ezeknek a variációiból fogunk építkezni.

### flashback: *id*, *class*, *style*

Ugye az `id`-nak a lényege, hogy egyedi, a `class`-nak, hogy többen használhatják, a `style`-nak meg mi is?

#### `id`

| Szelektor | Mire fog hatni |
| --------- | ---------- |
| `#valami {...}` | Arra az elemre, aminek az *id*-ja *valami* |

#### `class`

| Szelektor | Mire fog hatni |
| --------- | ---------- |
| `.valami {...}` | Mindenre, aminek van *valami* nevű *class*-sza |

#### inline CSS: `style`

Most vonatkoztassunk el a képzeletbeli `*.css` fájltól, maradjunk `*.html`-en belül. Van az alábbi kódunk:

``` html
<elem style="szin: piros;">
```

Ebben a környezetben a `style` egy attribútum, amivel megadhatunk további... attribútumokat. Ezek a *"további"* attribútumok nem csak úgy jönnek, itt konkrétan CSS deklarációján belül lévő `tulajdonság: érték;` párokat tudjuk felsorolni.

Az egyik előnye, hogy biztosan arra az egy HTML elemre fog alkalmazódni, aminek megadtuk. A másik, hogy nem kell szelektorral foglalkozni.

Ha mindent így akarnánk megoldani, akkor az a szomorú helyzet van, hogy kódot fogunk ismételni, MINDEN EGYES elemnek meg kéne adni stb. Kicsiben tökéletes, nagyban meg se próbáljuk alkalmazni.

## CSS alkalmazási sorrendek

Megéri elmerengeni ezen a kérdésen. Ugye, nem szól nekünk senki, ha ugyan azt leírjuk kétszer. Képzeljük el az alábbi helyzetet:

``` css
elem {
    szin: piros;
}

elem {
    szin: kek;
}
```

Az `<elem>`-nek most milyen lesz a színe? *(A fenti kód helyes, semmi sem tiltja meg, hogy 2x kijelöljük ugyan azt.)*

Válasz: kék.

De miért? Mert a fordított sorrend dönt. Képzeljük el így a történteket:

1. A böngésző fentről lefelé olvassa a kódot.
2. Megjegyzi, hogy minden `<elem>`-nek pirosnak kell lennie.
3. Megjegyzi, hogy minden `<elem>`-nek kéknek kell lennie.
4. Megjeleníti a legutolsó ismert szín szerint az `<elem>`-et.

Szóval kvázi egy felülírás történik.

Ez viszont egy ökölszabály lehet arra, hogy mit fog végül kapni az elemünk:

1. Fentről lefelé végigolvassuk a kódot.
2. Megjegyezzük az utolsó ismert értéket.
3. Leellenőrízzük, hogy van-e inline CSS (`style="..."`) az elemnek.
   1. Ha van, akkor végignézzük benne, hogy mi az utolsó ismert érték.
4. Megkaptuk a megoldást.

## Ahol minden folytatódik: style.css

Hozzunk létre a gyökérmappában `style.css` nevű fájlt. Ez így önmagában még semmit sem tesz, mert a HTML dokumentum nem tud a CSS fájlnak a létezérésől. Hozzunk létre kapcsolatot a kettő között az `index.html` fájl `<head>` elemén belül:

``` html
<link rel="stylesheet" href="style.css">
```

Ezzel kiegészítve az `index.html` fájl így fog kinézni:

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="logo.svg">
                <!-- Itt adjuk a böngésző tudtára, hogy létezik egy css fájlunk is, amit használni szeretnénk -->
                <link rel="stylesheet" href="style.css">
                <title>Ez a weboldalam címe</title>
            </head>
            <body>
                <header>
                    <div id="logo">
                        <img src="logo.svg" alt="A weboldalnak a logója">
                    </div>
                    <nav>
                        <a href="#">Link #1</a>
                        <a href="#">Link #2</a>
                        <a href="#">Link #2</a>
                    </nav>
                </header>
                <main>
                    <h1 id="title">Egy online jegyzet</h1>
                    <h2 id="tartalomjegyzek">Tartalomjegyzék</h2>
                    <nav>
                        <ol start="0">
                            <li>
                                <a href="#tartalomjegyzek">Tartalomjegyzék</a>
                            </li>
                            <li>
                                <a href="#elso-fejezet">Első fejezet</a>
                                <ol>
                                    <li>
                                        <a href="#elso-alfejezet">Első alfejezet</a>
                                    </li>
                                    <li>
                                        <a href="#masodik-alfejezet">Második alfejezet</a>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </nav>
                    <article>
                        <section>
                            <h1 id="elso-fejezet">Első fejezet</h1>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                        <section>
                            <h2 id="elso-alfejezet">Első alfejezet</h2>
                            <p>Ezt majd később feltöltjük.</p>
                            <img src="cat.jpg">
                            <p class="img-caption">Ez egy magyarázat a képhez</p>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                        <section>
                            <h2 id="masodik-alfejezet">Második alfejezet</h2>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                    </article>
                </main>
                <footer>valami jogi &copy; szöveg</footer>
            </body>
        </html>
        ```

!!! note "Megjegyzés"
    Nagyobb projektek fejlesztési fázisában érdemes nem mindent egy CSS fájlba írni. Jobb szokott lenni, ha kiszervezzük őket több, kisebb fájlba. Ezeket persze mind egyesével `<link>`-elni kell majd.

Az átláthatóság kedvéért *(meg mert előre látóak vagyunk :) )*, hozzunk létre még egy `layout.css` és `responsive.css` nevű fájlt is, szintén a gyökérmappában.

### Az a fránya `<body>`

Most már megkezdhetjük a `style.css` fájlnak a feltöltését kóddal:

!!! example ""
    === "style.css"
        ``` css
        body {
            margin: 0;
        }
        ```
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="logo.svg">
                <!-- Itt adjuk a böngésző tudtára, hogy létezik egy css fájlunk is, amit használni szeretnénk -->
                <link rel="stylesheet" href="layout.css"> 
                <title>Ez a weboldalam címe</title>
            </head>
            <body>
                <header>
                    <div id="logo">
                        <img src="logo.svg" alt="A weboldalnak a logója">
                    </div>
                    <nav>
                        <a href="#">Link #1</a>
                        <a href="#">Link #2</a>
                        <a href="#">Link #2</a>
                    </nav>
                </header>
                <main>
                    <h1 id="title">Egy online jegyzet</h1>
                    <h2 id="tartalomjegyzek">Tartalomjegyzék</h2>
                    <nav>
                        <ol start="0">
                            <li>
                                <a href="#tartalomjegyzek">Tartalomjegyzék</a>
                            </li>
                            <li>
                                <a href="#elso-fejezet">Első fejezet</a>
                                <ol>
                                    <li>
                                        <a href="#elso-alfejezet">Első alfejezet</a>
                                    </li>
                                    <li>
                                        <a href="#masodik-alfejezet">Második alfejezet</a>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </nav>
                    <article>
                        <section>
                            <h1 id="elso-fejezet">Első fejezet</h1>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                        <section>
                            <h2 id="elso-alfejezet">Első alfejezet</h2>
                            <p>Ezt majd később feltöltjük.</p>
                            <img src="cat.jpg">
                            <p class="img-caption">Ez egy magyarázat a képhez</p>
                            <p>Ezt majd később feltöltjük.</p>    
                        </section>
                        <section>
                            <h2 id="masodik-alfejezet">Második alfejezet</h2>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                    </article>
                </main>
                <footer>valami jogi &copy; szöveg</footer>
            </body>
        </html>
        ```

*Hogy mit csináltunk a `<body>`-val?*

A böngészőknek van egy rossz szokása, hogy alapértelmezetten a HTML dokumentumok egy kicsit beljebb kezdődnek. Ez azért van, mert a `<body>`-nak van adva egy kicsi margó. A fenti sorokkal ezt a margót *"kikapcsoltuk"*.

Margón kívül van még egy pár dolog, amivel méreteket tudunk megadni, vegyük is végig ezeket.

### Akkor merre mennyi?

<img src="/web/tutorial/step-by-step/sbs_02_css_padding-border-margin.png" style="background-color: rgb(33, 34, 44);" />

| Tulajdonság | A HTML elem... | Kattintható? |
| - | - | - |
| <span style="color: lightblue;">width, height</span> | ... szélessége és magassága, kattintható | Igen |
| <span style="color: green;">padding</span> | ... kitöltése | Igen |
| <span style="color: yellow;">border</span> | ... határa | Igen |
| <span style="color: brown;">margin</span> | ... margója, mekkora rés legyen kihagyva más HTML elemhez képest | Nem |

Ezekkel a tulajdonságokkal le tudjuk írni, hogy melyik HTML elem mekkora legyen és mekkora rés legyen kihagyva más elemekhez képest. Még viszont hátra van az elrendezés.

!!! warning "Erre figylej!"
    Ha egy elemnek megadjuk, hogy `width: 100px; padding: 10px;` akkor nem 100px széles lesz, hanem 120px. Ez úgy jön ki, hogy a 100px szélességhez hozzáadódik még a 10px kitöltés balról és jobbról is, így `100+10+10=120` lesz a valódi szélesség. Az alábbi kóddal ki lehet kapcsolni: 

``` css
/* A '*' szelektorral MINDEN html elemet kijelölünk */
* {
    box-sizing: border-box;
}
/* Ezt a kódot ebben a tutorialban nem használjuk, de jó tudni, hogy van ilyen */
```

### Ki hol legyen?

Nézzük meg mit is akarunk elérni:

<img src="/web/tutorial/step-by-step/sbs_02_css_website-layout.png" style="background-color: rgb(33, 34, 44);" />

Szóval:

- A `<header>` kerüljön felülre és nyúljon szét
- A `<footer>` kerüljön alulra és nyúljon szét
- A `<main>` legyen középre igazítva

Ezen felül bevett szokás `<header>`-ben a logót bal oldalra, a linkeket jobb oldalra tolni.

Szerencsénkre `flex`-szel mindezt nagyon egyszerűen el tudjuk érni.

#### Flex, amivel (majdnem) minden bajunk megoldódik

``` css
body {
    margin: 0;
    display: flex; /* A tartalmadat flex-szerűen... */
    flex-direction: column; /* ...függőleges irányban jelenítsd meg */
}
header {
    display: flex; /* flex-szerű tartalom megjelenítés */
    flex-direction: row; /* sorban jelenjen meg a tartalmad */
    align-items: center; /* Függőlegesen középre kerül minden */
    height: 50px;
}
#logo {
    flex: 1; /* megengedjük neki, hogy az összes elérhető helyet megkapja */
    /* emiatt fognak a linkek jobb oldalra kerülni */
}
#logo > img {
    height: 40px;
}
main {
    margin: 20px;
    padding: 20px;
    width: 960px;
    align-self: center;
}
footer {
    padding: 20px;
}
```

| Tulajdonság | Mire való |
| - | - |
| height | Milyen magas legyen az elem |
| max-width | Maximum milyen széles legyen az elem |
| display | Milyen módon jelenjen meg az adott elem |
| flex-direction | Milyen irányba helyezze el a leszármazottakat |
| flex | A tartalomhoz mérten mekkorára nyúljon az elem |
| align-self | Önmagát helyezi el vertikálisan/horizontálisan |
| align-items | A közvetlen leszármazottak elhelyezkedése |

Lehet, hogy elsőre bonyolultnak tűnik, de ha megnéznénk, mi volt HTML5 és CSS3 előtt, akkor biztosan mindenki a fenti megoldást választaná.

Akkor most szavakkal, hogy mi is történt:

Mivel a `<header>`, `<main>` és `<footer>` a `<body>`-ból származnak le, ezért ezt a külső *"konténert"* beállítjuk, hogy *flex*-ként viselkedjen és oszlopszerűen jelenítse meg a tartalmát.

A `<header>`-t is külső konténerként kezelve megmondjuk neki is, hogy *flex* legyen, de sorban jelenítse meg a leszármazottakat. A benne lévő `<div id="logo">`-t felhasználjuk arra, hogy jobbra tolja a linkeket.

`<footer>`-t majd a stílusnál módosítjuk egy kicsit jobban.

A `<main>` középre tolja önmagát. Ezen felül kényelmi szempontok miatt adunk neki egy kis margint és paddinget.

!!! note "Megjegyzés"
    Jelenleg a `<footer>` nincs a böngésző aljába tolva. Ez azér van, mert nincs elég tartalom a jegyzetben. Az egyik megoldás, hogy kiegészítjük a jegyzetet elegendő tartalommal. A másikat meg majd a reszponzivitásnál fogjuk megnézni.

#### Szervezzük ki egy másik fájlba

Az eddig leírtak, ha minden igaz, akkor a `style.css`-ben vannak. Most ezt tegyük át a `layout.css`-be.

Ez csak egy kényelmi lépés, lehet nyugodtan a következő sorban is folytatni a további kódokat, nem lesz belőle probléma. De így valamennyire nyerünk az átláthatósággal.

Teremtsük meg a kapcsolatot az `index.html` és a `layout.css` között is és figyeljünk arra, hogy a `style.css` előtt legyen az alábbi kód:

``` html
<link rel="stylesheet" href="layout.css">
```

Most valahogy így állunk fájlokat tekintve:

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="logo.svg">
                <!-- Itt adjuk a böngésző tudtára, hogy létezik egy css fájlunk is, amit használni szeretnénk -->
                <link rel="stylesheet" href="layout.css"> 
                <link rel="stylesheet" href="style.css"> 
                <title>Ez a weboldalam címe</title>
            </head>
            <body>
                <header>
                    <div id="logo">
                        <img src="logo.svg" alt="A weboldalnak a logója">
                    </div>
                    <nav>
                        <a href="#">Link #1</a>
                        <a href="#">Link #2</a>
                        <a href="#">Link #2</a>
                    </nav>
                </header>
                <main>
                    <h1 id="title">Egy online jegyzet</h1>
                    <h2 id="tartalomjegyzek">Tartalomjegyzék</h2>
                    <nav>
                        <ol start="0">
                            <li>
                                <a href="#tartalomjegyzek">Tartalomjegyzék</a>
                            </li>
                            <li>
                                <a href="#elso-fejezet">Első fejezet</a>
                                <ol>
                                    <li>
                                        <a href="#elso-alfejezet">Első alfejezet</a>
                                    </li>
                                    <li>
                                        <a href="#masodik-alfejezet">Második alfejezet</a>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </nav>
                    <article>
                        <section>
                            <h1 id="elso-fejezet">Első fejezet</h1>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                        <section>
                            <h2 id="elso-alfejezet">Első alfejezet</h2>
                            <p>Ezt majd később feltöltjük.</p>
                            <img src="cat.jpg">
                            <p class="img-caption">Ez egy magyarázat a képhez</p>
                            <p>Ezt majd később feltöltjük.</p>    
                        </section>
                        <section>
                            <h2 id="masodik-alfejezet">Második alfejezet</h2>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                    </article>
                </main>
                <footer>valami jogi &copy; szöveg</footer>
            </body>
        </html>
        ```
    === "style.css"
        ``` css
        /* Jelenleg üres :( */
        ```
    === "layout.css"
        ``` css
        body {
            margin: 0;
            display: flex;
            flex-direction: column;
        }
        header {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 50px;
        }
        #logo {
            flex: 1;
        }
        #logo > img {
            height: 40px;
        }
        main {
            margin: 20px;
            padding: 20px;
            width: 960px;
            align-self: center;
        }
        footer {
            padding: 20px;
        }
        ```

## Színezzük ki

A `style.css` fájlban vigyük véghez a szükséges színek, határok, árnyékok *stb.* beállítását.

Mindenek előtt importáljuk a letöltött szövegtípust.

``` css
@font-face {
    font-family: 'Roboto'; /* Milyen névvel érjük majd el */
    src: url('Roboto-Regular.ttf') format('truetype'); /* Hol és milyen típusú a fájl */
}
```

!!! note "Megjegyzés"
    Ha egy szövegtípus nincs előre telepítve az operációs rendszeren, akkor azt CSS-en keresztül importálni kell, különben nem fogja tudni a böngésző, hogy mit jelenítsen meg.

Most már beállíthatjuk, hogy ezt használja minden. Ezen felül meg adjunk a `<body>`-nak egy nagyon világos szürke hátteret.

``` css
body {
    font-family: 'Roboto';
    background-color: rgb(240, 240, 240);
}
```

Így el fog tudni különülni a jegyzettől, aminek majd fehér hátteret adunk.

Most a `<header>`-t szépítsük meg. Legyen neki barna színe, a linkek legyenek fehérek és tűnjön el az az aláhúzás alóluk.

A jobb kattinthatóság kedvéért adjunk a linkeknek egy kis kitöltést.

``` css
header {
    background-color: rgb(136, 99, 64);
    /* Árnyékok révén térhatást tudunk adni a headernek */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
header > nav > a {
    color: white;
    padding: 5px 20px; /* Kitöltés a jobb kattinthatóság érdekében */
    text-decoration: none; /* Kikapcsoljuk az aláhúzást */
}
```

Akkor a `<main>`-t is emeljük ki. Árnyékolással adjunk neki egy kis térhatást és kerekítsük le a sarkait, mindemellett meg legyen fehér, hogy még jobban kiemelődjön.

``` css
main {
    border-radius: 5px; /* Lekerekítjük a négy sarkát */
    background-color: white;
    /* Térhatás árnyékkal */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); 
}
```

A tartalomjegyzéket is próbáljuk egy kicsit megkülönböztetni:

``` css
main > nav > ol li > a {
    text-decoration: none; /* Kikapcsoljuk az aláhúzást */
    color: black;
    font-style: italic; /* Dőlt betűtípus */
}

main > nav > ol > li {
    margin: 10px;
}

main > nav {
    padding: 5px;
    background-color: rgb(220,220,220);
    border-radius: 5px;
}
```

A jegyzet címét, a fejléceket és a paragrafust is variáljuk meg egy kicsit:

``` css
#title {
    text-align: center; /* Középre igazítás */
    font-size: 40px;
}

h1, h2, h3, h4, h5, h6 {
    /* 
        Fentről indulva, óramutató járásával megegyezően haladva
        margin: Fent, jobbra, lent, balra
    */
    margin: 30px 0 10px 0;
}

h1 {
    font-size: 35px; /* Mekkora legyen a betű */
}

h2 {
    font-size: 25px;
}

h3 {
    font-size: 15px;
}

p {
    text-align: justify; /* Faltól falig lesznek a sorok */
    margin: 10px 0 20px 0;
}
```

Mivel szeretnénk támogatni a képek beilesztését és a képaláírást, ezért még az alábbi sorokkal is egészítsük ki a kódunkat:

``` css
article img { /* Minden jegyzeten belüli képre alkalmazódni fog */
    box-sizing: border-box; /* A böngésző nem mindig szereti "logikusan" számolni a dolgokat */
    display: block; /* Semmi képpen se kerüljön valami vele egy sorba */
    max-width: 100%; /* Erről majd a reszponzivitásban, most fogadjuk el, hogy itt van */
    padding: 0 20px;
    margin-left: auto; /* blokk megjelenítésű elemeket így kell középre igazítani */
    margin-right: auto; /* blokk megjelenítésű elemeket így kell középre igazítani */
}

.img-caption {
    text-align: center;
    color: rgb(150,150,150);
    font-style: italic;
    margin: 5px 0 20px 0;
}
```

Végül a `<footer>`-nek is adjunk egy stílust:

``` css
footer {
    color: white;
    background-color: rgb(102, 73, 47);
    text-align: center;
}
```

## Összegzés

- `<link>`-eket felhasználva tudjuk hozzáadni a CSS fájlokat a HTML dokumentumunkhoz.
- szelektorokon keresztül meghatározzuk, hogy mit akarank megváltoztatni.
- `{...}` belül `tulajdonság: érték;` formában felsoroljuk a változtatásokat.
- Ha többször szerepel egy tulajdonság, akkor a legutolsó értéke fog érvényesülni.

### Végleges kód

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="logo.svg">
                <link rel="stylesheet" href="layout.css"> 
                <link rel="stylesheet" href="style.css"> 
                <title>Ez a weboldalam címe</title>
            </head>
            <body>
                <header>
                    <div id="logo">
                        <img src="logo.svg" alt="A weboldalnak a logója">
                    </div>
                    <nav>
                        <a href="#">Link #1</a>
                        <a href="#">Link #2</a>
                        <a href="#">Link #2</a>
                    </nav>
                </header>
                <main>
                    <h1 id="title">Egy online jegyzet</h1>
                    <h2 id="tartalomjegyzek">Tartalomjegyzék</h2>
                    <nav>
                        <ol start="0">
                            <li>
                                <a href="#tartalomjegyzek">Tartalomjegyzék</a>
                            </li>
                            <li>
                                <a href="#elso-fejezet">Első fejezet</a>
                                <ol>
                                    <li>
                                        <a href="#elso-alfejezet">Első alfejezet</a>
                                    </li>
                                    <li>
                                        <a href="#masodik-alfejezet">Második alfejezet</a>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </nav>
                    <article>
                        <section>
                            <h1 id="elso-fejezet">Első fejezet</h1>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                        <section>
                            <h2 id="elso-alfejezet">Első alfejezet</h2>
                            <p>Ezt majd később feltöltjük.</p>
                            <img src="cat.jpg">
                            <p class="img-caption">Ez egy magyarázat a képhez</p>
                            <p>Ezt majd később feltöltjük.</p>    
                        </section>
                        <section>
                            <h2 id="masodik-alfejezet">Második alfejezet</h2>
                            <p>Ezt majd később feltöltjük.</p>
                        </section>
                    </article>
                </main>
                <footer>valami jogi &copy; szöveg</footer>
            </body>
        </html>
        ```
    === "style.css"
        ``` css
        @font-face {
            font-family: 'Roboto';
            src: url('Roboto-Regular.ttf')  format('truetype');
        }
        body {
            font-family: 'Roboto';
            background-color: rgb(240, 240, 240);
        }
        header {
            background-color: rgb(136, 99, 64);
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
        header > nav > a {
            color: white;
            padding: 5px 20px;
            text-decoration: none;
        }
        main {
            border-radius: 5px;
            background-color: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
        main > nav > ol li > a {
            text-decoration: none;
            color: black;
            font-style: italic;
        }
        main > nav > ol > li {
            margin: 10px;
        }
        main > nav {
            padding: 5px;
            background-color: rgb(220,220,220);
            border-radius: 5px;
        }
        #title {
            text-align: center;
            font-size: 40px;
        }
        h1, h2, h3, h4, h5, h6 {
            margin: 30px 0 10px 0;
        }
        h1 {
            font-size: 35px;
        }
        h2 {
            font-size: 25px;
        }
        h3 {
            font-size: 15px;
        }
        p {
            text-align: justify;
            margin: 10px 0 20px 0;
        }
        footer {
            color: white;
            background-color: rgb(102, 73, 47);
            text-align: center;
        }
        article img {
            box-sizing: border-box;
            display: block;
            max-width: 100%;
            padding: 0 20px;
            margin-left: auto;
            margin-right: auto;
        }
        .img-caption {
            text-align: center;
            color: rgb(150,150,150);
            font-style: italic;
            margin: 5px 0 20px 0;
        }
        ```
    === "layout.css"
        ``` css
        body {
            margin: 0;
            display: flex;
            flex-direction: column;
        }
        header {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 50px;
        }
        #logo {
            flex: 1;
        }
        #logo > img {
            height: 40px;
        }
        main {
            margin: 20px;
            padding: 20px;
            width: 960px;
            align-self: center;
        }
        footer {
            padding: 20px;
        }
        ```
    === "Előnézet"
        <iframe style="width: 100%; height: 500px;" src="https://gergoradeczki.github.io/tutorials/step-by-step/02_css/index.html"></iframe>

!!! note "Megjegyzés"
    A CSS fájlokban sok, feladat specifikus szelektor lett használva, így a kódot nem nagyon lehet egyszerűen újra felhasználni.

## Kvíz a tanultakhoz

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdtK77CVms5gCefnMV1eTvCfUUVsbwPcp2buKmLJjNNf_7e9g/viewform?embedded=true" width="640" height="610" frameborder="0" marginheight="0" marginwidth="0">Betöltés…</iframe>