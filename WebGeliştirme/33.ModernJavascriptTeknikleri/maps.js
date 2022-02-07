let val ;

// Maps 

const numbers = new Map();


numbers.set(1,"one"); // key and value
numbers.set("2","two");
numbers.set(3,"three");
numbers.set("four","four");

// kullanabileceğimiz bazı metotlar

val = numbers;

val = numbers.get(1); // bir değerine karşı gelen value değerini getirir.

val = numbers.size ; // kaç elemanlı olduğunu söyler

val = numbers.has(1); // bu key var mı yok mu ?

val = numbers.delete("four"); // delete değeri silmek için kullanılabilir.

// val = numbers.clear(); // tüm elemanları siler.

console.log(val);

for( let [key,value] of numbers) {
    console.log(key+ " = " + value);
}


var first = new Map(
    [
    
    [1,"one"],
    [2,"two"],
    [3,"three"]
    ]
);

var second = new Map ( [
    [4,"four"],
    [5,"five"]

]
);

var merged = new Map ([...first,...second]);

console.log(merged);

