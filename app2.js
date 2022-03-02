// Tömbök
var tomb = [];
var tomb2 = [2, 3, 4, 5];
var tomb3 = [4];

console.log(tomb.length);

var txt = "";
for(let i = 0; i < tomb2.length; i++) {
    txt = txt + tomb2[i] + " ";
}
console.log(txt);


var gyumolcs = ["alma", "málna", "barack", "ribizli", "paradicsom"];
var gyumolcsSzin = ["piros", "piros", "sárga", "piros", "piros"];
var gyumolcsAr = [240, 500, 300, 250, 500];
console.log("\nVan-e sárga színű gyümölcs?");
var i = 0;
while(i < gyumolcsSzin.length && !(gyumolcsSzin[i] === "sárga")) {
    i++;
}
var van = i < gyumolcsSzin.length;
console.log(van);

/*
Mennyi a piros színű gyümölcsök összértéke?
Hány 300Ft alatti termék van?
Van-e 1000Ft feletti termék?
*/
var osszertek = 0;
for(let j = 0; j < gyumolcsSzin.length; j++) {
    if(gyumolcsSzin[j] === "piros") osszertek = osszertek + gyumolcsAr[j];
}
console.log("\nÖsszérték: " + osszertek + "Ft");

var darab = 0;
for(let k = 0; k < gyumolcsAr.length; k++) {
    if(gyumolcsAr[k] < 300) darab = darab + 1;
}
console.log("Összesen " + darab + " db 300Ft alatti termék van");

let l = 0;
while(l < gyumolcsAr.length && !(gyumolcsAr[l] > 1000)) {
    l++;
}
var vanIlyen = l < gyumolcsAr.length;
console.log("Van-e 1000Ft feletti termék? " + vanIlyen);