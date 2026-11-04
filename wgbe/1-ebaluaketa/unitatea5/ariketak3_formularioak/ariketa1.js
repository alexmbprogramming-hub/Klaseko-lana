/*function egiaztatu() {
    
}*/

function konprobatu(event) {
    let elementuak_hutsik = [];
    if(document.forms["formularioa"]["izena"] == "") {
        elementuak_hutsik.push("izena");
    }
    if(document.forms["formularioa"]["abizena1"] == "") {
        elementuak_hutsik.push("lehenengo abizena");
    }
    if(document.forms["formulatioa"]["abizena2"] == "") {
        elementuak_hutsik.push("bigarren abizena");
    }
    if(elementuak_hutsik.length > 0) {
        event.preventDefault();
        alert("Ezin izan da formularioa bidali");
        document.forms["formularioa"].preventDefault();
    }
    else {
        alert("Dena zuzen bidali da");
    }
}
document.getElementById("formularioa").addEventListener("submit", konprobatu);
//
