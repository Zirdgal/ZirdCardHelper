/*
 __                ___         
|__)_ _. _  _|. _   | _ |_ | _ 
|  (-| |(_)(_||(_   |(_||_)|(- 
                               
*/
const hydrogenObject = {name: "Hydrogen", nameLV: "Ūdeņradis", nameLVG: "Ūdenraža", nameLVOksīdi: "hidrīds", symbol: "H", atomicNumber: "1", prostulate: "1", prostulateType: "both", molarMass: 1};
const heliumObject = {name: "Helium", nameLV: "Hēlijs", symbol: "He", atomicNumber: "2"};
const lithiumObject = {name: "Lithium", nameLV: "Litijs", nameLVG: "Litija", symbol: "Li", atomicNumber: "3", prostulate: "1", prostulateType: "positive", molarMass: 7};
const berylliumObject = {name: "Beryllium", nameLV: "Berilijs", symbol: "Be", atomicNumber: "4"};
const boronObject = {name: "Boron", nameLV: "Bors", symbol: "B", atomicNumber: "5"};
const carbonObject = {name: "Carbon", nameLV: "Ogleklis", nameLVOksīdi:"karbīds", symbol: "C", atomicNumber: "6", prostulate: "4", prostulateType: "negative", molarMass: 12};
const nitrogenObject = {name: "Nitrogen", nameLV: "Slāpeklis", nameLVOksīdi: "nitrīds", symbol: "N", atomicNumber: "7", prostulate: "3", prostulateType: "negative", molarMass: 14};
const oxygenObject = {name: "Oxygen", nameLV: "Skābeklis", nameLVOksīdi: "oksīds", symbol: "O", atomicNumber: "8", prostulate: "2", prostulateType: "negative", molarMass: 16};
const flourineObject = {name: "Flourine", nameLV: "Fluors", nameLVOksīdi: "fluorīds", symbol: "F", atomicNumber: "9", prostulate: "1", prostulateType: "negative", molarMass: 19};
const sodiumObject = {name: "Sodium", nameLV: "Nātrijs", symbol: "Na", atomicNumber: "11"};
const magnesiumObject = {name: "Magnesium", nameLV: "Magnijs", nameLVG: "Magnija", symbol: "Mg", atomicNumber: "12", prostulate: "2", prostulateType: "positive", molarMass: 24};
const aluminiumObject = {name: "Aluminium", nameLV: "Alumīnijs", symbol: "Al", atomicNumber: "13"};
const siliconObject = {name: "Silicon", nameLV: "Silīcijs", nameLVOksīdi: "silicīds", symbol: "Si", atomicNumber: "14", prostulate: "4", prostulateType: "negative", molarMass: 28};
const phosphorusObject = {name: "Phosphorus", nameLV: "Fosfors", nameLVOksīdi: "fosfīds", symbol: "P", atomicNumber: "15", prostulate: "3", prostulateType: "negative", molarMass: 31};
const sulfurObject = {name: "Sulfur", nameLV: "Sērs", nameLVOksīdi: "sulfīds", symbol: "S", atomicNumber: "16", prostulate: "2", prostulateType: "negative", molarMass: 32};
const chlorineObject = {name: "Chlorine", nameLV: "Hlors", nameLVOksīdi: "hlorīds", symbol: "Cl", atomicNumber: "17", prostulate: "1", prostulateType: "negative", molarMass: 35.5};
const potassiumObject = {name: "Potassium", nameLV: "Kālijs", symbol: "K", atomicNumber: "19"};
const calciumObject = {name: "Calcium", nameLV: "Kalcijs", nameLVG: "Kalcija", symbol: "Ca", atomicNumber: "20", prostulate: "2", prostulateType: "positive", molarMass: 40};
const titanuimObject = {name: "Titanium", nameLV: "Titāns", symbol: "Ti", atomicNumber: "22"};
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
const bromineObject = {name: "Bromine", nameLV: "Broms", nameLVOksīdi: "bromīds", symbol: "Br", atomicNumber: "35", prostulate: "1", prostulateType: "negative", molarMass: 80};
const silverObject = {name: "Silver", nameLV: "Sudrabs", nameLVG: "Sudraba", symbol: "Ag", atomicNumber: "47", prostulate: "1", prostulateType: "positive", molarMass: 108};
const cadmiumObject = {name: "Cadmium", nameLV: "Kadmijs", symbol: "Cd", atomicNumber: "48"};
const tinObject = {name: "Tin", nameLV: "Alva", symbol: "Sn", atomicNumber: "50"};
const antimonyObject = {name: "Antimony", nameLV: "Antimons", symbol: "Sb", atomicNumber: "51"};
const iodineObject = {name: "Iodine", nameLV: "Jods", nameLVOksīdi: "jodīds", symbol: "I", atomicNumber: "53", prostulate: "1", prostulateType: "negative", molarMass: 127};
const bariumObject = {name: "Barium", nameLV: "Bārijs", symbol: "Ba", atomicNumber: "56"};
const goldObject = {name: "Gold", nameLV: "Zelts", symbol: "Au", atomicNumber: "79"};
const mercuryObject = {name: "Mercury", nameLV: "Dzīvsudrabs", symbol: "Hg", atomicNumber: "80"};
const leadObject = {name: "Lead", nameLV: "Svins", symbol: "Pb", atomicNumber: "82"};
const bismuthObject = {name: "Bismuth", nameLV: "Bismuts", symbol: "Bi", atomicNumber: "83"};

/*               
 /\     _|. _  
/--\|_|(_||(_)         
*/
var correctAnswerSFX = document.getElementById("correct-answer-audio");
var wrongAnswerSFX = document.getElementById("wrong-answer-audio");
correctAnswerSFX.volume = 0.5;
wrongAnswerSFX.volume = 0.5;