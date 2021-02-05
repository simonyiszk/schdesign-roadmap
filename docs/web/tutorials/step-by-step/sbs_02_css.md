# CSS

Egy HTML dokumentumnak a megjelenését **CSS** *(Cascading Style Sheets)*-sel tudjuk megadni. A CSS az egy stílusleíró nyelv, az ilyen típusú forráskódoknak a kiterjesztése `.css` szokott lenni.

Ahogy látható, HTML-el a weboldalnak az elemeit és azok kapcsolatait írtuk le, CSS-sel meg a megjelenést fogjuk leírni.

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

A `valami`-t *szelektor*-nak hívjuk. Ezzel fogjuk megmondani a böngésző számára, hogy ha egy olyan HTML elemet találna, amire illik a szelektorban meghatározott feltétel, akkor a `{..}`-en *(deklaráción)* belül lévő tulajdonságokat alkalmazza rá a megadott értékekkel.

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

És ezek nem állnak meg 2 elemnél, rengeteg elemet fel lehet sorolni egy szelektorban, amikbe általában jól bele is szoktunk zavarodni, de legalább itt van három HTML attribútum, amik segítenek *(valamennyire)*. Többségében ezekből, ezeknek a variációiból fogunk építkezni.

### flashback: *id*, *class*, *style*

Ugye az `id`-nak a lényege, hogy egyedi, a `class`-nak, hogy adott tulajdonságokkal tud felruházni, a `style`-nak meg mi is?

#### `id`

| Szelektor | Mire fog hatni |
| --------- | ---------- |
| `#valami {...}` | Arra az elemre, aminek az id-ja *valami* |

#### `class`

| Szelektor | Mire fog hatni |
| --------- | ---------- |
| `.valami {...}` | Mindenre, aminek a van olyan class-sza, hogy *valami* |

#### inline CSS: `style`

Most vonatkoztassunk el a képzeletbeli `*.css` fájltól, maradjunk `*.html`-en belül. Van az alábbi kódunk:

``` html
<elem style="szin: piros;">
```

Ebben a környezetben a `style` egy attribútum, amivel megadhatunk további... attribútumokat. Ezek a *"további"* attribútumok nem csak úgy jönnek, itt konkrétan CSS deklarációján belül lévő `tulajdonság: érték;` párokat tudjuk felsorolni.

Az egyik előnye, hogy biztosan arra az egy HTML elemre fog alkalmazódni, amin megadtuk. A másik, hogy nem kell szelektorral foglalkozni. De viszont ha mindent így akarnánk megoldani, akkor az a szomorú helyzet van, hogy kódot fogunk ismételni, MINDEN EGYES elemnek meg kéne adni stb. Kicsiben tökéletes, nagyban meg se próbáljuk alkalmazni.

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

1. A böngésző olvassa a kódot.
2. Megjegyzi, hogy minden `<elem>`-nek pirosnak kell lennie.
3. Megjegyzi, hogy minden `<elem>`-nek kéknek kell lennie.
4. Megjeleníti a legutolsó ismert szín szerint az `<elem>`-et.

Szóval kvázi egy felülírás történik.

Ez viszont egy ökölszabály lehet arra, hogy mit fog végül kapni az elemünk:

1. Fentről lefelé végigolvassuk a kódot
2. Megjegyezzük az utolsó ismert értéket
3. Leellenőrízzük, hogy van-e inline CSS (`style="..."`) az elemnek
   1. Ha van, akkor végignézzük benne, hogy mi az utolsó ismert érték
4. Megkaptuk a megoldást

## Ahol minden folytatódik: style.css

A `css` mappánkban hozzunk létre egy `style.css` nevű fájlt. Ez így önmagában még semmit sem tesz, mert a HTML dokumentumunk nem tud a CSS fájlnak a létezérésől. Hozzunk létre kapcsolatot a kettő között az `index.html` fájl `<head>` elemén belül:

``` html
<link rel="stylesheet" href="css/style.css">
```

Ezzel kiegészítve az `index.html` fájl így fog kinézni:

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="https://a-weboldal-logoja.hu/egy/utvonal/logo.png">
                <link rel="stylesheet" href="css/style.css"> <!- Itt adjuk a böngésző tudtára, hogy létezik egy css fájlunk is, amit használni szeretnénk -!>
                <title>Ez a weboldalam címe</title>
            </head>
            <body>            
                <header>
                    <img src="http://weboldalunk.hu/img/logo.png" alt="A weboldalnak a logója">
                    <nav>
                        <a href="http://weboldalunk.hu/fooldal">Főoldal</a>
                        <a href="http://weboldalunk.hu/rolunk">Rólunk</a>
                        <a href="http://weboldalunk.hu/kapcsolat">Kapcsolat</a>
                    </nav>
                </header>
                <main>
                    <article>
                        <nav>
                            <a href="#elso-bekezdes"></a>
                            <a href="#masodik-bekezdes"></a>
                        </nav>
                        <h1>Ez a cikk címe</h1>
                        <p>Valami bevezetőnek a bekezdése</p>
                        <h2>Ez egy alcím</h2>
                        <p>Itt már valami másról is írhatunk</p>
                    </article>
                </main>
                <footer>valami jogi &copy; szöveg</footer>
            </body>
        </html>
        ```

!!! note "Megjegyzés"
    Nagyobb projektek fejlesztési fázisában esetében érdemes nem mindent egy CSS fájlba írni. Jobb szokott lenni, ha kiszervezzük őket több, kisebb fájlba. Ezeket persze mind egyesével `<link>`-elni kell majd.

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
                <link rel="icon" href="https://a-weboldal-logoja.hu/egy/utvonal/logo.png">
                <link rel="stylesheet" href="css/style.css"> <!- Itt adjuk a böngésző tudtára, hogy létezik egy css fájlunk is, amit használni szeretnénk -!>
                <title>Ez a weboldalam címe</title>
            </head>
            <body>            
                <header>
                    <img src="http://weboldalunk.hu/img/logo.png" alt="A weboldalnak a logója">
                    <nav>
                        <a href="http://weboldalunk.hu/fooldal">Főoldal</a>
                        <a href="http://weboldalunk.hu/rolunk">Rólunk</a>
                        <a href="http://weboldalunk.hu/kapcsolat">Kapcsolat</a>
                    </nav>
                </header>
                <main>
                    <article>
                        <nav>
                            <a href="#elso-bekezdes"></a>
                            <a href="#masodik-bekezdes"></a>
                        </nav>
                        <h1>Ez a cikk címe</h1>
                        <p>Valami bevezetőnek a bekezdése</p>
                        <h2>Ez egy alcím</h2>
                        <p>Itt már valami másról is írhatunk</p>
                    </article>
                </main>
                <footer>valami jogi &copy; szöveg</footer>
            </body>
        </html>
        ```

*Hogy mit csináltunk a `<body>`-val?*

A böngészőknek van egy rossz szokása, hogy alapértelmezetten a HTML dokumentumok egy kicsit beljebb kezdődnek. Ez azért van, mert a `<body>`-nak van adva egy kicsi margó. A fenti sorokkal ezt a margót kapcsoltuk ki. De gyorsan vegyük végig ezeket:

### Akkor merre mennyi?

<img src="/web/tutorials/step-by-step/sbs_02_css_padding-border-margin.png" style="background-color: rgb(33, 34, 44);" />

| Tulajdonság | A HTML elem... | Kattintható? |
| - | - | - |
| <span style="color: lightblue;">width, height</span> | ... legbelső része, kattintható | Igen |
| <span style="color: green;">padding</span> | ... határa és legbelső része közti rés | Igen |
| <span style="color: yellow;">border</span> | ... határa | Igen |
| <span style="color: brown;">margin</span> | ... margója, mekkora rés legyen kihagyva két HTML elem közt | Nem |

Ezekkel a tulajdonságokkal le tudjuk írni, hogy melyik HTML elem mekkora legyen meg és mekkora rés legyen kihagyva más elemekhez képest. Még viszont hátra van az elrendezés.

### Ki hol legyen?

Nézzük meg mit is akarunk elérni:

<img src="/web/tutorials/step-by-step/sbs_02_css_website-layout.png" style="background-color: rgb(33, 34, 44);" />

Szóval:

- A `<header>` kerüljön felülre és nyúljon szét
- A `<footer>` kerüljön alulra és nyúljon szét
- A `<main>` legyen középre igazítva
- A `<article>`-ök sorakozzanak egymás alatt

Ezen felül bevett szokás `<header>`-ben a logót bal oldalra, a linkeket jobb oldalra tolni.

Szerencsénkre `flex`-szel mindezt nagyon egyszerűen el tudjuk érni.

#### Magic, amivel (majdnem) minden bajunk megoldódik

``` css
body {
    margin: 0;
    display: flex;
    flex-direction: column;
}
header {
    display: flex;
    flex-direction: row;
    padding: 10px;
}
header > img {
    flex: 1;
}
footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
}
main {
    align-self: center;
    margin: 10px;
    margin: 10px;
}
```


### Nem is olyan rossz dolog ez a metrikus rendszer