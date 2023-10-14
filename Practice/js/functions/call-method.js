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
// here 90 is the argument for the benchMarkGrade parameter

console.log(getResult);