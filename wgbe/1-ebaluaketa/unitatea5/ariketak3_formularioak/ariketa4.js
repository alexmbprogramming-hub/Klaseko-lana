
window.onload = init();

function init() {
    document.getElementById("formulario").addEventListener("submit", konprobatu);
}

let formulario = document.getElementById("formulario");
let formulario_elements = formulario.elements;
let izena_laukia = formulario_elements['izena'];
let abizena_laukia = formulario_elements['abizenak'];
let helbidea_laukia = formulario_elements['helbidea'];
let herria_laukia = formulario_elements['herria'];
let korreoa = formulario_elements['posta'];

function konprobatu(event) {
    event.preventDefault();
    let izenaRegEx = /^[a-zA-Z]+$/;
    if(!izenaRegEx.test(izena_laukia.value)){
        event.preventDefault();
        izena_laukia.style.backgroundColor = "red";
        alert("Ez da idatzi izenik edo idatzitako izena ez du balio, letrak eduki behar ditu");
    }
    else {
        izena_laukia.style.backgroundColor = "green";
    }
        if(!izenaRegEx.test(abizena_laukia.value)){
        event.preventDefault();
        abizena_laukia.style.backgroundColor = "red";
        alert("Ez da idatzi abizenik edo idatzitako izena ez du balio, letrak eduki behar ditu");
    }
    else {
        abizena_laukia.style.backgroundColor = "green";
    }
     let helbideaRegEx = /^[a-zA-Z0-9]{4,20}@(gmail|hotmail|outlook|yahoo)\.(com|es|net)$/;
     if(!helbideaRegEx.test(helbidea_laukia)) {
        alert("Sartutako korreoa ez da egokia");
     }
     else {
        helbidea_laukia.style.backgroundColor = "green";
     }
}