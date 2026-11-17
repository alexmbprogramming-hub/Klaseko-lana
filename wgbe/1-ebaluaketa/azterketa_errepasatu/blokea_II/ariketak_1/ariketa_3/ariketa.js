

function ariketa() {
    var zenbakia1 = parseInt(prompt("Idatzi zenbaki bat"));
    var zenbakia2 = parseInt(prompt("Idatzi beste zenbaki bat"));
    var zenbakiHandiena = (zenbakia1 > zenbakia2) ? zenbakia1 : zenbakia2;
    html_egitura = "idatzitako zenbakietatik ( " + zenbakia1 + ", " + zenbakia2 + ") " + zenbakiHandiena + " zenbakia da";
    alert(html_egitura);
    document.getElementById("erantzuna").innerHTML = "<p>" + html_egitura + "</p>";
}

