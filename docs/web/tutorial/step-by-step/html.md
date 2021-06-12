# HTML

Egy weboldalnak a felépítése a **HTML** _(Hypertext Markup Language)_-el kezdődik. Ez nem egy programozási nyelv, hanem egy leíró nyelv. Az ilyen típusú egyszerű szöveges dokumentumoknak a kiterjesztése rendre `.html` vagy `.htm` szokott lenni. Ezek közül az előbbi van sokkal jobban elterjedve.

Más dokumentumokkal szemben *(pl. Word, Excel stb.)*, szerkesztéséhez elegendő akár a Windows-os Notepad is.

!!! note "Megjegyzés"
    A C és más programozási nyelvekhez hasonlóan ebben is lehet kommentelni. Sőt, ha elég távolra tévedünk, akkor még feltételes elemekkel *[(conditional comments)](https://htmldog.com/guides/html/advanced/conditionalcomments/)* is találkozhatunk.

## A nyelv építőelemei

<img src="/web/tutorial/step-by-step/sbs_01_html_tag_analysis_dark.png" style="background-color: rgb(33, 34, 44);" />

Egy HTML elem *(HTML tag)* 3 részre bontható: nyitó elem *(opening tag)*, tartalom *(content)* és záró elem *(closing tag)*. Ezek közül a nyitó elem az, amelyik a legfontosabb. Ebben ugyanis van lehetőségünk attribútumokat *(jellemzőket)* megadni, amik pontosabb képet adnak az elemünkről. Általában `attributum="érték"` párban találkozunk velük, de előfordulhat, hogy csak az attribútum neve szerepel. Ez azzal magyarázható, hogy vannak attribútumok, amiknek az értéke boolean típusú *(`true` vagy `false` lehet)*. Ilyenkor, pusztán leírni az attribútumot azt jelenti, hogy az értékét `true`-ra állítjuk, nem leírni meg ennek az ellenkezőjét.
``` HTML
<elem szín="kék">Ez egy kék szöveg</elem> <!-- szín: kék, hidden: false -->
<elem hidden>Ezt a böngésző nem fogja megjeleníteni</elem> <!-- hidden: true -->
```

A záró elem csak annyit jelent, hogy leírjuk az elem nevét és elé teszünk egy `/` jelet. De, elég hamar találkozni fogunk olyan elemekkel, amiknek nincsen záró része, kvázi a kezdő elem a záró elem is egyben. Ezeket kétféleképpen lehet lezárni: `<elem>` vagy `<elem />`. Ezeknek *"nincsen"* tartalma, emiatt nem is kell kezdő és záró elem, hogy közre fogják azt, valamelyik attribútuma alapján lesz jelentése. Ilyen esetekben, sokkal inkább azon van a hangsúly, hogy jelezni akarjuk a böngésző számára, hogy ott lesz még valami.

``` HTML
<!-- A HTML elemek lezárásának 3 fajtája: -->
<elem></elem>
<elem>
<elem />
```

!!! note "Megjegyzés"
    A HTML-nek létezik egy XHTML nevű variánsa, amiben viszont kötelező kirakni a `/` jelet, így ott csak az `<elem>...</elem>` és a `<elem />` helyes.

A kezdő és záró elem által közrefogott rész lehet:

- szöveg
- egy másik elem
- több másik elem

Szöveg esetén érdemes egy sorba írni mindent:

``` HTML
<elem szin="fehér">Ez egy szöveg</elem>
```

!!! note "Megjegyzés"
    Ha új sorba kezdenénk és indentálnánk, akkor azt mondanánk, hogy a szöveg előtt van X mennyiségű szóköz/tabulátor.

Viszont, amint más-más elemeket akarunk közrefogni, akkor sokkal inkább ajánlott az új sorban kezdés és indentálás *(általában egy tabulátor vagy valamennyi szóköz)*.

``` HTML
<elem>
    <masik-elem>
        <egyeb-elem>Ez egy szöveg</egyeb-elem>
    <masik-elem>
</elem>

<elemek>
    <elem-egy>Egy</elem-egy>
    <elem-ketto>Kettő</elem-ketto>
    <elem-harom>Három</elem-harom>
</elemek>
```

És ezeknek a megannyi variációja.

!!! note "Megjegyzés"
    A fenti példában az indentálásnak köszönhetően azonnal leolvasható egyfajta leszármazottsági rendszer. Az `<elem>`-nek van egy közvetlen leszármazottja: `<masik-elem>`, és egy közvetett leszármazottja: `<egyeb-elem>`. Illetve, az `<elemek>`-nek három leszármazottja van: `<elem-egy>`, `<elem-ketto>`, `<elem-harom>`.

## Ahol minden elkezdődik: *index.html*

Hozzunk létre egy `index.html` nevű szöveges fájlt, ügyelve arra, hogy `.html` legyen a kiterjesztése *(pl. Windows szereti a .txt végződést elrejteni)* a projektünk gyökérkönyvtárában *(step-by-step)*. Nyissuk meg kedvenc szövegszerkesztőnkben *(igen, akár Notepad-ban is)*, majd gépeljük le az alábbi sorokat:

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head></head>
            <body></body>
        </html>
        ```

Egy kis értelmezés a fentihez:

| HTML elem   | Mire használjuk |
| ----------- | ---------------------------------------------------------------------------------------- |
| `<!DOCTYPE>` | A dokumentum típusát adja meg *(jelen esetben ez HTML)* |
| `<html>`    | A HTML dokumentum gyökere, minden ebből fog leszármazni |
| `<head>`    | A dokumentum metaadatait, információit, kapcsolatait tartalmazza |
| `<body>`    | A dokumentum *"teste"*, ez foglalja magába mindazt, amit a felhasználó látni fog |

Ez egy HTML dokumentumnak az alapja. Ha látsz valamit a weben, akkor biztos, hogy ezekből az elemekből épül fel. A weboldal első eleme `<!DOCTYPE>`, amit `<html>` követ, benne pedig rendre `<head>` és `<body>`.

<img src="/web/tutorial/step-by-step/sbs_01_html_document.png" style="background-color: rgb(33, 34, 44);" />

HTML dokumentum készítésénél érdemes konténerekben gondolkozni, a sok egymáshoz tartozó részt egy közös dobozban elképzelni. Ezáltal, amikor megpróbáljuk majd elrendezni az elemeket, sokkal egyszerűbb dolgunk lesz.

!!! warning "Erre figyelj"
    A böngészők nem mindig helyes HTML kódot kapnak *(pl. elfelejtettük/elgépeltük a záró elemet; indokolatlanul sok szóköz van egy szövegben stb.)*. Érdekes módon, ilyenkor is valamennyire *"helyesen"* fog megjelenni a weboldal. Ez azért van, mert a böngészők mielőtt elkezdik megjeleníteni az oldalt, megpróbálják a hibákat javítani *(pl. lezárják a le nem zárt elemeket; kitörlik az indokolatlanul sok szóközt; stb.)*. Így abban a tudatban tudsz tovább haladni, hogy minden rendben és a hibák csak később lesznek láthatóak *(vagy soha)*.

## Egy kicsit bővebben: `<head>`

Az előző táblázatból kiderül, hogy különféle metaadatok/kapcsolatok fognak itt helyet kapni. De mik is ezek?

``` HTML
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="/eleresi_ut_a/logohoz.png">
    <title>Ez a weboldalam címe</title>
</head>
```

| HTML elem   | Mire használjuk |
| ----------- | ---------------------------------------------------------------------------------------- |
| `<meta>` | A dokumentum valamelyik metaadata, ahány metaadat, annyi `<meta>` elem szükséges; egyfunkciósak |
| `<link>`    | A dokumentum és egy másik forrás közti kapcsolatot ír le *(jelenleg pl. a weboldalunk ikonjára mutat)* |
| `<title>`    | A dokumentum címe |

Ezeken kívül nem nagyon szoktunk más elemekkel találkozni a `<head>`-en belül. Az ikont és a címet szükséges kiemelni, mert ezek határozzák meg, hogy a böngésző tetején milyen kép és szöveg jelenik meg, illetve könyvelzők közé mentés esetén ezek lesznek az alapértelmezett adatok. A `charset="UTF-8"`-cal megmondjuk, hogy a dokumentum kódolása UTF-8. Ha szeretnénk, hogy jól jelenjenek meg a magyar *(és kvázi minden más)* karakterek a weboldalon, akkor az UTF-8 kódolás nagyon erősen ajánlott.

Néha lehet látni `<script>` és `<style>` elemeket, de sima statikus weboldalaknál nem érdemes ilyeneket a `<head>`-ben elhelyezni.

## Egy kicsit bővebben: `<body>`

Most nézzek meg jobban a `<body>`-t is. Itt Egy átlagos tartalom:

``` HTML
<body>
    <header>
        <img src="http://weboldalunk.hu/img/logo.png" alt="Ha a kép nem elérhető, akkor ezt a szöveget fogja látni a felhasználó">
        <nav>
            <a href="http://weboldalunk.hu/fooldal">Főoldal</a>
            <a href="http://weboldalunk.hu/rolunk">Rólunk</a>
            <a href="http://weboldalunk.hu/kapcsolat">Kapcsolat</a>
        </nav>
    </header>
    <main>
        <!--Ez egy komment, ami ezen belül van, azt figyelmen kívül hagyja a böngésző-->
        <article>
            <nav>
                <a href="#elso-bekezdes">elso bekezdes</a>
                <a href="#masodik-bekezdes">masodik bekezdes</a>
            </nav>
            <h1>Ez a cikk címe</h1>
            <p>Valami bevezetőnek a bekezdése</p>
            <h2>Ez egy alcím</h2>
            <p>Itt már valami másról is írhatunk</p>
        </article>
    </main>
    <footer>valami jogi &copy; szöveg</footer>
</body>
```

| HTML elem   | Mire használjuk |
| ----------- | ---------------------------------------------------------------------------------------- |
| `<!-- ... -->` | Komment, más nyelvekhez hasonlóan ez figyelmen kívül lesz hagyva |
| `<header>` | A weboldalunk logóját, főbb linkjeit gyűjtjük benne össze; tartalomjegyzék stb.; a weboldal teteje |
| `<main>` | A weboldal fő tartalmát tartalmazza; a weboldal közepe |
| `<footer>` | Jogi nyilatkozat, kapcsolattartási linkek, stb.; a weboldal alja |
| `<nav>` | Navigációs linkeket foglal egybe; az adott oldalnak a főbb pontjait foglalja egybe; a weboldal főbb aloldalait foglalja egybe |
| `<a>` | Egy link, amire rákattintva át lesz irányítva a felhasználó |
| `<h1>`, `<h2>`, ... , `<h6>` | Fejlécek, 1-es a legnagyobb, 6-os a legkisebb |
| `<p>` | Egy bekezdés / paragrafus |
| `<img>` | Képeket tudunk elhelyezni a dokumentumban, nem kell lezárni |

!!! note "Megjegyzés"
    Nem mindig kell a fenti elrendezést követni. Ez csak egy nagyon leegyszerűsített, általánosított példa. Ha valaminek nincs értelme a weboldalon, akkor azt hagyjuk ki nyugodtan.

## Kiemelt HTML attribútumok: *id*, *class*, *style*

Egyetlen egyszer sem használtuk még az `id` és `class` attribútumokat, de most mégis egy kiemelt helyet fogunk nekik adni. Ahhoz, hogy komolyabban tudjunk majd CSS-sel és JavaScripttel foglalkozni, szükséges ennek a két attribútumnak az ismerete. Ugyanis ezeknek az ismeretével, használatával fogunk tudni hatékonyabban dolgozni. Nem biztos, hogy itt, ebben a tutorialban, de a jövőben minden biztosan.

### id

Egy olyan attribútum, amit bármelyik HTML elemnek megadhatunk, de az értékének egyedinek kell lennie. Nem lehet két HTML elem ugyan azzal az *id*-val egy dokumentumban. Nagyon jól tud jönni, ha sok hasonló közül egy elemet szeretnénk kiemelni, vagy ha már nagyon mélyen vagyunk egy HTML dokumentumban és nem kell észben tartani, hogy minek a leszármazottja. Egy elemnek maximum egy *id*-ja lehet.

``` HTML
<elem id="Ez-egy-egyedi-szöveg"></elem>
```

!!! warning "Erre figyelj"
    Ha egy elemnek id-t adunk, akkor annak az értékét már más elemnél nem használhatjuk fel.

!!! note "Megjegyzés"
    Senki sem csap a kezünkre ha mégis újra felhasználnánk. Csak ne csodálkozzunk, hogy nem a kívánt eredmény lesz látható.

### class

Egy olyan attribútum, amit bármelyik elemnek megadhatunk és az értékének nem szükséges egyedinek lennie. Lehet két HTML elemnek ugyan az a *class*-a egy dokumentumban. Konkrét megjelenési/viselkedési tulajdonságokkal ruházunk fel velük HTML elemeket. Egy elemnek lehet több *class*-a is.

!!! note "Megjegyzés"
    Amikor megadjuk őket egy HTML elemnek, akkor mondhatnánk azt is, hogy *"megörököljük a tulajdonságait"*.

``` HTML
<elem class="piros dolt felkover alahuzott"></elem>
<elem2 class="piros"></elem2>
```

!!! warning "Erre figyelj"
    Egy elemnek lehet több *class*-a, illetve egy *class*-t más elemeknél is újrahasználhatjuk

### style

Ezt az attribútumot is megkaphatja mindegyik HTML elem, de a funkciója túlmutat a HTML-en. A következő *(CSS)* részben olvashatsz róla bővebben. 

Röviden és tömören: további attribútumokat tudunk vele megadni, amiket fel tudunk benne sorolni `attibutum: ertek;` formában.

``` html
<elem style="attr1: valami; attr2: 12;">
```

## Mit is szeretnénk elérni

Fontos kérdés a fenti, megéri tisztázni.

Nincs kőbe vésve, hogy egy online jegyzet hogyan nézhet ki. Mivel nem tervezünk egy komplex weboldalt csinálni, ezért ne is nagyon gondoljuk túl a dolgokat, maradjunk a bevezetőnél:

- szöveg tárolása, kép megjelenítése
- képaláírás

Ezeket opcionálisan ki lehetne még egészíteni pl.:

- tartalomjegyzék
- header
- footer

És még lehetne sorolni egy jó pár dolgot, vagy belemenni, hogy kinek mi az opcionális, de most maradjunk meg ennyinél.

## Bővítsük ki a `<body>`-t

Most bővítsük ki a HTML kódot úgy, hogy sokkal jobban illeszkedjen a jegyzetünk kialakításához.

``` html
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
```

Tökéletes leírás nem nagyon létezik. Most egyszerűen érjük be azzal, hogy szubjektíven a fenti megoldás mellett döntöttem.

Mik az új elemek:

| HTML elem   | Mire használjuk |
| ----------- | ---------------------------------------------------------------------------------------- |
| `<div>` | egy általános nevű HTML elem, id-n, class-on és CSS-en keresztül fog értelmet kapni; a logónak ez lesz a konténere |
| `<ol>` | "ordered list"; számozott lista |
| `<li>` | "list elem"; egy számozott/számozatlan listának az eleme |
| `<section>` | szekció; az egyes fejezeteket/kiemelendő részeket fogjuk bennük tárolni |

Ezen kívül a fejléceket különféle id-kal láttam el. Ezek révén lesz a tartalomjegyzék egy elemére kattintva a felhasználó az adott fejezethez irányítva.

## Összegzés

- Egy HTML dokumentum `<elem>`-ből épül fel.
- Egy HTML elemnek vagy van lezáró eleme, vagy nincs.
- A kezdő elemben lehet megadni különböző attribútumokat.
- Ha rosszul írsz valamit, akkor a böngésző nem fog rád szólni.
- `<head>`-en belül találhatóak meg egy HTML dokumentumnak a metaadatai.
- `<body>`-n belül található meg a HTML dokumentum fő része.
- `id`-nak egyedi értéket kell adni.
- `class`-szal közös viselkedési, megjelenési formákat írunk le.
- `style`-al további attribútumokat tudunk felsorolni.

### Végleges kód

!!! example ""
    === "index.html"
        ``` html
        <!DOCTYPE HTML>
        <html>
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="logo.svg">
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
    === "Előnézet"
        <iframe style="width: 100%; height: 500px;" src="https://gergoradeczki.github.io/tutorials/step-by-step/01_html/index.html"></iframe>

## Kvíz a tanultakhoz

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeVjDyJ-0DKm3oaD6dO7WzZTZAetoU6JUIipXb3t0dly7RTUg/viewform?embedded=true" width="640" height="2648" frameborder="0" marginheight="0" marginwidth="0">Betöltés…</iframe>