// HTML DOM elements
let cardText = document.getElementById("card-text");
const body = document.getElementsByTagName("body")[0];
const flexContainer = document.getElementById("flex-container-f40");
const nextButton = document.getElementById("next-button");
const checkButton = document.getElementById("check-button");
const answerBox = document.getElementById("answer");

//Audio Elements
var correctAnswerSFX = document.getElementById("correct-answer-audio");
correctAnswerSFX.volume = 0.5;

// Periodic table elements
const hydrogenObject = {name: "Hydrogen", nameLV: "Ūdeņradis", symbol: "H", atomicNumber: "1"};
const heliumObject = {name: "Helium", nameLV: "Hēlijs", symbol: "He", atomicNumber: "2"};
const lithiumObject = {name: "Lithium", nameLV: "Litijs", symbol: "Li", atomicNumber: "3"};
const berylliumObject = {name: "Beryllium", nameLV: "Berilijs", symbol: "Be", atomicNumber: "4"};
const boronObject = {name: "Boron", nameLV: "Bors", symbol: "B", atomicNumber: "5"};
const carbonObject = {name: "Carbon", nameLV: "Ogleklis", symbol: "C", atomicNumber: "6"};
const nitrogenObject = {name: "Nitrogen", nameLV: "Slāpeklis", symbol: "N", atomicNumber: "7"};
const oxygenObject = {name: "Oxygen", nameLV: "Skābeklis", symbol: "O", atomicNumber: "8"};
const flourineObject = {name: "Flourine", nameLV: "Fluors", symbol: "F", atomicNumber: "9"};
const sodiumObject = {name: "Sodium", nameLV: "Nātrijs", symbol: "Na", atomicNumber: "11"};
const magnesiumObject = {name: "Magnesium", nameLV: "Magnijs", symbol: "Mg", atomicNumber: "12"};
const aluminiumObject = {name: "Aluminium", nameLV: "Alumīnijs", symbol: "Al", atomicNumber: "13"};
const siliconObject = {name: "Silicon", nameLV: "Silīcijs", symbol: "Si", atomicNumber: "14"};
const phosphorusObject = {name: "Phosphorus", nameLV: "Fosfors", symbol: "P", atomicNumber: "15"};
const sulfurObject = {name: "Sulfur", nameLV: "Sērs", symbol: "S", atomicNumber: "16"};
const chlorineObject = {name: "Chlorine", nameLV: "Hlors", symbol: "Cl", atomicNumber: "17"};
const potassiumObject = {name: "Potassium", nameLV: "Kālijs", symbol: "K", atomicNumber: "19"};
const calciumObject = {name: "Calcium", nameLV: "Kalcijs", symbol: "Ca", atomicNumber: "20"};
const chromiumObject = {name: "Chromium", nameLV: "Hroms", symbol: "Cr", atomicNumber: "24"};
const manganeseObject = {name: "Manganese", nameLV: "Mangāns", symbol: "Mn", atomicNumber: "25"};
const ironObject = {name: "Iron", nameLV: "Dzelzs", symbol: "Fe", atomicNumber: "26"};
const cobaltObject = {name: "Cobalt", nameLV: "Kobalts", symbol: "Co", atomicNumber: "27"};
const nickelObject = {name: "Nickel", nameLV: "Niķelis", symbol: "Ni", atomicNumber: "28"};
const copperObject = {name: "Copper", nameLV: "Varš", symbol: "Cu", atomicNumber: "29"};
const zincObject = {name: "Zinc", nameLV: "Cinks", symbol: "Zn", atomicNumber: "30"};
const galliumObject = {name: "Gallium", nameLV: "Gallijs", symbol: "Ga", atomicNumber: "31"};
const germaniumObject = {name: "Germanium", nameLV: "Germānijs", symbol: "Ge", atomicNumber: "32"};
const arsenicObject = {name: "Arsenic", nameLV: "Arsēns", symbol: "As", atomicNumber: "33"};
const seleniumObject = {name: "Selenium", nameLV: "Selēns", symbol: "Se", atomicNumber: "34"};
const bromineObject = {name: "Bromine", nameLV: "Broms", symbol: "Br", atomicNumber: "35"};
const silverObject = {name: "Silver", nameLV: "Sudrabs", symbol: "Ag", atomicNumber: "47"};
const cadmiumObject = {name: "Cadmium", nameLV: "Kadmijs", symbol: "Cd", atomicNumber: "48"};
const tinObject = {name: "Tin", nameLV: "Alva", symbol: "Sn", atomicNumber: "50"};
const antimonyObject = {name: "Antimony", nameLV: "Antimons", symbol: "Sb", atomicNumber: "51"};
const iodineObject = {name: "Iodine", nameLV: "Jods", symbol: "I", atomicNumber: "53"};
const bariumObject = {name: "Barium", nameLV: "Bārijs", symbol: "Ba", atomicNumber: "56"};
const goldObject = {name: "Gold", nameLV: "Zelts", symbol: "Au", atomicNumber: "79"};
const mercuryObject = {name: "Mercury", nameLV: "Dzīvsudrabs", symbol: "Hg", atomicNumber: "80"};
const leadObject = {name: "Lead", nameLV: "Svins", symbol: "Pb", atomicNumber: "82"};
const bismuthObject = {name: "Bismuth", nameLV: "Bismuts", symbol: "Bi", atomicNumber: "83"};

// Periodic table elements in a list
const first40ElementsArray = [hydrogenObject, heliumObject, lithiumObject, berylliumObject, boronObject,
    carbonObject, nitrogenObject, oxygenObject, flourineObject, sodiumObject, magnesiumObject,
    aluminiumObject, siliconObject, phosphorusObject, sulfurObject, chlorineObject, potassiumObject,
    calciumObject, chromiumObject, manganeseObject, ironObject, cobaltObject, nickelObject, copperObject,
    zincObject, galliumObject, germaniumObject, arsenicObject, seleniumObject, bromineObject, silverObject,
    cadmiumObject, tinObject, antimonyObject, iodineObject, bariumObject, goldObject, mercuryObject,
    leadObject, bismuthObject];

// Global random element
let randomFirst40Index

// Function that checks if the answer is correct
function checkAnswer() {
    // If the inputed value is identical to the Periodic table elements name then...
    if (answerBox.value === first40ElementsArray[randomFirst40Index].symbol) {
        //... change the inputed answer to correct
        answerBox.value = "Pareizi!";
        // disable all possible human interaction with the index and check answer button
        checkButton.disabled = true;
        answerBox.disabled = true;
        correctAnswerSFX.play();
        // Changes font colour to white to make it more viewable
        answerBox.style.color = "green";
        // Plays green correct animation
        body.style.animation = "correctAnswer 1s ease-in-out"
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
    } else {
        // ... change the inputed answer to incorrect
        answerBox.value = "Nepareizi, mēģini vēlreiz!";
               // disable all possible human interaction with the index and check answer button
        checkButton.disabled = true;
        answerBox.disabled = true;
        // Changes font colour to white to make it more viewable
        answerBox.style.color = "red";
        // Plays green correct animation
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