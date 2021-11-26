

function multiple(a,b,c,callback) {
let array = [];

for(let i=0; i<arguments.length-1;i++) {
        array[i]=callback(arguments[i]*2);
}
return  array;
}


function add(a) {
    return a+5;
}
    
let val;
val = multiple(5,10,2,add);




// for(let i =0; i<val.length;i++) {

//     val[i]=add(val[i]);
// }

console.log(val);


/* fonksiyonları farklı fonksiyonlar içerisinde kullandık
add fonksiyonunu multiple fonksiyonuna bir parametre olarak gönderdik */



