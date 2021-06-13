---
title: Markdown Cheatsheet
description: Az MCDocs Materialban rengeteg új dologgal egészül ki az, amit egy markdown fájlba leírhatsz. Ezeken megy gyorsan végig ez a cheatsheet, rövid kódrészlet mellett megmutatja hogyan fog inézni amit csinálsz
author: Radeczki Gergő István
date: June 12, 2021
---

# Hogyan szerkeszd az oldalt

## Abbreviatioins

Ismeretlen szavakra ha ráviszed a kurzort, akkor megmutatja a jelentésüket. Mobilon nincs értelme, mert nem műküdik úgy, mint PC-n.

!!! note
    === "példa kód"
    ```
    The HTML specification is maintained by the W3C.

    *[HTML]: Hyper Text Markup Language
    *[W3C]: World Wide Web Consortium
    ```
    === "megjelenés"
    The HTML specification is maintained by the W3C.

    *[HTML]: Hyper Text Markup Language
    *[W3C]: World Wide Web Consortium

## Admonitions

Színes dobozokat tudsz létrehozni. Többféleképpen meg lehet adni egyet.

### Kód

#### Cím nélkül

!!! note "Cím nélkül"
    === "példa kód"
    ```
    !!! warning
        egy egy figyelmeztetés
    ```
    === "megjelenés"
    !!! warning
        valami

#### Címmel

!!! note "Címmel"
    === "példa kód"
    ```
    !!! warning "Ez a cím"
        ez egy figyelmeztetés
    ```
    === "megjelenés"
    !!! warning "Ez a cím"
        ez egy figyelmeztetés

#### Üres címmel

!!! note "Üres címmel"
    === "példa kód"
    ```
    !!! warning ""
        ez egy figyelmeztetés
    ```
    === "megjelenés"
    !!! warning ""
        ez egy figyelmeztetés

#### Kinyitható

!!! note "Kinyitható"
    === "példa kód"
    ```
    ??? warning "Ez a cím"
        ez egy figyelmeztetés
    ```
    === "megjelenés"
    ??? warning "Ez a cím"
        ez egy figyelmeztetés

#### Becsukható

!!! note "Becsukható"
    === "példa kód"
    ```
    ???+ warning "Ez a cím"
        ez egy figyelmeztetés
    ```
    === "megjelenés"
    ???+ warning "Ez a cím"
        ez egy figyelmeztetés

#### Szöveg végéhez igazítva

!!! warning inline end
    Egy sorba a szöveggel, a szöveg végén.

``` markdown
!!! warning inline end
    Egy sorba a szöveggel, a szöveg végén.
```

<br><br>

#### Szöveg elejéhez igazítva

!!! warning inline
    Egy sorba a szöveggel, a szöveg végén.

``` markdown
!!! warning inline
    Egy sorba a szöveggel, a szöveg végén.
```

<br><br>

A szöveg végéhez, elejéhez igazítás mobilokon nem működik 😢.

### Típusai

A fenti példakódokban a `warning` helyére írd be az itt lévő egyik bekeretezett szöveget, hogy megkapja a stílusát.

`note`{ #note }

:   !!! note

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`abstract`{ #abstract }, `summary`, `tldr`

:   !!! abstract

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`info`{ #info }, `todo`

:   !!! info

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`tip`{ #tip }, `hint`, `important`

:   !!! tip

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`success`{ #success }, `check`, `done`

:   !!! success

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`question`{ #question }, `help`, `faq`

:   !!! question

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`warning`{ #warning }, `caution`, `attention`

:   !!! warning

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`failure`{ #failure }, `fail`, `missing`

:   !!! failure

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`danger`{ #danger }, `error`

:   !!! danger

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`bug`{ #bug }

:   !!! bug

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`example`{ #example }

:   !!! example

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

`quote`{ #quote }, `cite`

:   !!! quote

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

## Buttons

Ha linkek helyett inkább menő gombokat szeretnél használni, akkor azt így teheted meg:

!!! note "Kitöltetlen gomb"
    === "példa kód"
    ```
    [Subscribe to our mailing list](#){ .md-button }
    ```
    === "megjelenés"
    [Subscribe to our mailing list](#){ .md-button }

!!! note "Kitöltött gomb"
    === "példa kód"
    ```
    [Subscribe to our mailing list](#){ .md-button .md-button--primary }
    ```
    === "megjelenés"
    [Subscribe to our mailing list](){ .md-button .md-button--primary }

!!! note "Kitöltött gomb ikonnal"
    === "példa kód"
    ```
    [Submit :fontawesome-solid-paper-plane:](#){ .md-button .md-button--primary }
    ```
    === "megjelenés"
    [Submit :fontawesome-solid-paper-plane:](#){ .md-button .md-button--primary }

A `(#)`-ben a *#* helyére kell írnod a webcímet.

## Code blocks

### Forráskód szövegkiemeléssel

Ha forráskódot szeretnél megosztani, szövegkiemeléssel.

!!! note "Python kód szövegkiemeléssel"
    === "példa kód"
    ```` markdown
    ``` python
    import tensorflow as tf
    ```
    ````
    === "megjelenés"
    ``` python
    import tensorflow as tf
    ```

### Forráskód sorszámozása

!!! note "Python kód szövegkiemeléssel, sorszámmal"
    === "példa kód"
    ```` markdown
    ``` python linenums="1"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```
    ````
    === "megjelenés"
    ``` python linenums="1"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```

### Forráskód adott sorának kiemelése

!!! note "Python kód szövegkiemeléssel, 2. és 3. sor kiemelése"
    === "példa kód"
    ```` markdown
    ``` python hl_lines="2 3"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```
    ````
    === "megjelenés"
    ``` python hl_lines="2 3"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```

### Szövegen belül kiemelés

!!! note "Szövegen belül kiemelés"
    === "példa kód"
    ```` markdown
    The `#!python def bubble_sort(items)` function is used to generate a sequence of numbers.
    The `def bubble_sort(items)` function is used to generate a sequence of numbers.
    ````
    === "megjelenés"
    The `#!python def bubble_sort(items)` function is used to generate a sequence of numbers.<br>
    The `def bubble_sort(items)` function is used to generate a sequence of numbers.

### Billentyű gombok

!!! note "Billentyű gombok kiemelése"
    === "példa kód"
    ```` markdown
    ++ctrl+alt+del++
    ````
    === "megjelenés"
    ++ctrl+alt+del++

### Másik fájl tartalmának megjelenítése

Idk miért, de nem működik 😢

!!! note "Másik fájl referenciaként"
    === "példa kód"
    ```` markdown
    ```
    --8<--​ ".browserslistrc"
    ```
    ````
    === "megjelenés"
    ```html
    --8<--​ "./rolunk.md"
    ```

## Content tabs

!!! note "Lapozható fülek készítése"
    === "példa kód"
    ````
    === "C"
        ``` c
        #include <stdio.h>

        int main(void) {
        printf("Hello world!\n");
        return 0;
        }
        ```
    === "C++"
        ``` c++
        #include <iostream>

        int main(void) {
        std::cout << "Hello world!" << std::endl;
        return 0;
        }
        ```
    ````
    === "megjelenés"

        <br>
        
        === "C"
            ``` c
            #include <stdio.h>

            int main(void) {
            printf("Hello world!\n");
            return 0;
            }
            ```
        === "C++"
            ``` c++
            #include <iostream>

            int main(void) {
            std::cout << "Hello world!" << std::endl;
            return 0;
            }
            ```

## Data tables

!!! note "Táblázat"
    === "példa kód"
    ```` markdown
    | Method      | Description                          |
    | ----------- | ------------------------------------ |
    | `GET`       | :material-check:     Fetch resource  |
    | `PUT`       | :material-check-all: Update resource |
    | `DELETE`    | :material-close:     Delete resource |
    ````
    === "megjelenés"
    | Method      | Description                          |
    | ----------- | ------------------------------------ |
    | `GET`       | :material-check:     Fetch resource  |
    | `PUT`       | :material-check-all: Update resource |
    | `DELETE`    | :material-close:     Delete resource |

### Táblázat igazítása

!!! note "Táblázat igazítás"
    === "Bal"
        === "példa kód"
        ```` markdown hl_lines="2"
        | Method      | Description                          |
        | :---------- | :----------------------------------- |
        | `GET`       | :material-check:     Fetch resource  |
        | `PUT`       | :material-check-all: Update resource |
        | `DELETE`    | :material-close:     Delete resource |
        ````
        === "megjelenés"
        | Method      | Description                          |
        | :---------- | :----------------------------------- |
        | `GET`       | :material-check:     Fetch resource  |
        | `PUT`       | :material-check-all: Update resource |
        | `DELETE`    | :material-close:     Delete resource |
    === "Közép"
        === "példa kód"
        ```` markdown hl_lines="2"
        | Method      | Description                          |
        | :---------: | :----------------------------------: |
        | `GET`       | :material-check:     Fetch resource  |
        | `PUT`       | :material-check-all: Update resource |
        | `DELETE`    | :material-close:     Delete resource |
        ````
        === "megjelenés"
        | Method      | Description                          |
        | :---------: | :----------------------------------: |
        | `GET`       | :material-check:     Fetch resource  |
        | `PUT`       | :material-check-all: Update resource |
        | `DELETE`    | :material-close:     Delete resource |
    === "Jobb"
        === "példa kód"
        ```` markdown hl_lines="2"
        | Method      | Description                          |
        | ----------: | -----------------------------------: |
        | `GET`       | :material-check:     Fetch resource  |
        | `PUT`       | :material-check-all: Update resource |
        | `DELETE`    | :material-close:     Delete resource |
        ````
        === "megjelenés"
        | Method      | Description                          |
        | ----------: | -----------------------------------: |
        | `GET`       | :material-check:     Fetch resource  |
        | `PUT`       | :material-check-all: Update resource |
        | `DELETE`    | :material-close:     Delete resource |

A táblázatok első sorára kattintva, az adott oszlop szerint lehet rendezni a sorokat.

## Diagram

Nem értem miért nem működik 😢

!!! note "Diagram készítése"
    === "példa kód"
    ```` markdown
    ``` mermaid
    graph LR
    A[Start] --> B{Error?};
    B -->|Yes| C[Hmm...];
    C --> D[Debug];
    D --> B;
    B ---->|No| E[Yay!];
    ```
    ````
    === "megjelenés"
    ```mermaid
    graph LR
    A[Start] --> B{Error?};
    B -->|Yes| C[Hmm...];
    C --> D[Debug];
    D --> B;
    B ---->|No| E[Yay!];
    ```

## Footnotes

!!! note "Hivatkozás"
    === "példa kód"
    Ilyen formában add meg a szöveget:
    ```` markdown
    Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]
    ````
    Ezt pedig bárhol megadhatod a dokumentumban, de mindig a dokumentum aljában lesz megtalálható:
    ```` markdown
    [^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    [^2]:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.
    ````
    === "megjelenés"
    Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]
    [^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    [^2]:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

## Formatting

### Critic

!!! note "Szöveg formázás"
    === "Megjelenés"
        Here is some {--*incorrect*--} Markdown.  I am adding this{++ here++}.  Here is some more {--text
        that I am removing--}text.  And here is even more {++text that I 
        am ++}adding.{~~

        ~>  ~~}Paragraph was deleted and replaced with some spaces.{~~  ~>

        ~~}Spaces were removed and a paragraph was added.

        And here is a comment on {==some
        text==}{>>This works quite well. I just wanted to comment on it.<<}. Substitutions {~~is~>are~~} great!

        General block handling.

        {--

        * test remove
        * test remove
        * test remove
            * test remove
        * test remove

        --}

        {++

        * test add
        * test add
        * test add
            * test add
        * test add

        ++}
    === "Kód"
        ```critic-markup
        Here is some {--*incorrect*--} Markdown.  I am adding this{++ here++}.  Here is some more {--text
        that I am removing--}text.  And here is even more {++text that I 
        am ++}adding.{~~

        ~>  ~~}Paragraph was deleted and replaced with some spaces.{~~  ~>

        ~~}Spaces were removed and a paragraph was added.

        And here is a comment on {==some
        text==}{>>This works quite well. I just wanted to comment on it.<<}. Substitutions {~~is~>are~~} great!

        General block handling.

        {--

        * test remove
        * test remove
        * test remove
            * test remove
        * test remove

        --}

        {++

        * test add
        * test add
        * test add
            * test add
        * test add

        ++}
        ```
### BetterEm

Szöveg formázása egyszerűen, markdown stílusban:

!!! note "Formázás"
    === "Kód"
    ```text
    *Dőlt betű*

    **Félkövér**

    ***Dőlt félkövér***
    ```

    === "Megjelenés"
    *Dőlt betű*

    **Félkövér**
    
    ***Dőlt félkövér***

### Caret, Mark & Tilde

#### Caret



!!! note "Aláhúzás és felső indexbe tevés:"
    Vegyük észre, hogy a szóközt felső index esetében escape-elni kell a \ jellel.
    === "Kód"
    ```text
    ^^Aláhúzott^^

    Fels^ő\ indexbe^
    ```

    === "Megjelenés"
    ^^Aláhúzott^^

    Fel^ső\ indexbe^

#### Mark

!!! note "Szöveg kiemelése:"
    === "Kód"
    ```text
    ==Ez ki lesz emelve==, ez meg már nem 😢
    ```

    === "Megjelenés"
    ==Ez ki lesz emelve==, ez meg már nem 😢

#### Tilde

!!! note "Áthúzás és alsó indexbe tevés:"
    Vegyük észre, hogy a szóközt alsó index esetében escape-elni kell a \ jellel.
    === "Kód"
    ```text
    ~~Áthúzott~~

    Al~só\ indexbe~
    ```

    === "Megjelenés"
    ~~Áthúzott~~

    Al~só\ indexbe~

#### SmartSymbols

!!! note "szövegből speciális karaktert készít"
    Markdown       | Result
    -------------- |--------
    `(tm)`         | (tm)
    `(c)`          | (c)
    `(r)`          | (r)
    `c/o`          | c/o
    `+/-`          | +/-
    `-->`          | -->
    `<--`          | <--
    `<-->`         | <-->
    `=/=`          | =/=
    `1/4, etc.`    | 1/4, etc.
    `1st 2nd etc.` |1st 2nd etc.

## Icons + Emojis

Egyszerű szövegből emojit készít úgy, hogy *.svg* képet illeszt be a helyére.

!!! note "emoji használata"
    === "Kód"
    ```text
    :smile:

    - :fontawesome-brands-medium:{ .medium } – Medium
    - :fontawesome-brands-twitter:{ .twitter } – Twitter
    - :fontawesome-brands-facebook:{ .facebook } – Facebook
    ```
    === "Megjelenés"
    :smile:

    - :fontawesome-brands-medium:{ .medium } – Medium
    - :fontawesome-brands-twitter:{ .twitter } – Twitter
    - :fontawesome-brands-facebook:{ .facebook } – Facebook

## Images

### Kép elhelyezése

A `Placeholder` helyére lehet írni, hogy milyen szöveg jelenjen meg, ha nem tud betöltődni a kép.

=== "Left"

    _Example_:

    ``` markdown
    ![Placeholder](https://dummyimage.com/600x400/eee/aaa){ align=left }
    ```

    _Result_:

    ![Placeholder](https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–){ align=left width=300 }

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

=== "Right"

    _Example_:

    ``` markdown
    ![Placeholder](https://dummyimage.com/600x400/eee/aaa){ align=right }
    ```

    _Result_:

    ![Placeholder](https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–){ align=right width=300 }

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

=== "Caption"
    _Example_:

    ```html
    <figure>
        <img src="https://dummyimage.com/600x400/eee/aaa" width="300" />
        <figcaption>Image caption</figcaption>
    </figure>
    ```

    _Result_:

    <figure>
    <img src="https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–" width="300" />
    <figcaption>Image caption</figcaption>
    </figure>

=== "Lazy-loading"
    _Example_:

    ``` markdown
    ![Placeholder](https://dummyimage.com/600x400/eee/aaa){ loading=lazy }
    ```

    Akkor fog betöltődni a kép, amikor a viewport-ba kerül. *Pl. ha nem görget le az oldal aljáig a felhasználó, akkor minek töltődjön be a kép?*

    _Result_:

    ![Placeholder](https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–){ loading=lazy width=300 }

## Lists

Lista készítése. Lista listában csak **4 space**-szel beljebb lehet készíteni.

!!! note "Lista készítés"
    === "Számozatlan lista"
        Ilyen listát a `-`, `*` vagy `+` jelekkel lehet készíteni.

        === "Kód"
        ```text
        - alma
        - banán
            - banánfa
        - citrom
        ```

        === "Megjelenés"
        - alma
        - banán
            - banánfa
        - citrom

    === "Számozott lista"
        Egy szám és az azt követő ponttal lehet ilyen listát készíteni.

        === "Kód"
        ```text
        1. alma
        2. banán
            1. banánfa
        4. citrom
        ```

        === "Megjelenés"
        1. alma
        2. banán
            1. banánfa
        3. citrom

    === "Definíciós lista"
        `:` után soronként beljebb kezdve

        === "Kód"
        ```text
        `Lorem ipsum dolor sit amet`
        :   Sed sagittis eleifend rutrum. Donec vitae suscipit est. Nullam tempus
            tellus non sem sollicitudin, quis rutrum leo facilisis.

        `Cras arcu libero`
        :   Aliquam metus eros, pretium sed nulla venenatis, faucibus auctor ex. Proin
            ut eros sed sapien ullamcorper consequat. Nunc ligula ante.

            Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
            Nam vulputate tincidunt fringilla.
            Nullam dignissim ultrices urna non auctor.
        ```

        === "Megjelenés"
        `Lorem ipsum dolor sit amet`
        :   Sed sagittis eleifend rutrum. Donec vitae suscipit est. Nullam tempus
            tellus non sem sollicitudin, quis rutrum leo facilisis.

        `Cras arcu libero`
        :   Aliquam metus eros, pretium sed nulla venenatis, faucibus auctor ex. Proin
            ut eros sed sapien ullamcorper consequat. Nunc ligula ante.

            Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
            Nam vulputate tincidunt fringilla.
            Nullam dignissim ultrices urna non auctor.

    === "Feladat lista"
        `[ ]`-ban egy szóköz a teljesítetlent, a `[X]` a teljesített feladatot jelöli.

        Egy bekapcsolt featue miatt kattintásra ki és be lehet kapcsolni őket, de ez nem perzisztens, csak látvány szempontjából van jelentősége.

        === "Kód"
        ```text
        - [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
        - [ ] Vestibulum convallis sit amet nisi a tincidunt
            - [x] In hac habitasse platea dictumst
            - [x] In scelerisque nibh non dolor mollis congue sed et metus
            - [ ] Praesent sed risus massa
        - [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque
        ```

        === "Megjelenés"
        - [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
        - [ ] Vestibulum convallis sit amet nisi a tincidunt
            * [x] In hac habitasse platea dictumst
            * [x] In scelerisque nibh non dolor mollis congue sed et metus
            * [ ] Praesent sed risus massa
        - [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque

## MathJax

!!! note "Matekos képlet írás"
    === "Kód"
    ```text
    Block:

    $$
    \operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
    $$

    Inline:
    The homomorphism $f$ is injective if and only if its kernel is only the 
    singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such 
    that $f(a)=f(b)$.
    ```

    === "Megjelenés"
    Block:

    $$
    \operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
    $$

    Inline:

    The homomorphism $f$ is injective if and only if its kernel is only the 
    singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such 
    that $f(a)=f(b)$.

## Meta tags

Egy adott markdown dokumentumnak lehet ezen keresztül egy általad választott nevet és leírást adni. A markdown dokumentumnak a **tetejébe** kell hogy kerüljön a `---` közötti rész, hogy érvényesüljön.

```text
---
title: Lorem ipsum dolor sit amet
description: Nullam urna elit, malesuada eget finibus ut, ac tortor.
author: Radeczki Gergő István
date: June 12, 2021
---

# Főcím
...
```

## Variables

Vannak változók, amiket includolni lehet, felülírni stb.