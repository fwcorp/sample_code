function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        const result = n1 + n2;
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
}

const number1: number = 5;
const number2 = 2.8;
let printResult = true;
const resultPhrase = "result is : "


const result = add(number1, number2, printResult, resultPhrase);
console.log(result);