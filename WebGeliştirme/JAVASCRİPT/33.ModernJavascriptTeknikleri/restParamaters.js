// ES5

function sum(){
    let arr = Array.prototype.slice.call(arguments);
    let results = 0;
    arr.forEach(element => {
        results+=element;
    });

    return results;

};

console.log(sum(10,20,30));


// ES6


let sumES6 = (...arry) => {
    let results=0;
    arry.forEach(item => results+=item);
    return results;
};

console.log(sumES6(20,20,40));


// rest Parametreler argüments içindeki değerleri diziye çevirerek onlar üzerinde işlemler yapabilmemizi sağlar . (rest parametreleri en sonda olmalıdır)


// examp ?????

function isDriver(...years){
years.forEach( item => {

if(item>=18) {
    console.log( "yaşınız "+ item + " ehliyet alabilirsiniz");
}

else {
    console.log("yaşınız "+item+ " ehliyet alamazsınız");
}

});
}


isDriver(18,15,9,199);