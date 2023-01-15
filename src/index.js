function toReadable (number) {

    // console.log(String(123));

    /**
     * Human notation for digits in English.
     * @type {string[]}
     */
    let humanNotationDigits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    // noinspection GrazieInspection
    /**
     * Human notation for numbers in English.
     * @type {Object}
     */
    let humanNotationNumbers = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    let localStringNotation = '';

    const hundredsCount = Math.floor(number / 100);
    const dozensCount = Math.floor((number - hundredsCount * 100) / 10);
    const units = number - hundredsCount * 100 - dozensCount * 10;

    function getHumanTenToTwenty (numberLocal) {
        return (numberLocal < 100 ? humanNotationNumbers[numberLocal] : humanNotationNumbers[numberLocal - hundredsCount * 100]);
    }

    if (0 <= number && number < 10) {
        localStringNotation = humanNotationDigits[number];

    } else if (10 <= number && number <= 20) {
        localStringNotation = localStringNotation + getHumanTenToTwenty(number);

    } else if (20 < number && number < 100) {
        localStringNotation =
            localStringNotation +
            humanNotationNumbers[dozensCount * 10] +
            (units > 0 ? ' ' + humanNotationDigits[units] : '');

    } else if (100 <= number && number < 1000) {
        localStringNotation =
            localStringNotation +
            humanNotationDigits[hundredsCount] +
            ' ' +
            humanNotationNumbers[100] +
            (0 !== dozensCount ?
                (0 < dozensCount && dozensCount < 2 ?
                    ' ' + getHumanTenToTwenty(number) : ' ' + humanNotationNumbers[dozensCount * 10])
                : '') +
            ((units > 0 && dozensCount >= 2 || units > 0 && dozensCount < 1) ? ' ' + humanNotationDigits[units] : '');
    }

    return localStringNotation;
}

module.exports = toReadable;

let test_numbers_01 = [0, 8, 11, 25, 50, 100, 101, 111, 119, 129, 211, 225];
let test_numbers_02 = [210];

test_numbers_01.forEach((element) => {
    console.log(`${element} \t- ${toReadable(element)}`);
})

// test_numbers_01.forEach((element) => {
//     console.log(`${element} \t- ${toReadable(element)}`);
// })

