//  Classes

class PersonEs6 {
    constructor (name,job,years) {
        this.name=name;
        this.job=job;
        this.years=years;
    }

    calculateAge() {
        return 2022 - this.years;
    }
}


let ahmet = new PersonEs6("ahmet","not work",1996);


console.log(ahmet.calculateAge());
