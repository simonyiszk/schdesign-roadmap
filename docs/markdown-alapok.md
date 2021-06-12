# Markdown szerkesztési segédlet

!!! warning "Figyelmeztetés"
    Ez a szekció még formázás alatt áll. Ennek ellenére hasznos információkat tartalmaz.

## Fejlécek

!!! example ""

    === "Output"
        ## h2 header
        ### h3 header
        #### h4 header
        ##### h5 header
        ###### h6 header

    === "Markdown"
        ```
        ## h2 header
        ### h3 header
        #### h4 header
        ##### h5 header
        ###### h6 header
        ```

!!! note
    Jobb oldalon látható, hogy az egyes header-típusok szépen egymás alá ágyazódnak be a tartalomjegyzékben, fontossági sorrendben.

!!! warning
    A **h1 headerek** furcsán viselkednek. Minden oldalon az első lesz az oldal címe, és onnantól kezdve minden további ugyanúgy jelenik meg, mint a cím, azonban **megtöri a jobb oldali linkeket**, ezért használatuk nem ajánlott.


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Tabok

!!! example "Tabok példa"

    === "Output"
        === "Tab 1"
            Markdown **content**.

            Multiple paragraphs.

        === "Tab 2"
            More Markdown **content**.

            - list item a
            - list item b

    === "Markdown"
        ```
        === "Tab 1"
            Markdown **content**.

            Multiple paragraphs.

        === "Tab 2"
            More Markdown **content**.

            - list item a
            - list item b
        ```


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


