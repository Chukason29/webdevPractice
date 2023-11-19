// .call method enables an object to use the method of another object
//An object
const firstClass = {
    isFirstClass: function(benchMarkGrade){
        let finalResult = this.grade >= benchMarkGrade ? "First Class" : "Second Class";
        return finalResult;
    }
}

const student1 = {
    name: "Obinna",
    grade: 50
}
const student2 = {
    name: "Elechi",
    grade: 90
}

const getResult = firstClass.isFirstClass.call(student2, 90); 
// here 90 is the argument for the benchMarkGrade parameter while student2 is the object

console.log(getResult);


// call method can also be used for normal function 
// when an object wants to use a function outside the object
const athletic = function (){
    if(this.grade <= 60){
        return "likely athletic";
    }else{
        return "not likely atheletic";
    }
}

const isAthletic = athletic.call(student1);
console.log(isAthletic);