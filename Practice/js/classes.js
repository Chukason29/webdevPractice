'use_strict'
// A class is construct used in creating objects
// always create a constructor to create template for objects

class Student{// always Capitalize class names
    constructor(fname, sname, age, complexion,grade){// A construstor is always needed
        // initializing class properties
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
const tommyZan = new Student("yartomizan", "Amades",28,"dark", 92);
console.log(tommyZan.firstClass(benchMarkGrade)); // accessing class' method);

const wisdom = new Student("wisdom", "Imaoye", 27, "dark", 98);
//Adding custom property to the objects
tommyZan.eyeColor = "green"; //eyeColor is strictly only for tommyzan Object
console.log(tommyZan.eyeColor);


//////////////////////////////  INHERITANCE //////////////////////////////////////
// use the extend keyword to inherit all the methods of the class
// use the super keyword to inherit all the properties of a class

class Activities extends Student{
    constructor(){
        
    }
}

class DiceRoller{
    constructor(yourTurn){
        this.yourTurn = yourTurn;
    }
    getDiceFigure(){
        let diceNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        return diceNum;
    }
    isSicky() {
        if(this.getDiceFigure() == 6){
            this.yourTurn = 1;
        }else{
            this.yourTurn = 0;
        }
        return this.yourTurn;
    }
}
const player1 = new DiceRoller(1)
const player2 = new DiceRoller(0)


