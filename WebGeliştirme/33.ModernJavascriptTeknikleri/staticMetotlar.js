class PersonEs6 {
    constructor (name,job,years) {
        this.name=name;
        this.job=job;
        this.years=years;
    }

    calculateAge() {
        return 2022 - this.years;
    }
    static sayHi(){
        console.log("hello there");
    }
}

// static metotlara classlar üzerinde ulaşılır

PersonEs6.sayHi();

let ahmet = new PersonEs6("ahmet","not work",1996);
console.log(ahmet.calculateAge());



class Point {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }

    static distance(a,b){
        const dx= a.x- b.x;
        const dy  = a.y - b.y;

        return Math.hypot(dx,dy);
    }
}


const d1 = new Point(10,10);

const d2 = new Point(20,20);


console.log(Point.distance(d1,d2));