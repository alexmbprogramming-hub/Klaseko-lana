

function ariketa() {
    var zenbaki1 = parseInt(prompt("Idatzi zenbaki bat"));
    var zenbaki2 = parseInt(prompt(("Idatzi beste zenbaki bat")));
    var gehiketa = zenbaki1 + zenbaki2;
    var esaldia = "Idatzitako lehenengo zenbakia " + zenbaki1 + " da, idatzitako bigarren zenbakia " + zenbaki2 + " da. Bien arteko gehiketa " + gehiketa + " zenbakia da.";
    alert(esaldia);
    document.getElementById("erantzuna").innerHTML = "<p>" + esaldia + "</p>";
}