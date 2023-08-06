function fizzBuzz(input) {
    if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    } else if (input % 3 === 0) {
        return 'Fizz!';
    } else if (input % 5 === 0) {
        return 'Buzz!';
    } else {
        return input.toString();
    }
}

const submitButton = document.getElementById("submitButton");
const inputNumber = document.getElementById("inputNumber");
const outputDiv = document.getElementById("output");

submitButton.addEventListener("click", function() {
    const inputValue = parseInt(inputNumber.value);
    const result = fizzBuzz(inputValue);
    const resultText = document.createElement("p");
    resultText.textContent = result;
    resultText.classList.add("result");
    outputDiv.appendChild(resultText);
    inputNumber.value = ""; // Clear the input after submit
});
