
function kalkulatuEgunak() {
    var kurtsobukaera = new Date(2027, 9, 31);
    var gaur = new Date();
    var milisegundos = kurtsobukaera.getTime() - gaur.getTime();
    var egunak = parseInt(milisegundos / 1000 / 60 /60 / 24);
    return ++egunak;
}

document.getElementById("erantzuna").innerHTML = "<p>Gaur gelditzen dira: " + kalkulatuEgunak() + " egunak kurtsoa bukatzeko</p>";

function urtebetetzeaIgandeak() {
    var gaurkoEguna = new Date();
    var urtebetetzea = new Date(1999, 7, 12);
    var urteak = [];
    if(gaurkoEguna > urtebetetzea) {
        urtebetetzea.setFullYear(2000);
    }
    for(var i = urtebetetzea.getFullYear(); i <= 2100; i++) {
        var urteHau = new Date(i, urtebetetzea.getMonth(), urtebetetzea.getDate());
        if(urteHau.getDay() == 0) {
            urteak.push(i);
        }
    }
    alert("Zure urtebetetzea abuztuko 12-a igandean izango da hurrengo urteetan: " + urteak.join(", "));
}

urtebetetzeaIgandeak();


