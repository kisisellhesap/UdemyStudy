let Person = {
    age: function() {
    return 2021-this.yearOfbirth;
    }
}

let can = Object.create(Person);
can.name="ahmet";
can.yearOfbirth=1996;
can.lastName = "karagöz";
console.log(can);
console.log(can.age());  


let angela = Object.create(Person,{
    name:{value:"angela"}, 
    yearOfbirth:{value:1997},
    lastName: {value:"chole"}
})
console.log(angela);
console.log(angela.age());


/* Object create metodu ile bir objenin özelliğini başka bir yaratılan
objede kullandık. */