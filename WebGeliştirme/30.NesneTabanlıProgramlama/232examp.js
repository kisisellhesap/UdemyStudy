let num = {
    min: 0,
    max:100,
    check:function (value) {
        if(typeof value=="number" && (value>=this.min && value<=this.max)) {
         return true;
        } else {
            return false;
        }
    }
}
console.log(num.check(20));


let num1 = {
    min:20,
    max:50
}


console.log(num.check.call(num1,85));

/* fonksiyon içinde başka bir fonksiyona ulaşmak istersek yaptığımız uygulama. */