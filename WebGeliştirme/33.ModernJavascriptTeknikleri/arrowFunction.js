let welcomeES6 = (/*paramaters*/) => {
console.log("Hello World");

};    // arrow function


welcomeES6();

let multiplyES6 = (x,y) => console.log(x*y) ;  //  parantez kullanılıyorsa return ifadesi kullanılmalıdır. kullanılmıyorsa yani tek satırsa return kullanmaya gerek yoktur

multiplyES6(5,6);


let splitES6 = Text =>  console.log(Text.split(" "));  // (Text) şeklinde de kullanılabilir.

splitES6("ahmet can karagöz");


let getProductsES6 = (id,name) => ({

    id : id,
    name : name
}); // object literals

console.log(getProductsES6("2","kisisellhesap"));

const  phones = [
    {name: "samsung 5 ", price : "2000"},
    {name: "samsung 6 ", price : "3000"},
    {name: "samsung 7 ", price : "4000"},
    {name: "samsung 8", price : "5000"}
];

 let mapES6  = phones.map(phone => phone.name);
 console.log(mapES6);



const arr = [1,55,23,53,7,65,4,3,2,123];
  
 let filterES6  = arr.filter(a => a%2==0 );

 console.log(filterES6);
