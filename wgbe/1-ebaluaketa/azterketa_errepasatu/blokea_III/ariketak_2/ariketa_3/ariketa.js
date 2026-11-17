function erabiltzaileaSortu() {
    var izena = prompt("Mesdez zure izena idatzi");
    var abizena1 = prompt("Mesedez zure lehen abizena idatzi");
    var abizena2 = prompt("Mesedez zure bigarren abizena idatzi");

    var erabiltzailea = izena.charAt(0) + abizena1 + abizena2.charAt(0).toUpperCase() + izena.length;
    alert("Erabiltzailea hurrengoa da: " + erabiltzailea);
}

erabiltzaileaSortu();