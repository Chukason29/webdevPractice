'use_strict'
// A class is construct used in creating objects
// always create a constructor to create template for objects

class Student{// always Capitalize class names
    constructor(fname, sname, age, complexion,grade){// A construstor is always needed
        this.fname = fname;
        this.sname = sname;
        this.age = age;
        this.complexion = complexion;
        this.grade = grade
    }
    //Then create methods for to make use of the properties
    firstClass(leastGrade){
        let sureGrade = this.grade > leastGrade ? "you're a first Class student" : "second class";
        return sureGrade;
    }    
}
const benchMarkGrade = 80;
let tommyZan = new Student("yartomizan", "Amades",28,"dark", 92);
console.log(tommyZan.firstClass(benchMarkGrade));