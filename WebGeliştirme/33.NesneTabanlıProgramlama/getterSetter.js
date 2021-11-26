 /* const person = {
    firstName: "ahmetcan",
    lastName:"karagöz",
    fullname: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

person.firstName="selam";
console.log(person.fullname());
 */

/*
const person = {
    firstName: "ahmetcan",
    lastName:"karagöz",
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    setFullName: function(value) {
        const parts = value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1]; 
    }
}


console.log(person.setFullName("Ali karagöz"));
console.log(person.getFullName());

*/

/*
const person = {
    firstName: "ahmetcan",
    lastName:"karagöz",
    get FullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set FullName (value) {
        const parts = value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1]; 
    }
}


person.FullName="Ali karagöz";
console.log(person.FullName);
console.log(person);

*/





const person = {
    firstName : 'Sadık',
    lastName : 'Turan'
}


Object.defineProperty(person,'fullName',{ 
    get function() {
        return `${this.firstName} ${this.lastName}`
    },
    set function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person,'age',{
    value : 50,
    writable : false     // get ve set metodları için önemli bir parametre 
})  

person.age = 55;

// person.firstName = 'Sena';
//person.fullName = 'Çınar Turan'
//console.log(person.fullName);
console.log(person.age);