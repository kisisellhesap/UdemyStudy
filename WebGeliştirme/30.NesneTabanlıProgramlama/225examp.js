

let person = function (name) {
this.name=name;
}
person.prototype.Introduce= function() {
    return console.log(`Hello my name is ${this.name}`);
}

///

let teacher = function(name,branch) {
person.call(this,name);
this.branch=branch;
}

teacher.prototype=Object.create(person.prototype);
teacher.prototype.constructor=teacher;

teacher.prototype.teach= function() {
    return console.log(`l teach ${this.branch}`);
}

let t1  = new teacher("Moile","Social Media");
console.log(t1);
t1.Introduce();
t1.teach();
///
    
let student = function(name,number) {
    person.call(this,name);
    this.number=number;
     }
        
        student.prototype=Object.create(person.prototype);
        student.prototype.constructor=student;
        
        student.prototype.study= function() {
            return console.log(`l study ${this.number}`);
        }


        let s1 = new student("Can",5);
        console.log(s1);
        s1.Introduce();
        s1.study();

let headMaster = function(name,branch){

teacher.call(this,name,branch);
}

headMaster.prototype=Object.create(teacher.prototype);
headMaster.prototype.constructor=headMaster;

headMaster.prototype.shareTask= function() {
return console.log(`l shareTask html/css`);
}

let h1 = new headMaster("Angela","Development");
console.log(h1);
h1.Introduce();
h1.teach();
h1.shareTask();
