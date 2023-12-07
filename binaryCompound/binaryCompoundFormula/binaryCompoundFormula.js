// biCF = binary compound Formula(mode)

// HTML DOM ELEMENTS
const cardText = document.getElementsByClassName("card-text-content")[0];
const body = document.getElementsByTagName("body")[0];
const flexContainer = document.getElementById("flex-container-biCF");
const checkButton = document.getElementById("check-button");
const answerBox = document.getElementById("answer");

// All usable elements in an array
var biCFPositiveArray = [hydrogenObject, lithiumObject, berylliumObject, boronObject, magnesiumObject, aluminiumObject, potassiumObject, calciumObject, silverObject, bariumObject];

var biCFNegativeArray = [hydrogenObject, carbonObject, nitrogenObject, oxygenObject, flourineObject, siliconObject, phosphorusObject, sulfurObject, bromineObject, iodineObject];

// Removed usable elements
var removedbiCFPositiveElementsArray = [];
var removedbiCFNegativeElementsArray = [];

// Global random elements
let randomBiCFPositiveIndex;
let randomBiCFNegativeIndex;

// Correct Answer
let correctAnswer

// Function only runs onFirstRun
function onFirstRun() {
    // Check if arrays are not empty
    if (biCFNegativeArray.length === 0 || biCFPositiveArray.length === 0) {
        console.error("Error: Arrays are empty.");
        return;
    }

    // Get random number
    randomBiCFNegativeIndex = Math.floor(Math.random() * biCFNegativeArray.length);
    randomBiCFPositiveIndex = Math.floor(Math.random() * biCFPositiveArray.length);

    // Uses random number as object in list
    cardText.innerHTML = biCFPositiveArray[randomBiCFPositiveIndex].nameLVG + "\n\n" + biCFNegativeArray[randomBiCFNegativeIndex].nameLVOksīdi;
    // Call getCorrectAnswer to set/update the correct answer for the new question
    getCorrectAnswer();
}

// Correct answer
function getCorrectAnswer() {
    let firstElementName = biCFPositiveArray[randomBiCFPositiveIndex].symbol;
    let firstElementValue = biCFNegativeArray[randomBiCFNegativeIndex].oxidationNumber;

    let secondElementName = biCFNegativeArray[randomBiCFNegativeIndex].symbol;
    let secondElementValue = biCFPositiveArray[randomBiCFPositiveIndex].oxidationNumber;

    // Calculate the greatest common divisor (GCD)
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // Calculate the GCD of the values
    const divisor = gcd(firstElementValue, secondElementValue);

    // Simplify the ratio using the GCD
    firstElementValue /= divisor;
    secondElementValue /= divisor;

    // Combine the elements and values
    correctAnswer = firstElementName + (firstElementValue > 1 ? firstElementValue : "") +
        secondElementName + (secondElementValue > 1 ? secondElementValue : "");

    console.log(correctAnswer);
}
// Function that checks if the answer is correct
function checkAnswer() {
    console.log("Answer provided: ", answerBox.value);
    console.log("Correct answer: ", correctAnswer);

    // If the inputed value....
    if (answerBox.value === correctAnswer) {
        console.log("Correct answer!");

        //... change the inputed answer to correct
        answerBox.value = "Pareizi!";
        // disable all possible human interaction with the index and check answer button
        checkButton.disabled = true;
        answerBox.disabled = true;
        // Play correct answer SFX
        correctAnswerSFX.play();
        // Changes font colour to white to make it more viewable
        answerBox.style.color = "green";
        // Plays green correct animation
        body.style.animation = "correctAnswer 1s ease-in-out";

        // Remove the current elements from the list and save them to `removed` arrays
        removedbiCFPositiveElementsArray = biCFPositiveArray.splice(randomBiCFPositiveIndex, 1);
        removedbiCFNegativeElementsArray = biCFNegativeArray.splice(randomBiCFNegativeIndex, 1);

        // after 2 seconds ...
        setTimeout(() => {
            // Clears the input so it looks nicer
            answerBox.value = "";
            // Enables all possible human interaction with the index and check answer button
            answerBox.disabled = false;
            checkButton.disabled = false;
            // Changes font colour back to black
            answerBox.style.color = "black";
            // Clears the animation
            body.style.animation = "";
            // Call onFirstRun() to set up the new question
            onFirstRun();
        }, 1000);

        // Adds the previously removed elements back into the list
        biCFPositiveArray.splice(randomBiCFPositiveIndex, 0, removedbiCFPositiveElementsArray[0]);
        biCFNegativeArray.splice(randomBiCFNegativeIndex, 0, removedbiCFNegativeElementsArray[0]);

        // Removes the elements from the remove arrays
        removedbiCFPositiveElementsArray.pop();
        removedbiCFNegativeElementsArray.pop();
    } else {
        // ... change the inputed answer to incorrect
        answerBox.value = "Nepareizi, mēģini vēlreiz!";
        // disable all possible human interaction with the index and check answer button
        checkButton.disabled = true;
        answerBox.disabled = true;
        // Play wrong answer SFX
        wrongAnswerSFX.play();
        // Changes font colour to red cuz you a FAILURE
        answerBox.style.color = "red";
        // Plays 'red incorrect' animation
        body.style.animation = "wrongAnswer 1s ease-in-out";

        // after 2 seconds ...
        setTimeout(() => {
            // Clears the input so it looks nicer
            answerBox.value = "";
            // Enables all possible human interaction with the index and check answer button
            answerBox.disabled = false;
            checkButton.disabled = false;
            // Changes font colour back to black
            answerBox.style.color = "black";
            // Clears the animation
            body.style.animation = "";
            // Call onFirstRun() to set up the new question
            onFirstRun();
        }, 1000);
    }
}
// runs the checkAnswer function
checkButton.onclick = checkAnswer;

// runs the onFirstRun() function on page load so it doesn't show placeholder text
window.onload = function() {
    onFirstRun();
    getCorrectAnswer();

    // Now, set up the click event for checkButton
    checkButton.onclick = checkAnswer;
};