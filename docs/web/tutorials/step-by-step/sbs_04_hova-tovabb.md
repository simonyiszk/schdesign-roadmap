# 4. Hova tovább

## Reszponzivitás

### Miért

Nem mindenkinek van ugyan olyan paraméterű kijelzője mint nekünk. Ami nálunk jól néz ki, még nem biztos, hogy másnál is jól fog kinézni. Ami nálunk olvasható, másnál lehet olvashatatlan. Stb.

### 1. Megoldás

Írjuk újra a HTML dokumentum megjelenését, de most figyeljünk arra, hogy egy másik eszközön jelenjen meg jól.

Ezt a megoldást választották egy jópáran, amikor elkezdett teret nyerni magának a mobilos böngészés. Például: asztalon a `facebook.com` jön be, míg mobilon az `m.facebook.com`.

Az egyik probléma ezzel a megoldással az, hogy ha mobilról akarunk linket megosztani, akkor `m.` kezdetű lesz, szóval PC-n a webes kinézetet fogjuk megkapni.

A másik, hogy kétszer dolgozunk, két külön projektet kell vezetni.

### 2. megoldás

Írjuk meg egyszer, de már előre teszteljük több kijelzőn, így csak egy kódbázissal kell foglalkozni.

Mi most a `2. megoldást` fogjuk választani.

### Hogyan kezdjük el

#### HTML

Ha most megnéznénk a készülő weboldalt mobilről, akkor látható hogy nagyon apró minden. Ez azért van, mert a metaadatok közt nem mondtuk meg a böngészőnek, hogy mit kezdjen kis jelzőkkel.

Pótoljuk ezt a hiányosságot. Adjuk hozzá az alábbit a `<head>`-hez:

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Ezel most több mindent a böngésző tudtára adunk. Beállítottuk, hogy a weboldalnak a

- szélessége kövesse az eszköznek a szélességét
- kezdeti nagyítása 1 legyen *(azaz ne legyen se kicsinyítve, se nagyítva)*.

Az első rész, ami miatt olvasható méretű lesz minden a weboldalon.

Most viszont feltűnhet, hogy nem csak függőlegesen, hanem vízszintesen is van tartalom. Felhasználói szempontból ez nem szerencsés, javítsuk is ezt a CSS fájlokban.

#### CSS

`layout.css`

Ekőször javítsuk ki azt, hogy a `<footer>` mindig a weboldal alján legyen, akár van elég tartalom, akár nem. Ezt azzal fogjuk elérni, hogy a `<body>`-nak minimális magasságot fogunk beállítani, így abban szabadon fogunk tudni vertikálisan elemeket elhelyezni a `flex` megjelenítésnek köszönhetően.

``` css
body {
    min-height: 100vh; /* Minimum 100% vertikális hosszú legyen */
    margin: 0;
    display: flex;
    justify-content: space-between; /* Toljuk szét egyenlő távolságra a 3 elemet */
    flex-direction: column;
}
```

Most oldjuk meg, hogy a `<main>` ne fix 960px széles legyen. Ehhez azt használjuk fel, hogy áttérünk egy maximális szélességre, azaz a szélesség dinamikusan fog tudni változni.

``` css
main {
    margin: 20px;
    padding: 20px;
    /* width: 960px; */
    /* Magyarázat: "lehetsz akár mekkora, de csak 960px-ig nyúlhatsz" */
    max-width: 960px;
    align-self: center;
}
```

Az `<img>`-nek ezt adtuk meg: `max-width: 100%;`. Itt nem konkrétan megmondtunk egy pixel számot, hanem hogy a konténernek a 100%-os szélességéig nyúlhat. Azaz, ha változik a konténer szélessége *(pl. átméretezzük az ablakot)*, akkor ahhoz fog viszonyulni.



`responsive.css`

Hozzuk létre ezt a fájl a gyökérmappában és linkeljük a HTML dokumentumhoz utolsóként.

``` html
<link rel="stylesheet" href="responsive.css">
```

Majd töltsük fel ezzel:

``` css
/* Csak akkor fog az ebben leírtak alkalmazódni, ha 960px-nél keskenyebb a kijelző */
@media only screen and (max-width: 959px) {
    main {
        border-radius: 0;
        border: none;
        margin: 20px 0 20px 0;
    }
}
```

Szóval, mobilon megszűntetjük a `<main>`-nek a bal és jobb oldali margóját, illetve kitöröljük a szélét. Így jobban fog mobilon kinézni.

Ezt a `@media only screen and (max-width: 959px)` próbáljuk meg úgy felfogni, mint egy `if (...)`-et. Azért linkeltük utoljára, mert különben a `style.css` felülírná az itteni változtatásokat. És a legjobb, hogy ha megváltozik a kijelző szélessége, akkor a böngésző újra ellenőrzi, hogy a benne leírtaknak teljesülniük kéne-e még.

## Hostoljuk a weboldalt.

### GitHub

feltöltés alatt :(