//variables to hold units, (reference only) change the defaults for these on actual page, declare with let
// fromUnit = "kg";
// toUnit = "lb.";


numEntry = /*PUT A FUCKING THING TO HOOK UP TO PROMPT INSTEAD OF THESE DEFAULT VALUES*/"2, 3, 5, 23".split(", ")

//add fuction to button/form so it does something, idk if we wanted to use this but its here, needs fleshing out if so
// function unitSwap() {
//     switch(fromUnit){
//         case "kg":
//             fromUnit = toUnit;
//             toUnit = "kg";
//             break;
//         case "lb.":
//             fromUnit = toUnit;
//             toUnit = "lb.";
//         break;
//     }
// }



//take in 2 parameters (unit being converted from + unit being converted to)
function createNewConverter (a = fromUnit, b = toUnit) {
    //return function that takes number parameter
    //
    switch(a, b){
        case "°F", "°C":
            return conversion = convNum => {(convNum - 32) * 5 / 9;}
            break;
        case "°C", "°F":
            return conversion = convNum => (convNum * 9 / 5) + 32;
            break;
        case "kg", "lb.":
            return conversion = convNum => convNum * 2.20462262185;
            break;
        case "lb.", "kg":
            return conversion = convNum => convNum / 2.20462262185;
            break;
        case "km", "Miles":
            return conversion = convNum => convNum * 0.621371;
            break;
        case "Miles", "km":
            return conversion = convNum => convNum / 0.621371;
            break;
    }
}



newArray = numEntry.map(createNewConverter());

//these are for testing input+returned values
console.log(numEntry)
console.log(newArray)
00000000000000000000000000000000000