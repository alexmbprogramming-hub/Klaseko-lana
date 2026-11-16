
function zenbakiaBerE() {
    var zenbakia = parseInt(prompt("Zenbaki bat idatzi zenbakia ber E egiteko"));
    var Erantzuna1 = Math.pow(zenbakia, Math.E);
    var Erantzuna2 = Erantzuna1.toFixed(4);
    alert("Erantzuna da lehendabizi: " + Erantzuna1 + ", 4 dezimalekin bakarrik izango litzateke: " + Erantzuna2);
}

//zenbakiaBerE();

function hiruZenbakiak() {
    var zenbakia1 = parseInt(prompt("Idatzi zenbkia bitarrean"), 2);
    alert("Idatzitako zenbakia bitarrean hamartarrekin hurrengo izango litzateke: " + zenbakia1);
    alert("zenbaki berdina bitarrean izango litzateke: " + zenbakia1.toString(2));
    alert("zenbaki berdina oktalean izango litzateke: " + zenbakia1.toString(8));
    alert("zenbaki berdina hexadezimalean izango litzateke: " + zenbakia1.toString(16));

    var zenbakia2 = parseInt(prompt("Idatzi zenbaki bat oktalean"), 8);
    alert("Idatzitako zenbakia oktalean hurrengo izango litzateke: " + zenbakia2);

    var zenbakia3 = parseInt(prompt("Idatzi zenbaki bat "))
}

hiruZenbakiak();