let name = "ahmetcan";
let name2 = new String("Ahmetcan");

String.prototype.repeat=function(n){
return new Array(n+1).join(this);
}

console.log("Ahmet".repeat(4));


console.log(name);
console.log(name2);

let numb = 10;
let numb2 = new Number(20);
console.log(numb);
console.log(numb2);
let val= true;
let bool = new Boolean(false);
console.log(val);
console.log(bool);

let obje = {
    name : "ahmetcan"
};

let obje1 =  new Object(
     {name:"ahmetcan"},
);
console.log(obje);
console.log(obje1);

let array= [1,2,3,4,5];
let array1 = new Array([1,2,3,4,5,6,7]);

Array.prototype.remove= function(member){
    return array.indexOf(member);
}

console.log(array.remove(3));

console.log(array);
console.log(array1);




/* Methodlar yeterli gelmediğinde extend edilir.*/