//in JS regular expressions is usually done with two main functions
// .search() and .replace()
//.search() returns the index of the beginning of the input
//.replace 
/*The .test() method is a RegExp expression method.
It searches a string for a pattern, and returns true or false, depending on the result.
The following example searches a string for the character "e":
*/
// syntax for a regular exp. is  (/pattern/modifier)
/* modifier can be 
    i == "for case insensitive search"
    p == "to continue with the search even if the pattern has been found
        This is is useful when you want to search for all possible results"
    m == perform multiline search
*/
//LEARN REGULAR EXPRESSION WHEN NEEDED.
let firstName = "Chukwuebuka Alaegbu";
let text = firstName.search(/bu/m);
console.log(text);

const searchWord = "";

cars = [
    {
        id: "CAR023",
        name: "Innoson",
        model: "Ikenga",
        price: 22000,
        color: "Red",
        mileage: 12421,
    },
    {
        id: "CAR024",
        name: "Nord",
        model: "Axil",
        price: 13000,
        color: "Gold",
        mileage: 3214,
    },
    {
        id: "CAR025",
        name: "Peugeot",
        model: "306",
        price: 43000,
        color: "Silver",
        mileage: 243243,
    },
    {
        id: "CAR026",
        name: "Ford",
        model: "Edge",
        price: 42567,
        color: "Silver",
        mileage: 1275,
    }
];

function searchText( arr, text) {
    const allSearchedCars = [];
    arr.map((item) =>{
        if (item.color.test(text)) {
            allSearchedCars.push(item);
        }
    });
    return allSearchedCars;
}
console.log(searchText(cars, /silver/i));

const replaceText = "The Greatness of Chukwuebuka will be loud and concrete";

function replaceColorText(arr, originalText, newText) {
    const replacedArray = [];
    arr.map((item) => {
        if (item.color.search(originalText) > -1) {
            item.color = newText;
            replacedArray.push(item);
        }
    });
    return replacedArray;
}
//console.log(replaceColorText(cars, /silver/i, 'grey'));
