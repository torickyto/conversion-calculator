let numEntry = [];

//take in 2 parameters (unit being converted from + unit being converted to)
function createNewConverter(a = fromUnit, b = toUnit) {
    switch(`${a}-${b}`) {
        case "°F-°C":
            return (convNum) => (convNum - 32) * 5 / 9;
        case "°C-°F":
            return (convNum) => (convNum * 9 / 5) + 32;
        case "kg-lb":
            return (convNum) => convNum * 2.20462262185;
        case "lb-kg":
            return (convNum) => convNum / 2.20462262185;
        case "km-Miles":
            return (convNum) => convNum * 0.621371;
        case "Miles-km":
            return (convNum) => convNum / 0.621371;
        default:
            return null;
    }
}

let newArray = numEntry.map(createNewConverter);

export {numEntry, createNewConverter, newArray };
