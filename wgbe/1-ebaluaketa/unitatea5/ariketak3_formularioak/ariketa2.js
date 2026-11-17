
window.onload = init;

function init() {
    document.getElementById("formulario").addEventListener("submit", cambiarColor);
}

function cambiarColor(event) {
    event.preventDefault();
    const formulario = document.getElementById("formulario");
    const elements = formulario.elements;
    const karratuak = document.getElementsByClassName("cuadrado");
    
    if(elements["selectCuadrado"].value == "default" && elements["selectColor"].value == "default") {
        alert("No se ha seleccionado ni el tipo de cuadrado ni su color");
    }
    else if(elements["selectCuadrado"].value == "default") {
        alert("No se ha seleccionado el tipo de cuadrado")
    }
    else if(elements["selectColor"].value == "default") {
        alert("No se ha seleccionado el color del cuadrado");
    }
    else {
        let numberCuadrado = elements["selectCuadrado"].value;
        const zeinKarratu = karratuak[numberCuadrado];
        zeinKarratu.style.backgroundColor = elements["selectColor"].value;
    }
    console.log(karratuak[1].classList);
}

init();

