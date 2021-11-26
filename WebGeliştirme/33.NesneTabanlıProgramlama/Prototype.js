let Car = function (band,model,price) {
this.band= band;
this.model=model;
this.price=price;
// this.discount=
// function discount(number) {
//     return this.price-(this.price*number/100);
// }
}

Car.prototype.discount= function(number) {
    return this.price-(this.price*number/100);
}



// Car.prototype.discount = function() {
// return  this.price- 10000;
// }


let ferrari = new Car ("ferrari","gT 160",18000);


console.log(ferrari);
console.log(ferrari.discount(75));



/*
    JavaScriptte inheritance kavramını prototypelar ile sağlamaktayız.
    discount fonksiyonu Car clası içine yazıldığında direk olarak bir kopyası
    prototype ile miras alındığında direk olarak aktarıldığını unutmamak lazım.

    fonksiyon içine yazıldığında consolda bir nitelik olarak karşımıza çıkarken
    kalıtım yoluyla prototype fonksiyonu içinde karşımıza çıkıyor.



*/