
window.onload = init;

function init() {
    document.getElementById("formulario").addEventListener("submit", konprobatu);
}

let formulario = document.getElementById("formulario");
let formulario_elements = formulario.elements;

let izena_laukia = formulario_elements['izena'];
let abizena_laukia = formulario_elements['abizenak'];
let helbidea_laukia = formulario_elements['helbidea'];
let herria_laukia = formulario_elements['herria'];
let posta_laukia = formulario_elements['posta'];
let probintzia_laukia = formulario_elements['probintzia'];

function konprobatu(event) {
    event.preventDefault();
    let baliozkoa = true;
    let izenaRegEx = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let helbideaRegEx = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo)\.(com|es|net)$/;
    let herriaRegEx = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;
    let postaRegEx = /^[0-9]{5}$/;
    let probintziaRegEx = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;

    if (!izenaRegEx.test(izena_laukia.value)) {
        izena_laukia.style.backgroundColor = "red";
        alert("Izena ez da zuzena.");
        baliozkoa = false;
    } else {
        izena_laukia.style.backgroundColor = "green";
    }

    if (!izenaRegEx.test(abizena_laukia.value)) {
        abizena_laukia.style.backgroundColor = "red";
        alert("Abizenak ez dira zuzenak.");
        baliozkoa = false;
    } else {
        abizena_laukia.style.backgroundColor = "green";
    }

    if (!helbideaRegEx.test(helbidea_laukia.value)) {
        helbidea_laukia.style.backgroundColor = "red";
        alert("Helbide elektronikoa ez da zuzena.");
        baliozkoa = false;
    } else {
        helbidea_laukia.style.backgroundColor = "green";
    }

    if (!herriaRegEx.test(herria_laukia.value)) {
        herria_laukia.style.backgroundColor = "red";
        alert("Herria ez da zuzena.");
        baliozkoa = false;
    } else {
        herria_laukia.style.backgroundColor = "green";
    }

    if (!postaRegEx.test(posta_laukia.value)) {
        posta_laukia.style.backgroundColor = "red";
        alert("Posta kodeak 5 zenbaki izan behar ditu.");
        baliozkoa = false;
    } else {
        posta_laukia.style.backgroundColor = "green";
    }

    if (!probintziaRegEx.test(probintzia_laukia.value)) {
        probintzia_laukia.style.backgroundColor = "red";
        alert("Probintzia ez da zuzena.");
        baliozkoa = false;
    } else {
        probintzia_laukia.style.backgroundColor = "green";
    }

    if (baliozkoa) {
        alert("Formularioa ondo bete da!");
        formulario.submit();
    }
}

let inputElementuak = document.querySelectorAll("input");
function enterSakatua(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let elementuaTarget;
        let elementua = event.target;
        let aurrekoaDa = false;

        for (let elementubat of inputElementuak) {
            if (aurrekoaDa) {
                elementuaTarget = elementubat;
                break;
            }
            if (elementua == elementubat) {
                aurrekoaDa = true;
            }
        }
        if (elementuaTarget != undefined) {
            elementuaTarget.focus();
        }
    }
}

for (let inputElementua of inputElementuak) {
    inputElementua.addEventListener("keydown", enterSakatua);
}