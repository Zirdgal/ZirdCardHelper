// HTML DOM elements
const cardText = document.getElementsByClassName("card-text-content")[0];
const body = document.getElementsByTagName("body")[0];
const flexContainer = document.getElementById("flex-container-f40");
const nextButton = document.getElementById("next-button");
const checkButton = document.getElementById("check-button");
const answerBox = document.getElementById("answer");

// Periodic table elements in an array
var first40ElementsArray = [hydrogenObject, heliumObject, lithiumObject, berylliumObject, boronObject,
    carbonObject, nitrogenObject, oxygenObject, flourineObject, sodiumObject, magnesiumObject,
    aluminiumObject, siliconObject, phosphorusObject, sulfurObject, chlorineObject, potassiumObject,
    calciumObject, chromiumObject, manganeseObject, ironObject, cobaltObject, nickelObject, copperObject,
    zincObject, galliumObject, germaniumObject, arsenicObject, seleniumObject, bromineObject, silverObject,
    cadmiumObject, tinObject, antimonyObject, iodineObject, bariumObject, goldObject, mercuryObject,
    leadObject, bismuthObject];
// Removed Periodic table elements in an array
var removedFirst40ElementsArray = [];

// Global random elements
let randomFirst40Index;


// Function that checks if the answer is correct
function checkAnswer() {
    // If the inputed value is identical to the Periodic table elements name then...
    if (answerBox.value === first40ElementsArray[randomFirst40Index].symbol) {
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
        body.style.animation = "correctAnswer 1s ease-in-out"
        // Removes the current element from the list and saves it to `removedFirst40ElementsArray`
        removedFirst40ElementsArray = first40ElementsArray.splice(randomFirst40Index, 1);
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
            // Function that gets a random number
            let getRandomFirst40 = function() {
                return Math.floor(Math.random() * first40ElementsArray.length);
            }
            // Saves random number
            randomFirst40Index = getRandomFirst40();
            // Uses random number as object in list
            cardText.innerHTML = first40ElementsArray[randomFirst40Index].nameLV;
        }, 1000);
        // Adds the removed element back into the list
        first40ElementsArray.splice(39, 0, removedFirst40ElementsArray[0]);
        // Removes the element from the `removedFirst40ElementsArray`
        removedFirst40ElementsArray.pop();
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
        body.style.animation="wrongAnswer 1s ease-in-out"
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
        }, 1000);
    }
} 
// Function only runs onFirstRun
function onFirstRun() {
    // Ger random number
    let getRandomFirst40 = function() {
        return Math.floor(Math.random() * first40ElementsArray.length);
    }
    // Saves random number
    randomFirst40Index = getRandomFirst40();
    // Uses random number as object in list
    cardText.innerHTML = first40ElementsArray[randomFirst40Index].nameLV;

}

// runs the checkAnswer function
checkButton.onclick = checkAnswer;

// runs the NextCard() function on page load so it doesnt show placeholder text
window.onload = function() {onFirstRun()};    