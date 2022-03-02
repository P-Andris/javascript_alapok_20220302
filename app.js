console.log("JS fájlban van");
/* function init() {
    document.getElementById("elem").innerHTML="Hahó";
}

window.addEventListener("load", init, false); */

// -----------------------------------

var szoveg = "Alma";
var szoveg2;
console.log(szoveg2);
szoveg2 = "Körte";

console.log(szoveg3)
var szoveg3 = "Szilva";

var a = "2";
var b = "3";
var osszeg = Number(a) + Number(b);
console.log(osszeg);

var logikai = false;

if(a === 2) {
    console.log("Az 'a' egy szám");
    console.log(typeof a);
}
else {
    console.log("Az 'a' nem egy szám");
    console.log(typeof a);
}

var szin = "red";

switch (szin) {
    case "red":
        console.log("Piros");
        break;
    case "green":
        console.log("Zöld");
        break;
    case "blue":
        console.log("Kék");
        break;
    default:
        console.log("Ezt a színt nem ismerem");
}

if(szin == "red") console.log("Piros");
else if(szin == "green") console.log("Zöld");
else if(szin == "blue") console.log("Kék");
else if(szin == "purple") console.log("Lila");
else console.log("Ezt a színt nem ismerem");