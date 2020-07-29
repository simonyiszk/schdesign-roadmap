# Interfész - 2. rész

###### A lecke hossza 58 percnyi videó + gyakorlás és feladatok ~2.5 óra

Ez az oktatóanyag Ferenczi Róbert Magyar Blender 2.8 Tutoriál sorozatának első része alapján készült, azt kiegészítve a könnyebb kereshetőséget segítő linkekkel, a gyorsgombok gyűjteményével és néhány feladattal. Ha a leckével kapcsolatban bármi kérdésed vagy észrevételed lenne, írj a <u>daniel.hegedus@schdesign.hu</u> email címre, valamint ne felejtsd el likeolni a YouTube videót!

<iframe width="560" height="315" src="https://www.youtube.com/embed/c84DIIZwHtM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Tartalomjegyzék

- Jegyzet a videó alapján
  - Új objektumok hozzáadása
  - A transzformációk középpontja (Pivot point)
  - Pivot pont áthelyezése
  - Duplikálás
  - Kijelölési lehetőségek
  - Modellezés - Edit mode
  - Szerkesztés módból több objektumra bontás
  - 3D kurzor helyzetnek változtatása
  - Bevel, Smooth shading és pár kijelölési mód
  - Kés eszköz, pontok összekötése a felület átvágásával
  - Kamera lerakása
- Tippek
- Feladatok

## Jegyzet a videó alapján

### 1; Új objektumok hozzáadása &rarr; https://youtu.be/c84DIIZwHtM?t=41

- gyorsgombja: *Shift + A*
- <img src="C:\Users\Hegedűs Dániel\AppData\Roaming\Typora\typora-user-images\image-20200506122150734.png" alt="image-20200506122150734" style="zoom:50%;" />
- fent is megtalálható &rarr; **Add** menüpont
- új objektum mindig a <u>3D kurzor</u>ban jön létre<img src="C:\Users\Hegedűs Dániel\AppData\Roaming\Typora\typora-user-images\image-20200506122439734.png" alt="image-20200506122439734" style="zoom:30%;" />
  - <u>3D kurzor áthelyezése</u> &rarr; *Shift + Jobb egérgomb*
  - 3D kurzor középpontba ugratása &rarr; *Shift + C*

### 2; A transzformációk középpontja = **Pivot point** &rarr; https://youtu.be/c84DIIZwHtM?t=102

- <u>Pivot pont</u> &rarr; kis sárga pötty, minden transzformáció erre vonatkozik
  
- <img src="C:\Users\Hegedűs Dániel\AppData\Roaming\Typora\typora-user-images\image-20200506123139358.png" alt="image-20200506123139358" style="zoom:30%;" />
  
- Transzformációs pont megváltoztatása
  
- <img src="C:\Users\Hegedűs Dániel\AppData\Roaming\Typora\typora-user-images\image-20200506123224023.png" alt="image-20200506123224023" style="zoom:50%;" />
  
  - **3D Cursor** &rarr; 3D kurzor körüli transzformációk
  
  - 
  
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\Pivot_3dCursor.mp4"></video>
    
  - **Individual Origins** &rarr; Minden kijelölt objektum saját pivot-ja körüli transzformációk
  
  - 
  
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\Pivot_IndividualPivot.mp4"></video>
    
  - **Median Point** &rarr; Kijelölt objektumok középpontjainak átlaga körüli transzformációk
    
  - 
    
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\Pivot_medianPoint.mp4"></video>
    
  - **Active Element** &rarr; Aktív kijelölt objektum (ami világosabb sárgább) körüli transzformációk
  
  - 
  
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\Pivot_activElement.mp4"></video>

### 3; Pivot pont áthelyezése &rarr; https://youtu.be/c84DIIZwHtM?t=289

- **Join**: kijelölt objektumok <u>összeolvasztás</u>a egy objektummá &rarr; *Ctrl + J*
  
  - Fontos megjegyezni, hogy az aktív objektum pivot pontját fogja örökölni az egybeolvasztott objektum!
  
  - 
  
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\Join.mp4"></video>
  
- **Set Origin**: <u>Pivot point áthelyezése</u> &rarr; *Jobb egérgomb* &rarr; **Set Origin**
  
- <img src="C:\Users\Hegedűs Dániel\AppData\Roaming\Typora\typora-user-images\image-20200506222656044.png" alt="image-20200506222656044" style="zoom:50%;" />
  
  - **Geometry to Origin** &rarr; Az objektum minden részét eltolja úgy, hogy a pivot pont a geometria átlagolt közepére kerüljön
  - **Origin to Geometry** &rarr; Pivot point áthelyezése a geometria átlagolt közepébe
  - **Origin to 3D Cursor** &rarr; Pivot point áthelyezése a 3D kurzor pozíciójába

### 5; Duplikálás

- **Duplicate**: <u>megkettőzés</u> &rarr; *Shift + D*
  
  - ezzel egy teljesen független másolatot hozunk létre
  
- **Edit mód**ba (<u>szerkesztő mód</u>) váltás &rarr; *Tab*
  
  - ha több objektumunk is ki van jelölve, az összes együtt szerkeszthető
  
- **Duplicate Linked** &rarr; *Alt + D*
  
- 
  
  <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\LinkedDuplicate.mp4"></video>
  
  - ezzel egy linkelt példányt hozhatunk létre, ekkor bármelyik példányon edit módban való változtatás, az összes többin is érvényesül!
  - viszont Object módban rendelkezhetnek más paraméterrel, pl más méret, orientáció vagy pozíció

### 7; Kijelölési lehetőségek &rarr; https://youtu.be/c84DIIZwHtM?t=672

- **Select All**: <u>Minden kijelölése</u> &rarr; *A*

- **Deselect All**: <u>Minden kijelölés megszüntetése</u> &rarr; *Alt + A* (vagy *A* duplán lenyomva)

- *Shift + Bal egérgomb* &rarr; ennek picit összetettebb a működése:
  - Ha olyan objektumra nyomsz, ami még nincs kijelölve, akkor az <u>hozzáadódik a kijelöléshez</u>
  - Ha olyan objektumra nyomsz, ami ki van jelölve, de nem aktív (sötétebb sárga körvonal), akkor az <u>aktívvá tevődik</u> (világosabb sárga körvonal)
  - Ha olyan objektumra nyomsz, ami aktív (világosabb sárga körvonal), akkor az <u>kijelöletlenné tevődik</u>
  
- Egyéb kijelölési módok &rarr; picit hosszabban nyomva a toolbar kijelölés ikonján
  
- <img src="C:\Users\Hegedűs Dániel\AppData\Roaming\Typora\typora-user-images\image-20200506224950062.png" alt="image-20200506224950062" style="zoom:55%;" />
  
  - **Select Box** - <u>Doboz kijelölés</u> &rarr; *B*
    
  - 
    
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\BoxSelect.mp4"></video>
    
    - *Bal egérgomb*bal nyomva &rarr; hozzáad a kijelöléshez
    - *Középső egérgomb*bal nyomva &rarr; elvesz a kijelölésből
    - *Jobb egérgomb*bal &rarr; kilépünk a módból
    
  - **Select Circle** - <u>Ecset szerű kijelölés</u> &rarr; *C*
    
  - 
    
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\CircleSelect.mp4"></video>
    
    - Mérete az *egérgörgővel* állítható
    - *Bal egérgomb*bal nyomva &rarr; hozzáad a kijelöléshez
    - *Középső egérgomb*bal nyomva &rarr; elvesz a kijelölésből
    - *Jobb egérgomb*bal &rarr; kilépünk a módból
    - FONTOS: közben nem tudunk a nézeten változtatni!
    
  - **Select Lasso** - <u>Lasszó szerű kijelölés</u> &rarr; *Ctrl + Jobb egérgomb*
    
  - 
    
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\LassoSelect.mp4"></video>
    
    - *Ctrl + Shift + Jobb egérgomb*bal tudunk lasszóval kijelöletlenné tenni

### 8; Modellezés - Edit mode &rarr; https://youtu.be/c84DIIZwHtM?t=1129

- Szerkesztési módba lépés &rarr; *Tab* (vagy a fenti lenyíló menüből)
  
- <img src="C:\Users\Hegedűs Dániel\AppData\Roaming\Typora\typora-user-images\image-20200506232258926.png" alt="image-20200506232258926" style="zoom:60%;" />
  
- Kijelölési módok
  <img src="C:\Users\Hegedűs Dániel\AppData\Roaming\Typora\typora-user-images\image-20200506232540657.png" alt="image-20200506232540657" style="zoom:80%;" />

  - **Vertex select** - pont kijelölő mód &rarr; *1*
  - **Edge select** - él kijelölő mód &rarr; *2*
  - **Face select** - oldallap kijelölő mód &rarr; *3*

- **Extrude**:  kihúzás (pontra élre és lapra is egyaránt működik) &rarr; *E*

- 

  <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\ExtrudeOptions.mp4"></video>


  - Ha ennél az eszköznél *Jobb egérgomb*ot nyomunk, akkor is végrehajtódik az extrudálás, csak a kiextrudált rész visszaugrik arra a helyre, ahonnan extrudáltuk!
    
  - 
    
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\extrude_rightclick.mp4"></video>
    
- Minden alapvető transzformáció, amit az előző részben tanultunk (*G*, *R*, *S*), az szerkesztő módban is ugyanúgy működik!

- Minden szerkesztési eszközre igaz, hogy az eszköz hatásának véglegesítése *Bal egérgomb*bra történik, míg a *Jobb egérgomb* hatására általában kilépünk az adott eszköz használatából.

- kijelölt részek közt <u>új Face vagy Edge létrehozása</u> &rarr; *F*

- 

  <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\NewFace.mp4"></video>

- **Inset**: kijelölt Face-en belüli újabb face létrehozása &rarr; *I*


  - Fontos: figyeljünk, hogy ne csavarodjon át magán a felület!

  - 

    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\Inset.mp4"></video>

- **Duplicate**: kijelölt Vertex/Edge/Face megkétszerezése &rarr; *Shift + D*

- Kijelölt pontok összekötése éllel, az oldallap félbevágásával &rarr; *J*

- 

  <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\JButton.mp4"></video>

- Pontok egy síkba hozásának egyszerű módja: nyomjuk össze őket az adott tengely mentén

- pl.: *S + X + 0*, fontos: **Median Point** legyen bekapcsolva, hogy a kettőjük közös középpontjához képest történjen az összenyomás

- hátrány: csak X, Y vagy Z tengellyel párhozamos dolgokra működik

- **Subdivide**: újabb pontot hoz létre a két pont között (amik egy élen vannak)


  - Face-ek feldarabolására is ez a funkció szolgál

### 9; Szerkesztés módból több objektumra bontás &rarr; https://youtu.be/c84DIIZwHtM?t=1925

- **Separate**: mesh darabokra bontása &rarr; *P*
  - **Selection** &rarr; a kijelöltből készít külön objektumot
  - **By Loose Parts** &rarr; az egybefüggő területeket szedi külön objektumra

### 10; 3D kurzor helyzetének változtatása &rarr; https://youtu.be/c84DIIZwHtM?t=2043

- *Shift + S* (edit módban és objektum módban is működik)
  - **Cursor to Selected** &rarr; a kijelölt pozíció közepére ugrik a kurzor

### 11; Bevel, Smooth shading és pár kijelölési mód &rarr; https://youtu.be/c84DIIZwHtM?t=2692

- **Bevel**: kijelölt sarok lekerekítése &rarr; *Ctrl + B*
  
  - a görgő görgetésével állítható, hogy hány darabra darabolódjon
  
  - 
  
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\Bevel.mp4"></video>
- <u>Szögletes árnyalás</u>: *Jobb egérgomb* &rarr; **Shade Flat**
- <u>Lesimított árnyalás</u>: *Jobb egérgomb* &rarr; **Shade Smooth**
- **Auto Smooth** bekapcsolása: automatikusan lesimítja az adott szögnél élesebb töréseket
  - **Properties** &rarr; **Object Data** &rarr; **Normals** &rarr; **Auto Smooth**
  
  - FONTOS: csak akkor működik, ha az objektum **Shade Smooth**-ra van állítva
  
  - 
  
    <video src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\BevelSmooth.mp4"></video>
- Kijelölt résztől a következő kijelöltig kijelölés &rarr; *Ctrl + Bal egérgomb*
- Loop kijelölése &rarr; *Alt + Bal egérgomb*

### 12; Kés eszköz, pontok összekötése a felület átvágásával &rarr; https://www.youtube.com/watch?v=c84DIIZwHtM&feature=youtu.be&t=3084

- **Knife** &rarr; *K*
  - pontokat tudunk letenni, ha *Enter*-t nyomunk, végrehajtásra kerül a vágás
- Él létrehozása pontok közt úgy, hogy az ott levő oldallap is félbevágódik &rarr; *J*

### 13; Kamera lerakása &rarr; https://www.youtube.com/watch?v=c84DIIZwHtM&feature=youtu.be&t=3243

- automatikusan mindig kiugrunk a nézet forgatásával a kameranézetből
  - **N-panel** &rarr; **View Lock** &rarr; **Lock Camera to View**: ha ezt kipipáljuk, akkor a kamerába lépve a nézet forgatásával a kamerát is forgatjuk
  - <img src="C:\web\schdesign\3d_tanfolyam\lesson-2-pictures\lockCameraToView.PNG" alt="lockCameraToView" style="zoom:50%;" />

## Tippek

- Ablak fullscreen-be állítása &rarr; *Ctrl + Space* az ablak felett
- Figyeljétek meg, hogy sok funkció használatakor a bal alsó sarokban ideiglenesen megjelenik egy lenyitható ablak. Ebben az adott funkcióra vonatkozó beállítási lehetőségek vannak, jellemzően például olyanok, amiket a funkció véglegesítése közben a görgővel tudtatok állítani. Sokszor hasznos lehet ez a kis ablak, ha módosítani szeretnétek az utolsó műveletetek paraméterein, DE ez az ablak eltűnik, ha következő eszközt használtok (azaz már egy objektum mozgatásával is elvesztjük ezt).

## Feladatok

- Ehhez a leckéhez 2 erősen elkülönülő kategóriába tartozó feladatot mutatnék. Az egyik a **Low poly** modellezésbe pillantana bele, a másik pedig a **blueprint** azaz tervrajz alapján való, pontosságra törekedős modellezésre lesz egy kis példa.

- **Low poly** modellezés
  
  - Hogy e lowpoly modellezett alkotásotok jobban nézzen ki, nézzétek meg ezt a rövid összefoglalást a material-ok alap használatáról
  
  - ###### még feltöltés alatt
  
- A blueprint alapján történő modellezéshez meg az alábbi videót nézzétek meg:

  - ###### még feltöltés alatt


