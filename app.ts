const inputNum1 = document.getElementById("inputNum1") as HTMLInputElement;
const inputNum2 = document.getElementById("inputNum2") as HTMLInputElement;
const buttonAdd = document.querySelector("button")!;

buttonAdd.addEventListener("click", (event) => {
	const num1 = inputNum1.value;
	const num2 = inputNum2.value;
	console.log(add(+num1, +num2));
	console.log(add(num1, num2));
	console.log(add(+num1, num2));
});

function add(num1: number | string, num2: number | string) {
	if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
	else if (typeof num1 === "string" && typeof num2 === "string")
		return num1 + num2;
	else return +num1 + +num2;
}
