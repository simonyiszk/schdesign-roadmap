# Denoising

![from_to](.\from_to.jpg)

!!! info "Friss tartalom"
    Ez a tartalom a Blender 2.81-as vagy annál frissebb verziójához készült!

A cycles-el sokáig probléma volt a zaj és a "firefly"-ok. Ezeken a képen látható, hogy már egy egyszerű jelenetnél is könnyen előjöhet a zaj, és egy komplexebb, vagy kevésbé megvilágított jelenetnél garantált. Persze egy ideig bruteforce-olni is lehet a sample size, vagy a felbontás emelésével, de ez nagyon hamar napokig tartó renderidőhöz vezethet teljesen feleslegesen, és így sem garantál szép eredményt. 

![before_lowSample](.\before_lowSample.png) 128 sample - 31 s - gtx 1070

![before_highSample](.\before_highSample.png) 2048 sample - 484 s - gtx 1070

## A Zaj

Mitől alakul ki a zaj egy jelenetben? A cycles egy raytracer rendermotor, ami leegyszerűsítve a valós fény útját közelítí. Mivel ez egy erősen számításintenzív folyamat, sok egyszerűsítést, és optimalizácót kell alkalmazni. Pédául ilyen optimalizáció, hogy n számú visszaverődés után a fénysugár visszaverődése nem lesz továbbszámolva. Mivel nem kiszámítható, hogy melyik fénysugár hol szűnik meg, ezért lehetséges, hogy egy adott pixelre sokkal több fénysugár érkezik be, mint a melette lévőre, ami zajként jelenik meg.

## Firefly

A firefly a zajnak egy extrém formája. Legtöbbször fehér, vagy világos pontként jelenik meg a renderen, ha az adott pixelre nem értelmezhető a kiszámolt szín, vagy fényintenzitás. Könnyen előidézheti sok, vagy erős fény a jelenetben. A zajjal ellentétben a sample size emelésével általában több firefly jelenik meg.

# A denoiser

Blenderben van a zaj és a firefly-ok ellen beépített denoiser. 2.81 óta ez egy compositing nodeként használható és egy elég kényelmes megoldást biztosít. Van még pár korlátja, de kevés olyan szituáció van, ahol nem érdemes bekapcsolni.

### A denoiser bekapcsolása renderhez:

- **1.lépés:** Jobb oldalt keressük meg a view layer properties fület, és pipáljuk be a denoising data-t.![step1_edited](.\step1_edited.png) 

- **2.lépés:** Felül válasszuk ki a compositing workspace-t.![step2_edited](.\step2_edited.png)

  !!! warning ""
      Ha nincs felül compositing fül, a + gombra kattintva ki lehet választani a + &rarr; General &rarr; Compositing almenüben

- **3.lépés:** Pipáljuk be felül a Use Nodes-ot, és meg fog jelenni egy egyszerű node tree.![step3_edited](.\step3_edited.png)

- **4.lépés:** A sötétszürke terület felett tartva az egeret nyomjunk egy ``shift+a`` -t és válasszuk ki a filter &rarr; denoise -t![step4_edited](.\step4_edited.png)

- **5.lépés:** A hozzáadott denoise node-ot kössük be a node treebe, a következő módon:![step5_edited](.\step5_edited.png)

- **6.lépés:** Ha most újrarendereljük a képet, amikor elkészült renderen, le fog futni a denoiser.

  !!! warning "Figyelem"
  	Csak az elkészült renderen látszik a zajmentesítés, renderelés közben nem fog látszani!

![after_lowSample](.\after_lowSample.png) 128 sample - 35 s - gtx 1070

![after_highSample](.\after_highSample.png) 2048 sample - 496 s - gtx 1070

Látható, hogy a korábban zajos 128 samples zajos képből egy már prezentálható képet csinál, 2048 sample-vel pedig egy hibátlan képet.

!!! info "Megjegyzés"
	Ha realisztikus render a cél, érdemes kamerazajt utólag rárakni a képre, hogy valóságosabbnak érződjön.

### Denoising bekapcsolása viewportban:

!!! warning "Csak Blender 2.9+"
	A viewport denoising csak a Blender 2.9-es, és annál újabb verziójával működik

Pipájuk be a Render properties &rarr; Sampling &rarr; Denoising &rarr; Viewport -ot, és hagyjuk automatikus-on. (Új nvidia videokártyákhoz az optix denoiser lesz használva, minden máshoz az open image denoiser)

![+1step_edited](.\+1step_edited.png)

<video src=".\video_demo.mp4"></video>A viewport a denoiser bekapcsolása előtt és után

### Mire lehet használni a denoisert:

- Teszt renderhez, ha nem akarod megvárni a 30 perces rendert, csak egy közelítő képet akarsz, hogyan fog kinézni.
- Végleges renderekhez, az utolsó pár zajos folt eltűntetéséhez.
- Gyorsabb viewport előnézethez

### Mire nem lehet használni a denoisert:

- Animációhoz jelenleg nem az ideális megoldás, mivel minden képkockára máshogyan fut le a denoiser. [Ebben]( https://youtu.be/fONxsfY9nO0?t=552 ) a videóban bővebben ki van fejtve