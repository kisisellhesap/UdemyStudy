function getTotal (a,b,c) {
    return a+b+c;
}

console.log(getTotal(5,5,10));


let numbers = [5,5,10];

// ES5

console.log(getTotal.apply(null,numbers));

// ES6 spread operator using

console.log(getTotal(...numbers));


let arr1 = ["two","three"];
let arr2 = ["one","four","five"];
    
let arr3 = ["one",...arr1,"four","five"];

arr1.push(...arr2);
console.log(arr1); 
console.log(arr3);


let h1 = document.querySelector("h1");
let divs = document.querySelectorAll("div");


let tags = [h1,...divs];

tags.forEach(tag => tag.style.color="red");