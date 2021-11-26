

/* 

function Product(name,description,price,salary) {

this.name=name;
this.description=description;
this.price=price;
this.salary=salary;

console.log(this);

}
*/



let Product = function(name,description,price,salary) {
    this.name=name;
    this.description=description;
    this.price=price;
    this.salary=salary;
    
    console.log(this);

}


let lenovo = new Product("Lenovo","8GB RAM 15İNC DİSPLAY",15000,"Not Yet");
let asus = new Product("Asus","20GB RAM GAME PRO PLAYER",8000,10);

// console.log(lenovo);
// console.log(asus);

/* Constructor yapısı ile birden fazla ürünü aynı yapı altında tanımlayarak sıralamış olduk.
Yukarıda iki farklı kullanımı ile gösterilmiştir.  */