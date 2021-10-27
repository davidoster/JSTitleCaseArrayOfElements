let myArray = [1, 2, 3, 4, 5];

// define getArrayAndMultiplyByNumber(array, number)
// for each element of the array do element * number
// store the result of the above back to the same place in the array
// return this array to the programme
function getArrayAndMultiplyByNumber(array, number) {
    let resultArray = []; // create an empty array
    for (i of array) {
        resultArray.push(i * number); // someArray.push() puts / adds a new element inside the someArray
    }
    // console.log(resultArray);
    return (resultArray);
}

let result = getArrayAndMultiplyByNumber(myArray, 2);
// console.log(myArray);
// console.log(result);

// define powerOf2OfNumber(number)
function powerOf2OfNumber(number) {
    return (number * number);
}
let k = powerOf2OfNumber(5);
// console.log(k);

// console.log(powerOf2OfNumber(10));

// function returnMyWholeName(firstName, lastName)
// firstName lastName, e.g. George Pasparakis <---- returnMyWholeName("George", "Pasparakis")

function returnMyWholeName(firstName, lastName, isCapital) {
    if (isCapital) {
        let upper = `${firstName} ${lastName}`.toUpperCase();
        return (upper); // change it to make the name to capital
    } else {
        let titleFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        let titleLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
        let titleCase = `${titleFirst} ${titleLast}`;
        return (titleCase);
    }
}

// console.log(returnMyWholeName("george", "pasparakis", true)) // GEORGE PASPARAKIS
// console.log(returnMyWholeName("gEOrGE", "pASParakis", "George")) // George Pasparakis


// use the following array to convert the values within to title case using a function
// that you will create
function changeToTitleCaseAString(text) {
    var result = "";
    result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return (result);
}

function isFirstLetterACapital(text) {
    return (text.charAt(0) == text.charAt(0).toUpperCase());
}

let testArray = ["Peoplecert", "education", "People", "cert"];
// console.log(changeToTitleCaseAString("education"));

// let resultArray = ["PeopleCert", "Education", "People", "Cert"]
function titleCaseArrayElements(array) {
    let result = [];

    for (i of array) {
        if(i == "Peoplecert") {
            var temp =  changeToTitleCaseAString(i);
            temp = temp.substring(0,6) + temp.charAt(6).toUpperCase() + temp.substring(7);
            console.log(temp[6], temp);
            // temp[6] = temp[6].toUpperCase();
            // console.log(temp[6].toUpperCase());
            // result.push(temp);
        } else {
            result.push(changeToTitleCaseAString(i));
        }
    }
    return (result);
}

var returnArray = titleCaseArrayElements(testArray);
console.log("Returned Array: " + returnArray);


// DO TRY THIS AT HOME: if("George") console.log("Can't be TRUE!!!!")
// DO TRY ALSO THIS AT HOME: console.log("George" == true)
