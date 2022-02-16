// Destructuring

var a,b,rest;

a=10;
b=20;


[a,b] = [10,20];

console.log(a);
console.log(b);

[a,b,...rest] = [10,11,1,2,3,4,5];

console.log(a);
console.log(b);
console.log(rest);


({a,b} = {a:10, b:20});
console.log(a);
console.log(b);


 /* 

 // Array destructuring

const arrConfig = ["localhost","8080","900"];

// ES5


 
var server = arrConfig[0];
var port = arrConfig[1];
var timeout = arrConfig[2];

console.log(server,port,timeout); 



// ES6

const [server,port,timeout] = arrConfig;

console.log(server,port,timeout);

*/


// Object destructuring

const objConfig = {
    server: "localhost",
    port : "8080",
    timeout : 900
}

/*

const {server,port,timeout} = objConfig;    

console.log(server,port,timeout);




let {timeout: t } = objConfig;  // burada tanımlanılan değişken t dir. objconfig içinen timeout değişkenini alır ve t'ye atar.

console.log(t);

*/


let {server,port,timeout=900} = objConfig;

console.log(server,port,timeout);  // timeout değişkeni obje içerisinde yoksa default değerini bu şekilde yazabiliriz.




const days = ["monday","tuesday","wednesday","thursday","friday"];

const [,,wed,,fri] = days; // //  destructuring kavramı ile bu şekilde öteleme işlemi yapabiliriz.

console.log(wed,fri);