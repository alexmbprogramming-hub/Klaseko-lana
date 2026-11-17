

function ariketa() {
    var esaldia = prompt("Idatzi esaldi bat honen bokalak ikusteko");
    var bokalak = ['a', 'e', 'i', 'o', 'u'];
    var daudenBokalak = [];
    for(var i= 0; i < bokalak.length; i++) {
        if(esaldia.includes(bokalak[i])) {
            daudenBokalak.push(bokalak[i]);
        }
    }
    var erantzunaEsaldia = "jarritako esaldian hurrengo bokalak daude: " + daudenBokalak.join(", ");
    alert(erantzunaEsaldia);
    
}