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
        let elementuak_hutsik_str = "";
        elementuak_hutsik.forEach(elementua => {
            elementuak_hutsik_str += elementua + ", ";
        })
        alert("Ezin izan da formularioa bidali, hurrengo elementuak bete gabe daude:" + elementuak_hutsik_str);
    }
    else {
        alert("Dena zuzen bidali da");
        alert("Datuak:\nIzena: " + document.forms['formularioa']['izena'].value
            + "\nLehenengo abizena: " + document.forms['formularioa']['abizena1'].value
            + "\nBigarren abizena: " + document.forms['formularioa']['abizena2'].value
        );
    }
}
document.getElementById("formularioa").addEventListener("submit", konprobatu);
