// The .apply method is very similar to .call method. 
//just that apply takes arrays as arguments instead of the literals or variables

const superSubs = {
    subMethod: function(averageGoal){
        const isGreatSub = this.goalContri > averageGoal ? `${this.name} is a great sub` : `${this.name} is not a great sub`;
        return isGreatSub;
    }
}

const sub1 = {
    name: "CR7",
    goalContri: 24
}
const sub2 = {
    name: "Havertz",
    goalContri: 7
}

//the difference btw call and apply is that apply must receive arguments as an array
let checkSub = superSubs.subMethod.call(sub2, 20);
let checkSub2 = superSubs.subMethod.apply(sub2, [20]);
console.log(checkSub);
console.log(checkSub2);

