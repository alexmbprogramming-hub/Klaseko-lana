function ariketen_indizea() {
    var html_egitura = "<div>";
    for(var i = 1; i < 11; i++) {
        html_egitura += "<h1>Ariketa " + i + "</h1><a href='ariketa_" + i + "/ariketa.html'>Ikusi ariketa</a>";
    }
    document.getElementById("ariketak").innerHTML = html_egitura;
}

ariketen_indizea();