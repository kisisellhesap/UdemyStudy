class PersonEs6 {
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    sayHi(){
        return ` hello l am ${this.name}`;
    }


}

// extends işlemi

class CustomerEs6 extends PersonEs6 {
    constructor(id,name,price){
        super(id,name);
        this.price=price;
    }

    static getprice() {
        return 1000;
    }

}



let cust = new CustomerEs6(1,"ali",150000);

console.log(cust);
console.log(CustomerEs6.getprice());