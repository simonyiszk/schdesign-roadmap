# Statikus weboldal készítése step-by-step

Ebben a tutorialban az alapoktól kezdve fel fogunk építeni egy komplett statikus weboldalt.

## Mindennek az alapja: HTML

Egy weboldalnak a felépítése a HTML (Hypertext Markup Language)-el kezdődik. Ez nem egy programozási nyelv, hanem egy leíró nyelv. Mondjuk más programozási nyelvekhez hasonlóan ebben is lehet kommentelni, illetve böngésző specifikus üzenetet elhelyezni a kódban. Kezdésképp hozzunk létre egy "index.html" nevű fájlt. Ez lesz a weboldalunknak a főoldala, ez lesz az az oldal, ami akkor is betölt, ha a webcímünk után nem írjuk le, hogy melyik oldalt kérjük (habár ezt majd később megváltoztathatjuk, de általában valamilyen "index.xyz" oldal szokott a főoldal lenni).

Nyissuk meg az imént létrehozott fájlt kedvenc szövegszerkesztőnkkel (igen, akár a Windowsos Notepaddel is megnyithatjuk) és írjuk le életünk első HTML kódját:

``` html
<!DOCTYPE HTML>
```

Mentsük el a fájlt és nyissuk meg egy általunk választott böngészőben (ne Internet Explorerben). Ha mindent jól csináltunk, akkor semmit se látunk. Azaz mégis, mert egy üres tab nyílt meg a böngészőben, aminek a címsora a fájlunk helyét mutatja a gépünkön, a tab címe meg a fájlunk neve. Ezzel az egy sorral megmondtuk a böngészőnek, hogy ez egy HTML fájl lesz (attől függetlenül, hogy mi a kiterjesztése a fájlnak). Most kezdjünk el feltölteni a fájlunkat további kóddal.

``` html
<!DOCTYPE HTML>
<html>
</html>
```

Most újdonság az a ```<html>``` és a ```</html>``` "tag"-ek (elemek) megjelenése. Ezekkel mondjuk meg a böngészőnek, hogy ezek a részek közt fogjuk a weboldalunknak a látható és nem látható részét megadni. Majdnem minden HTML elemet úgy adunk meg, hogy van egy ```<kezdő>``` és egy ```</kezdő>``` része. Látható, hogy a lényeges különbséget a **"/"** jel jelenti. Ezzel mondjuk meg a böngészőnek, hogy ```<>```-től ```</>```-ig tart az elemünk, minden ami ezen belül van, az az elem részét képezi. A kezdő, illetve végző elem neve meg kell, hogy egyezzen.

Egészítsük ki (majdnem) teljessé a weboldalunkat:

``` html
<!DOCTYPE HTML>
<html>
	<head>
		<title>Első weboldalam!</html>
	</head>
	<body>
		Heló világ!
	</body>
</html>
```

Ahogyan láthatod, sok minden egyébbel fel lett töltve a HTML fájl. Kezdjük mindjárt a legelejéről:
- ```<head>```: Ez képezi a weboldalunknak a "fejét". Amit itt megadunk a ```<title>``` elemeken kívül, nem lesz sehol sem látható a weboldalunkon (nos, CSS-től, JS-től és néhány böngésző specifikus elemtől eltekintve, de ez majd később). Ebben a részben lesz lehetőségünk különböző keresőrobotoknak (pl. Google, Bing stb.) megadnunk a weboldalunk címét, illetve leírását. Emellett a weboldalunk ikonját is itt adhatjuk meg és ha külön fájlokkal dolgozunk, akkor azokat általában itt szoktuk importálni is.
- ```<title>```: A böngésző tabjának a tetején az ilyen elemek közt megadott rész fog megjelenni. Érdemes odafigyelni arra, hogy célravezető és rövid legyen, mert a böngészők tetején a címnek véges helye van, illetve keresőkben ez jelenik meg a találat címeként is.
- ```<body>```: Ez a weboldalunk "teste". Ez az, amit az átlag felhasználó látni fog. Itt készíthetjük el a weboldalnak a tetejét (header), az alját (footer) a fő részét (main), egyszóval: mindent.

## Ami feltűnhetett...

Beljebb van kezdve a "Heló világ!" felirat a kódban, de a böngészőben mégis teljesen bal oldalt van, elhagyva a tabulátorokat. Ez azért van, mert a böngészők nem teljesen azt csinálják, amit szeretnénk, hogy csináljanak. Vagyis inkább: fel vannak készülve arra, hogy kapni fognak valmilyen rosszul formázott kódot és ezt megpróbálják "helyesen" megjeleníteni. Ezt úgy is lehet érteni, hogy ha elhagyjuk a HTML kódunk első sorát, illetve a ```</body>``` és a ```</html>``` záró elemeket, akkor még így is "helyesen" fog megjelenni a weboldalunk. Ezt felfoghatjuk egyfajta kényelmi funkcióként is (de nem ajánlott). A böngészők fel vannak készülve arra, hogy hibásan megformázott kódot kapnak, amit annak érdekében, hogy ne törjön meg a web, megpróbálnak kijavítani nekünk, egyszerű netezőknek. Ez pedig ritkán jól, gyakran rosszul sikerül.

## Formázási _"szabályok"_

Az olvashatóság kedvéért (meg mert kb. mindenki így csinálja), egy HTML oldalon minél több elemen belül vagyunk, annál több tabulátorral (vagy szóközzel) toljuk beljebb a tartalmat. Azaz a ```<html>``` van legkívül, ezt követi a ```<head>``` és  ```<body>``` eggyel beljebb tolva, majd a ```<body>```-n belül található "Hello World!" szöveg 2-vel beljebb identálva.

Itt van viszont egy fontos szabály: minden HTML elemet, aminek létezik záró tagja (azaz ```<>``` és ```</>``` párban vannak) le kell zárni. Aminek meg nem létezik ilyen azt ```<img />``` hasonló formában _"kell"_ megadni. Viszont, ez is csak egy íratlan szabály, a modern böngészők bezárják neked a be nem zárt elemeket, habár nem biztos, hogy a neked megfelelő helyen fogják ezt megtenni. De az igazsághoz hozzá tartozik, hogy a záróelem nélküli tagek bezárásától általában el lehet tekinteni, például statikus weboldalak készítésénél.

## Még több HTML

Ahogy az várható volt, még nagyon nem vagyunk készen a HTML elemek megismerésével. Rengeteg van, szóval most csak a leglényegesebbeket fogom felsorolni, amiket használni is fogunk majd:
- ```<p>```: paragrafus, bekezdés, mintha Wordben ENTER-t nyomnál
- ```<h1>```, ```<h2>``` ... (egészen 6-ig): címsorok. Az első van a legjobban kiemelve, a 6. a legkevésbé.
- ```<div>```: ezzel oszthatjuk fel több egységre a weboldalunkat.
- ```<span>```: hasonló mint a ```<div>```, csak ezzel szövegen belül osztunk fel részeket.
- ```<a href="http://valami.hu">```: linkek megadása
- ```<img src="logo.png" alt="logo" />```: képek megadása, nincs záró eleme
- ```<br />```: sortörés, mintha Wordben SHIFT+ENTER-t nyomnál, nincs záró eleme
- ```<pre>```: előre megformázott szöveget jelenít meg. Értsd: _"H   a    ilyen   a     kódot, akkor	így jelenik meg"_ (nem kezdi el kijavítani neked a szöveget, bennehagy minden szóközt, entert, tabulátort.)

És amikkel a tartalmi részt különítjük el, megkönnyítve a munkát a nyomtatóknak / weboldal alpján PDF-et készítőknek / ebook olvasóknak:
- ```<header>```: a weboldalunk teteje "fejléce", általában itt taláhatóak meg a legfontosabb linkek
- ```<nav>```: a weboldalnak a navigációs része (pl. tartalomjegyzék), a fejlécen belül is elhelyezkedhet
- ```<main>``` a weboldal fő része, itt helyezkedik el a tartalmunk
- ```<article>```: pl. a jelen cikk, amit olvasol, ebben az elemben helyezkedik el
- ```<footer>```: a weboldal alja, ebben található meg, hogy ki készítette, ki üzemelteti az adott weboldalt, illetve a jogi cuccok.

Lehet egy kicsit sok volt ez elsőre, de ez egy tanulási folyamatnak a kezdete. A ```<p>```-től ```<img />```-ig látható elemekket használjuk a leggyakrabban. A ```<br />``` és a ```<pre>``` elemeket jó, hogyha nem felejtük el, hogy léteznek. A többi elemet HTML dokumentumonként egyszer fogjuk használni (már ha helyes kódot szeretnénk írni).

## Akkor egy kezdetleges weboldal:

``` html
<!DOCTYPE HTML>
<html>
	<head>
		<title>My first weboldal!</title>
	</head>
	<body>
		<header>
			<img src="#" alt="logo" />
			<nav>
				<a>Link #1</a>
				<a>Link #2</a>
			</nav>
		</header>
		<main>
			<article>
				<h1>Életem első weboldala</h1>
				<a href="https://google.com">Link a google.com-ra</a>
				<p>Ide jönne valami "Lorem ipsum"-os szöveg, <span style="color: red;">hogy</span> jól nézzen ki. <br>Ez új sorban kezdődik</p>
<pre>
Ha nem itt lent kezdeném írni, hanem helyesen identálva lenne a kódban, akkor a tabulátorok miatt beljebb kezdődne a kód
				pl. valahogy így.
		Új sorban kezdődik, pedig nem is használtam a sortörés elemet.
</pre>
			</article>
			<div>
				<p>A cikkhez szóló hozzászólásoknak hely</p>
			</div>
		</main>
		<footer>
			<p>Valami jogi szövegnek hely</p>
		</footer>
	</body>
</html>
```

## Összefoglaló

Ebben a fejezetben megtanultuk, hogy mi az a HTML, milyen HTML elemek vannak, hogyan (kéne) felépülnie egy modern weboldalnak, illetve, hogy mennyi mindenben "segít"-enek minket a böngészők. A kezdetleges weboldanka a kódjában feltűnhetett, hogy HTML elemeken kívül vannak mások is (pl. src, alt, href, style), de ezekről majd következő cikkben adok pontosabb képet. Illetve, a "style"-ról bővebben viszont majd a CSS témakörben kapsz választ a kérdéseidre.
