// HTML DOM elements
const cardText = document.getElementsByClassName("card-text-content")[0];
const body = document.getElementsByTagName("body")[0];
const flexContainer = document.getElementById("flex-container-f40");
const nextButton = document.getElementById("next-button");
const checkButton = document.getElementById("check-button");
const answerBox = document.getElementById("answer");
const modal = document.getElementById("first40test-Modal");
const scoreText = document.getElementById("score-text");
const retryButton = document.getElementById("retry-button");

// Periodic table elements in an array
var first40ElementsArray = [hydrogenObject, heliumObject, lithiumObject, berylliumObject, boronObject,
carbonObject, nitrogenObject, oxygenObject, flourineObject, sodiumObject, magnesiumObject,
aluminiumObject, siliconObject, phosphorusObject, sulfurObject, chlorineObject, potassiumObject,
calciumObject, chromiumObject, manganeseObject, ironObject, cobaltObject, nickelObject, copperObject,
zincObject, galliumObject, germaniumObject, arsenicObject, seleniumObject, bromineObject, silverObject,
cadmiumObject, tinObject, antimonyObject, iodineObject, bariumObject, goldObject, mercuryObject,
leadObject, bismuthObject];

// Global random elements
let randomFirst40Index;
let currentScore = 0;
let maxScore = 0;

// Function that checks if the answer is correct
function checkAnswer() {
    console.log("Inside checkAnswer");

    // Check if the random index is within bounds
    if (randomFirst40Index >= 0 && randomFirst40Index < first40ElementsArray.length) {
        console.log("Random index is defined");

        if (answerBox.value === first40ElementsArray[randomFirst40Index].symbol) {
            console.log("Correct Answer!");
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
            // Adds one to the current score
            currentScore++;
        } else {
            console.log("Incorrect answer");
            // ... change the inputed answer to incorrect
            answerBox.value = "Nepareizi, pareizā atbilde bija: " + first40ElementsArray[randomFirst40Index].symbol;
            // disable all possible human interaction with the index and check answer button
            checkButton.disabled = true;
            answerBox.disabled = true;
            // Play wrong answer SFX
            wrongAnswerSFX.play();
            // Changes font colour to red cuz you a FAILURE
            answerBox.style.color = "red";
            // Plays 'red incorrect' animation
            body.style.animation = "wrongAnswer 1s ease-in-out";
        }

        // Removes the current Element
        first40ElementsArray.splice(randomFirst40Index, 1);
        // Adds one to the max score
        maxScore++;

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
            let getRandomFirst40 = function () {
                return Math.floor(Math.random() * first40ElementsArray.length);
            }
            // Saves random number
            randomFirst40Index = getRandomFirst40();
            // Uses random number as object in list
            cardText.innerHTML = first40ElementsArray[randomFirst40Index].nameLV;
            
            // If the score is 0
            if (currentScore === 0) {
            // Update score in modal
            scoreText.textContent = "Jūs ieguvāt: " + currentScore + " no 40 punktiem";
            // If the score isn't 0 add 1 cuz thats how math works lol
            } else {
                let fakeCurrentScore = currentScore + 1;
                // Update score in modal
                scoreText.textContent = "Jūs ieguvāt: " + fakeCurrentScore + " no 40 punktiem";
            }
        }, 1000);
    } else {
        console.log("Random index is undefined");
    }

    // Check if the array is empty and display the modal
    if (first40ElementsArray.length === 0) {
        console.log("Length is " + first40ElementsArray.length + ", modal should be displayed");
        modal.style.display = "block";
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
function retryTest() {
    // Restoring the elements to the array
    first40ElementsArray.push(hydrogenObject, heliumObject, lithiumObject, berylliumObject, boronObject,
        carbonObject, nitrogenObject, oxygenObject, flourineObject, sodiumObject, magnesiumObject,
        aluminiumObject, siliconObject, phosphorusObject, sulfurObject, chlorineObject, potassiumObject,
        calciumObject, chromiumObject, manganeseObject, ironObject, cobaltObject, nickelObject, copperObject,
        zincObject, galliumObject, germaniumObject, arsenicObject, seleniumObject, bromineObject, silverObject,
        cadmiumObject, tinObject, antimonyObject, iodineObject, bariumObject, goldObject, mercuryObject,
        leadObject, bismuthObject);
    // Hiding the modal
    modal.style.display = "none";
    // Resetting scores
    maxScore = 0;
    currentScore = 0;
}

// runs the RetryTest function
retryButton.onclick = retryTest;

// runs the checkAnswer function
checkButton.onclick = checkAnswer;

// runs the NextCard() function on page load so it doesnt show placeholder text
window.onload = function() {onFirstRun()};    