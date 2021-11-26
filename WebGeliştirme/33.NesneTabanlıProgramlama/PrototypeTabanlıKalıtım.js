let person = function (name,yearOfbirth,lastName) {
this.name=name;
this.yearOfbirth=yearOfbirth;
this.lastName=lastName;
}

person.prototype.age= function() {
    return 2021- this.yearOfbirth;
}



let teacher = function(name,yearOfbirth,lastName,subject,salary) {
person.call(this,name,yearOfbirth,lastName);
this.subject=subject;
this.salary=salary;
}

teacher.prototype=Object.create(person.prototype);

teacher.prototype.constructor=teacher; // set teacher constructor

teacher.prototype.greeting=function() {
    return "hello my name is steve";
}
let steve = new teacher("steve",1980,"jobs","Apple",50000);
console.log(steve);
console.log(steve.age());
console.log(steve.greeting());




/* 

İlk olarak 2 tane constructorımız vardır. Person ana constructor olmak üzere 
teacher constructorı buradan miras alır.

this.name=name;
this.yearOfbirth=yearOfbirth;
this.lastName=lastName;   ** işlemlerini yapmak yerine inheritance olayını
person.call metodu ile çağırıyoruz.
Ayrı olarak person prototype nesnesinide inherit etmek için 
person pro.nı obje oluşturarak teacher pro. na bağladık böylece onlarıda 
inherit etmiş olduk.

artık teacher constructordan bir instance oluşturup person ya da teacher 
prototypena ulaşabiliriz.


*/