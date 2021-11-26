let a = 10;
let b=50;

b=a;

a=40;

console.log(a);
console.log(b);



let obje= {
    name:"ahmet",
    age: 22
}

let obje2;

obje2=obje;
console.log(obje2);



let num=50;
function show(a,b) {
a=100;
b.name="can";
}

show(num,obje);

console.log(num);
console.log(obje);


/* primitive tipler stack kısmında tutulurken referans tipler stack kısmında tutulur.
primitive tiplerde bir değişkene atama yapıldığında herhangi bir değişme olmazken
referans tipler direk referansını tuttuğu için birebir değişim olur. */

