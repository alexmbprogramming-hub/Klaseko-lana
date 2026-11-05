let formulario = document.getElementById("formularioa");

for (let elemento of formulario.elements) {
    console.log(elemento.name);
}


function konprobatu(event) {
    let elementuak_hutsik = [];
    if(document.forms["formularioa"]["izena"].value == "") {
        elementuak_hutsik.push("izena");
    }
    if(document.forms["formularioa"]["abizena1"].value == "") {
        elementuak_hutsik.push("lehenengo abizena");
    }
    if(document.forms["formularioa"]["abizena2"].value == "") {
        elementuak_hutsik.push("bigarren abizena");
    }
    if(elementuak_hutsik.length > 0) {
        event.preventDefault();
        alert("Ezin izan da formularioa bidali");
    }
    else {
        alert("Dena zuzen bidali da");
    }
}
document.getElementById("formularioa").addEventListener("submit", konprobatu);
