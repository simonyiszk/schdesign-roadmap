/**
 * Táblázat sorainak rendezése az első oszlopra kattintva
 */
document$.subscribe(function () {
    var tables = document.querySelectorAll("article table")
    tables.forEach(function (table) {
        new Tablesort(table)
    })
})

/**
 * MathJax miatt kell, szép matekos cuccokat lehet majd vele írni
 */
window.MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };
document$.subscribe(() => {
  MathJax.typesetPromise()
})
