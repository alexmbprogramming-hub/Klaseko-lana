
window.onload = init;

function init() {
    document.getElementById("formulario").addEventListener("submit", konprobatu);
}
let formulario = document.getElementById("formulario");
let formulario_elements = formulario.elements;
let izena_laukia = formulario_elements['izena'];
let abizena_laukia = formulario_elements['abizena'];
let zenbakia_laukia = formulario_elements['telefonoa'];
let korreoa = formulario_elements['posta'];
function konprobatu(event) {
    event.preventDefault();
    let formularioa_zuzena = true;
    let pattern_letters = /^[a-zA-Z]+$/;
    if(!pattern_letters.test(izena_laukia.value)) {
        alert("Sartutako izena letrak bakarrik eduki ditzake");
        izena_laukia.style.borderColor = "red";
        formularioa_zuzena = false;
    }
    else {
        izena_laukia.style.borderColor = "green";
    }
    if(!pattern_letters.test(abizena_laukia.value)) {
        alert("Sartutako abizena letrak bakarrik eduki ditzake");
        abizena_laukia.style.borderColor = "red";
        formularioa_zuzena = false;
    }
    else {
        abizena_laukia.style.borderColor = "green";
    }
    let pattern_number = /^[0-9]{9}$/;
    if(!pattern_number.test(zenbakia_laukia.value)) {
        alert("Telefonoan 9 digituko zenbaki bat sartu behar da");
        zenbakia_laukia.style.borderColor = "red";
        formularioa_zuzena = false;
    }
    else {
        zenbakia_laukia.style.borderColor = "green";
    }
    let korreo_pattern = /^[a-zA-Z0-9]{4,20}@(gmail|hotmail|outlook|yahoo)\.(com|es|net)$/;
    if(!korreo_pattern.test(korreoa.value)) {
        korreoa.style.borderColor = "red";
        alert("Sartutako korreoa ez da egokia, gogoratu korreoaren izena karaktere alfanumerikoak eduki behar dituela eta\n'gmail',\n'hotmail',\n'outlook'\nedo 'yahoo' izan behar duela\n'.com'\n'.es' edo\n'.net'");
    }
    else {
        korreoa.style.borderColor = "green";
    }
    if(formularioa_zuzena) {
        alert("Formularioa zuzen bidali da");
        formulario.submit();
    }
}

