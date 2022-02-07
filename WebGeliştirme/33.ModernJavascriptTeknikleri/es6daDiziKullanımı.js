let boxes = document.querySelectorAll(".box");


/*

ES5

let boxesES5 = Array.prototype.slice.call(boxes); // boxes diziye çevrilir.

boxesES5.forEach(element => {
    element.style.backgroundColor="green";
});

console.log(boxesES5);

ES6

Array.from(boxes).forEach(box => box.style.backgroundColor="red"); // bu da es6 kullanımı. boxları diziye çevirerek foreach metoduyla üzerinde işlem yapmamızı sağlıyor.

*/


// for kullanımı ES5 


// let boxesES5 = Array.prototype.slice.call(boxes);

// for (let i = 0 ; i<boxesES5.length;i++) {
// if(boxesES5[i].style.backgroundColor!=="blue") {
//     continue;
// }
// else { boxesES5[i].style.backgroundColor=="blue" 
//     boxesES5[i].textContent="I am a blue";
// }

// }


/*

// for kullanımı ES6

let boxesES6 = Array.from(boxes);

for(let box of boxesES6){
if(box.style.backgroundColor!=="blue"){
    continue;
}
else {
    box.style.backgroundColor=="blue" 
    box.textContent="I am a blue";
}
}

*/




// from

let arr =Array.from("modern Javascript");



const products = [
     {name : "samsung 5", price:3000},
     {name : "samsung 6", price:4000},
     {name : "samsung 7", price:5000}
];

console.log(Array.from(products,prd => prd.name));

console.log(Array.from(products,prd => prd.name=="samsung 7"));


// bir kritere göre bir eleman seçmek istediğimizde.Array

console.log(products.find(prd => prd.name=="samsung 5"));

// filtre işlemleri yapmak stediğimizde 

console.log(products.filter(prd => prd.name=="samsung 6"));

// herhangi bir değer var mı yok mu hangi indekste ? 
 
console.log(products.findIndex(prd => prd.price==3000));


 // array içinde key ve value değerlerinin gösterimi 


 // key and value

let numbers = ["a","b","c"];

let entries = numbers.entries();

for(let i of entries) {
    console.log(i);
}

// keys

let keys = numbers.keys();

for(let i of keys) {
    console.log(i);
}


// values 

let values = numbers.values();

for(let i of values) {
    console.log(i);
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?retiredLocale=tr