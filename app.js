"use strict";
const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const buttonAdd = document.querySelector("button");
const numResults = [];
const strResults = [];
buttonAdd.addEventListener("click", (event) => {
    const num1 = inputNum1.value;
    const num2 = inputNum2.value;
    const numResult = add(+num1, +num2);
    const strResult = add(num1, num2);
    numResults.push(numResult);
    strResults.push(strResult);
    console.log(numResult);
    console.log(strResult);
    printResult({ val: numResult, timestamp: new Date() });
    console.log(numResults);
    console.log(strResults);
});
function printResult(resultObj) {
    console.log(resultObj.val);
}
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else if (typeof num1 === "string" && typeof num2 === "string")
        return num1 + num2;
    else
        return +num1 + +num2;
}
const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 1000);
});
somePromise.then((result) => {
    console.log(result.split(" "));
});
