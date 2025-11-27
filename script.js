// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

const resultDisplay = document.getElementById("resultsDisplay");

const question = document.getElementById("top");

const blepDog = document.getElementById("blepDog");
const happyDog = document.getElementById("happyDog");
const sleepingDog = document.getElementById("sleepingDog");
const dopeyDog = document.getElementById("dopeyDog");
const burgerDog = document.getElementById("burgerDog");
const cartDog = document.getElementById("cartDog");
const nerdDog = document.getElementById("nerdDog");
const shyDog = document.getElementById("shyDog");
const sleepyDog = document.getElementById("sleepyDog");


const blepBed = document.getElementById("blepBed");
const happyBed = document.getElementById("happyBed");
const sleepingBed = document.getElementById("sleepingBed");
const dopeyBed = document.getElementById("dopeyBed");
const burgerBed = document.getElementById("burgerBed");
const cartBed = document.getElementById("cartBed");
const nerdBed = document.getElementById("nerdBed");
const shyBed = document.getElementById("shyBed");
const sleepyBed = document.getElementById("sleepyBed");


const blepToy = document.getElementById("blepToy");
const happyToy = document.getElementById("happyToy");
const sleepingToy = document.getElementById("sleepingToy");
const dopeyToy = document.getElementById("dopeyToy");
const burgerToy = document.getElementById("burgerToy");
const cartToy = document.getElementById("cartToy");
const nerdToy = document.getElementById("nerdToy");
const shyToy = document.getElementById("shyToy");
const sleepyToy = document.getElementById("sleepyToy");


const container = document.querySelector('[data-choice-id="blep"]');
const container2 = document.querySelector('[data-choice-id="happy"]');
const container3 = document.querySelector('[data-choice-id="sleeping"]');
const container4 = document.querySelector('[data-choice-id="dopey"]');
const container5 = document.querySelector('[data-choice-id="burger"]');
const container6 = document.querySelector('[data-choice-id="cart"]');
const container7 = document.querySelector('[data-choice-id="nerd"]');
const container8 = document.querySelector('[data-choice-id="shy"]');
const container9 = document.querySelector('[data-choice-id="sleepy"]');

const container10 = document.querySelector('[data-choice-id="blep1"]');
const container11 = document.querySelector('[data-choice-id="happy1"]');
const container12 = document.querySelector('[data-choice-id="sleeping1"]');
const container13 = document.querySelector('[data-choice-id="dopey1"]');
const container14 = document.querySelector('[data-choice-id="burger1"]');
const container15 = document.querySelector('[data-choice-id="cart1"]');
const container16 = document.querySelector('[data-choice-id="nerd1"]');
const container17 = document.querySelector('[data-choice-id="shy1"]');
const container18 = document.querySelector('[data-choice-id="sleepy1"]');


const container19 = document.querySelector('[data-choice-id="blep2"]');
const container20 = document.querySelector('[data-choice-id="happy2"]');
const container21 = document.querySelector('[data-choice-id="sleeping2"]');
const container22 = document.querySelector('[data-choice-id="dopey2"]');
const container23 = document.querySelector('[data-choice-id="burger2"]');
const container24 = document.querySelector('[data-choice-id="cart2"]');
const container25 = document.querySelector('[data-choice-id="nerd2"]');
const container26 = document.querySelector('[data-choice-id="shy2"]');
const container27 = document.querySelector('[data-choice-id="sleepy2"]');


const box = document.getElementsByClassName("box");

const button = document.getElementById("clickable");
const button2 = document.getElementById("clickable2");
const button3 = document.getElementById("clickable3");
const button4 = document.getElementById("clickable4");
const button5 = document.getElementById("clickable5");
const button6 = document.getElementById("clickable6");
const button7 = document.getElementById("clickable7");
const button8 = document.getElementById("clickable8");

const button9 = document.getElementById("clickable9");
const button10 = document.getElementById("clickable10");
const button11 = document.getElementById("clickable11");
const button12 = document.getElementById("clickable12");
const button13 = document.getElementById("clickable13");
const button14 = document.getElementById("clickable14");
const button15 = document.getElementById("clickable15");
const button16 = document.getElementById("clickable16");
const button17 = document.getElementById("clickable17");
const button18 = document.getElementById("clickable18");


const button19 = document.getElementById("clickable19");
const button20 = document.getElementById("clickable20");
const button21 = document.getElementById("clickable21");
const button22 = document.getElementById("clickable22");
const button23 = document.getElementById("clickable23");
const button24 = document.getElementById("clickable24");
const button25 = document.getElementById("clickable25");
const button26 = document.getElementById("clickable26");
const button27 = document.getElementById("clickable27");

let result = []
let A = []
let B = []
let C = []    

const checkbox = document.getElementById("checkbox");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const checkbox4 = document.getElementById("checkbox4");
const checkbox5 = document.getElementById("checkbox5");
const checkbox6 = document.getElementById("checkbox6");
const checkbox7 = document.getElementById("checkbox7");
const checkbox8 = document.getElementById("checkbox8");
const checkbox9 = document.getElementById("checkbox9");
const checkbox10 = document.getElementById("checkbox10");
const checkbox11 = document.getElementById("checkbox11");
const checkbox12 = document.getElementById("checkbox12");
const checkbox13 = document.getElementById("checkbox13");
const checkbox14 = document.getElementById("checkbox14");
const checkbox15 = document.getElementById("checkbox15");
const checkbox16 = document.getElementById("checkbox16");
const checkbox17 = document.getElementById("checkbox17");
const checkbox18 = document.getElementById("checkbox18");
const checkbox19 = document.getElementById("checkbox19");
const checkbox20 = document.getElementById("checkbox20");
const checkbox21 = document.getElementById("checkbox21");
const checkbox22 = document.getElementById("checkbox22");
const checkbox23 = document.getElementById("checkbox23");
const checkbox24 = document.getElementById("checkbox24");
const checkbox25 = document.getElementById("checkbox25");
const checkbox26 = document.getElementById("checkbox26");




function changeBox() {
    if (checkbox.src.includes('images/unchecked.png')) {
        checkbox.addEventListener === "click";
        A = (0);
        console.log(A);
        checkbox.src = 'images/checked.png';
        checkbox.style.backgroundColor = "#cfe3ff";
        button.style.backgroundColor = "#cfe3ff";
        container.style.backgroundColor = "#cfe3ff";
        happyDog.style.opacity = 0.6;
        sleepingDog.style.opacity = 0.6;
        dopeyDog.style.opacity = 0.6;
        burgerDog.style.opacity = 0.6;
        cartDog.style.opacity = 0.6;
        nerdDog.style.opacity = 0.6;
        shyDog.style.opacity = 0.6;
        sleepyDog.style.opacity = 0.6;
    } else {
        checkbox.src = 'images/unchecked.png';
        checkbox.style.backgroundColor = "#f4f4f4";
        button.style.backgroundColor = "#f4f4f4";
        container.style.backgroundColor = "#f4f4f4";
        happyDog.style.opacity = 1;
        sleepingDog.style.opacity = 1;
        dopeyDog.style.opacity = 1;
        burgerDog.style.opacity = 1;
        cartDog.style.opacity = 1;
        nerdDog.style.opacity = 1;
        shyDog.style.opacity = 1;
        sleepyDog.style.opacity = 1;
    }
}

function changeBoxes() {
    if (checkbox1.src.includes('images/unchecked.png')) {
        checkbox1.addEventListener === "click";
        A = (1);
        console.log(A);
        checkbox1.src = 'images/checked.png';
        checkbox1.style.backgroundColor = "#cfe3ff";
        button2.style.backgroundColor = "#cfe3ff";
        container2.style.backgroundColor = "#cfe3ff";
        blepDog.style.opacity = 0.6;
        sleepingDog.style.opacity = 0.6;
        dopeyDog.style.opacity = 0.6;
        burgerDog.style.opacity = 0.6;
        cartDog.style.opacity = 0.6;
        nerdDog.style.opacity = 0.6;
        shyDog.style.opacity = 0.6;
        sleepyDog.style.opacity = 0.6;
    } else {
        checkbox1.src = 'images/unchecked.png';
        checkbox1.style.backgroundColor = "#f4f4f4";
        button2.style.backgroundColor = "#f4f4f4";
        container2.style.backgroundColor = "#f4f4f4";
        blepDog.style.opacity = 1;
        sleepingDog.style.opacity = 1;
        dopeyDog.style.opacity = 1;
        burgerDog.style.opacity = 1;
        cartDog.style.opacity = 1;
        nerdDog.style.opacity = 1;
        shyDog.style.opacity = 1;
        sleepyDog.style.opacity = 1;
    }
}

function boxChange() {
    if (checkbox2.src.includes('images/unchecked.png')) {
        checkbox2.addEventListener === "click";
        A = (2);
        console.log(A);
        checkbox2.src = 'images/checked.png';
        checkbox2.style.backgroundColor = "#cfe3ff";
        button3.style.backgroundColor = "#cfe3ff";
        container3.style.backgroundColor = "#cfe3ff";
        blepDog.style.opacity = 0.6;
        happyDog.style.opacity = 0.6;
        dopeyDog.style.opacity = 0.6;
        burgerDog.style.opacity = 0.6;
        cartDog.style.opacity = 0.6;
        nerdDog.style.opacity = 0.6;
        shyDog.style.opacity = 0.6;
        sleepyDog.style.opacity = 0.6;
    } else {
        checkbox2.src = 'images/unchecked.png';        
        checkbox2.style.backgroundColor = "#f4f4f4";
        button3.style.backgroundColor = "#f4f4f4";
        container3.style.backgroundColor = "#f4f4f4";
        blepDog.style.opacity = 1;
        happyDog.style.opacity = 1;
        dopeyDog.style.opacity = 1;
        burgerDog.style.opacity = 1;
        cartDog.style.opacity = 1;
        nerdDog.style.opacity = 1;
        shyDog.style.opacity = 1;
        sleepyDog.style.opacity = 1;
    }
}

function BoxChange() {
    const checkbox3 = document.getElementById("checkbox3");
    if (checkbox3.src.includes('images/unchecked.png')) {
        checkbox3.addEventListener === "click";
        A = (3);
        console.log(A);
        checkbox3.src = 'images/checked.png';
        checkbox3.style.backgroundColor = "#cfe3ff";
        button4.style.backgroundColor = "#cfe3ff";
        container4.style.backgroundColor = "#cfe3ff";
        blepDog.style.opacity = 0.6;
        happyDog.style.opacity = 0.6;
        sleepingDog.style.opacity = 0.5;
        burgerDog.style.opacity = 0.6;
        cartDog.style.opacity = 0.6;
        nerdDog.style.opacity = 0.6;
        shyDog.style.opacity = 0.6;
        sleepyDog.style.opacity = 0.6;
    } else {
        checkbox3.src = 'images/unchecked.png';
        checkbox3.style.backgroundColor = "#f4f4f4";
        button4.style.backgroundColor = "#f4f4f4";
        container4.style.backgroundColor = "#f4f4f4";
        blepDog.style.opacity = 1;
        happyDog.style.opacity = 1;
        sleepingDog.style.opacity = 1;
        burgerDog.style.opacity = 1;
        cartDog.style.opacity = 1;
        nerdDog.style.opacity = 1;
        shyDog.style.opacity = 1;
        sleepyDog.style.opacity = 1
    }
}
function Changebox() {
    if (checkbox4.src.includes('images/unchecked.png')) {
        checkbox4.addEventListener === "click";
        A = (4);
        console.log(A);
        checkbox4.src = 'images/checked.png';
        checkbox4.style.backgroundColor = "#cfe3ff";
        button5.style.backgroundColor = "#cfe3ff";
        container5.style.backgroundColor = "#cfe3ff";
        blepDog.style.opacity = 0.6;
        happyDog.style.opacity = 0.6;
        sleepingDog.style.opacity = 0.6;
        dopeyDog.style.opacity = 0.6;
        cartDog.style.opacity = 0.6;
        nerdDog.style.opacity = 0.6;
        shyDog.style.opacity = 0.6;
        sleepyDog.style.opacity = 0.6;
    } else {
        checkbox4.src = 'images/unchecked.png';
        checkbox4.style.backgroundColor = "#f4f4f4";
        button5.style.backgroundColor = "#f4f4f4";
        container5.style.backgroundColor = "#f4f4f4";
        blepDog.style.opacity = 1;
        happyDog.style.opacity = 1;
        sleepingDog.style.opacity = 1;
        dopeyDog.style.opacity = 1;
        cartDog.style.opacity = 1;
        nerdDog.style.opacity = 1;
        shyDog.style.opacity = 1;
        sleepyDog.style.opacity = 1;
    }
}

function Imagechange() {
    if (checkbox5.src.includes('images/unchecked.png')) {
        checkbox5.addEventListener === "click";
        A = (5);
        console.log(A);
        checkbox5.src = 'images/checked.png';
        checkbox5.style.backgroundColor = "#cfe3ff";
        button6.style.backgroundColor = "#cfe3ff";
        container6.style.backgroundColor = "#cfe3ff";
        blepDog.style.opacity = 0.6;
        happyDog.style.opacity = 0.6;
        sleepingDog.style.opacity = 0.6;
        dopeyDog.style.opacity = 0.6;
        burgerDog.style.opacity = 0.6;
        nerdDog.style.opacity = 0.6;
        shyDog.style.opacity = 0.6;
        sleepyDog.style.opacity = 0.6;
    } else {
        checkbox5.src = 'images/unchecked.png';
        checkbox5.style.backgroundColor = "#f4f4f4";
        button6.style.backgroundColor = "#f4f4f4";
        container6.style.backgroundColor = "#f4f4f4";
        blepDog.style.opacity = 1;
        happyDog.style.opacity = 1;
        sleepingDog.style.opacity = 1;
        dopeyDog.style.opacity = 1;
        burgerDog.style.opacity = 1;
        nerdDog.style.opacity = 1;
        shyDog.style.opacity = 1;
        sleepyDog.style.opacity = 1;
    }
}

function imageChange() {
    if (checkbox6.src.includes('images/unchecked.png')) {
        checkbox6.addEventListener === "click";
        A = (6);
        console.log(A);
        checkbox6.src = 'images/checked.png';
        checkbox6.style.backgroundColor = "#cfe3ff";
        button7.style.backgroundColor = "#cfe3ff";
        container7.style.backgroundColor = "#cfe3ff";
        blepDog.style.opacity = 0.6;
        happyDog.style.opacity = 0.6;
        sleepingDog.style.opacity = 0.6;
        dopeyDog.style.opacity = 0.6;
        burgerDog.style.opacity = 0.6;
        cartDog.style.opacity = 0.6;
        shyDog.style.opacity = 0.6;
        sleepyDog.style.opacity = 0.6;
    } else {
        checkbox6.src = 'images/unchecked.png';
        checkbox6.style.backgroundColor = "#f4f4f4";
        button7.style.backgroundColor = "#f4f4f4";
        container7.style.backgroundColor = "#f4f4f4";
        blepDog.style.opacity = 1;
        happyDog.style.opacity = 1;
        sleepingDog.style.opacity = 1;
        dopeyDog.style.opacity = 1;
        burgerDog.style.opacity = 1;
        cartDog.style.opacity = 1;
        shyDog.style.opacity = 1;
        sleepyDog.style.opacity = 1;
    }
}

function ImageChange() {
    if (checkbox7.src.includes('images/unchecked.png')) {
        checkbox7.addEventListener === "click";
        A = (7);
        console.log(A);
        checkbox7.src = 'images/checked.png';
        checkbox7.style.backgroundColor = "#cfe3ff";
        button8.style.backgroundColor = "#cfe3ff";
        container8.style.backgroundColor = "#cfe3ff";
        blepDog.style.opacity = 0.6;
        happyDog.style.opacity = 0.6;
        sleepingDog.style.opacity = 0.6;
        dopeyDog.style.opacity = 0.6;
        burgerDog.style.opacity = 0.6;
        cartDog.style.opacity = 0.6;
        nerdDog.style.opacity = 0.6;
        sleepyDog.style.opacity = 0.6;
    } else {
        checkbox7.src = 'images/unchecked.png';
        checkbox7.style.backgroundColor = "#f4f4f4";
        button8.style.backgroundColor = "#f4f4f4";
        container8.style.backgroundColor = "#f4f4f4";
        blepDog.style.opacity = 1;
        happyDog.style.opacity = 1;
        sleepingDog.style.opacity = 1;
        dopeyDog.style.opacity = 1;
        burgerDog.style.opacity = 1;
        cartDog.style.opacity = 1;
        nerdDog.style.opacity = 1;
        sleepyDog.style.opacity = 1;
    }
}
function Changeimage() {
    if (checkbox8.src.includes('images/unchecked.png')) {
        checkbox8.addEventListener === "click";
        A = (8);
        console.log(A);
        checkbox8.src = 'images/checked.png';
        checkbox8.style.backgroundColor = "#cfe3ff";
        button9.style.backgroundColor = "#cfe3ff";
        container9.style.backgroundColor = "#cfe3ff";
        blepDog.style.opacity = 0.6;
        happyDog.style.opacity = 0.6;
        sleepingDog.style.opacity = 0.6;
        dopeyDog.style.opacity = 0.6;
        burgerDog.style.opacity = 0.6;
        cartDog.style.opacity = 0.6;
        nerdDog.style.opacity = 0.6;
        shyDog.style.opacity = 0.6;
    } else {
        checkbox8.src = 'images/unchecked.png';
        checkbox8.style.backgroundColor = "#f4f4f4";
        button9.style.backgroundColor = "#f4f4f4";
        container9.style.backgroundColor = "#f4f4f4";
        blepDog.style.opacity = 1;
        happyDog.style.opacity = 1;
        sleepingDog.style.opacity = 1;
        dopeyDog.style.opacity = 1;
        burgerDog.style.opacity = 1;
        cartDog.style.opacity = 1;
        nerdDog.style.opacity = 1;
        shyDog.style.opacity = 1;
    }
}

function ChangingImage() {
    if (checkbox9.src.includes('images/unchecked.png')) {
        checkbox9.addEventListener === "click";
        B = (0);
        //result.push(0);
        console.log(B);
        checkbox9.src = 'images/checked.png';
        checkbox9.style.backgroundColor = "#cfe3ff";
        button10.style.backgroundColor = "#cfe3ff";
        container10.style.backgroundColor = "#cfe3ff";
        happyBed.style.opacity = 0.6;
        sleepingBed.style.opacity = 0.6;
        dopeyBed.style.opacity = 0.6;
        burgerBed.style.opacity = 0.6;
        cartBed.style.opacity = 0.6;
        nerdBed.style.opacity = 0.6;
        shyBed.style.opacity = 0.6;
        sleepyBed.style.opacity = 0.6;
    } else {
        checkbox9.src = 'images/unchecked.png';
        checkbox9.addEventListener === "click";
        //result.splice(1, 1);
        //console.log(B);
        checkbox9.style.backgroundColor = "#f4f4f4";
        button10.style.backgroundColor = "#f4f4f4";
        container10.style.backgroundColor = "#f4f4f4";
        happyBed.style.opacity = 1;
        sleepingBed.style.opacity = 1;
        dopeyBed.style.opacity = 1;
        burgerBed.style.opacity = 1;
        cartBed.style.opacity = 1;
        nerdBed.style.opacity = 1;
        shyBed.style.opacity = 1;
        sleepyBed.style.opacity = 1;
    }
}

function ChangingImage2() {
    if (checkbox10.src.includes('images/unchecked.png')) {
        checkbox10.addEventListener === "click";
        B = (1);
        console.log(B);
        checkbox10.src = 'images/checked.png';
        checkbox10.style.backgroundColor = "#cfe3ff";
        button11.style.backgroundColor = "#cfe3ff";
        container11.style.backgroundColor = "#cfe3ff";
        blepBed.style.opacity = 0.6;
        sleepingBed.style.opacity = 0.6;
        dopeyBed.style.opacity = 0.6;
        burgerBed.style.opacity = 0.6;
        cartBed.style.opacity = 0.6;
        nerdBed.style.opacity = 0.6;
        shyBed.style.opacity = 0.6;
        sleepyBed.style.opacity = 0.6;
    } else {
        checkbox10.src = 'images/unchecked.png';
        checkbox10.addEventListener === "click";
        //result.splice(1, 1);
        //console.log(result);
        checkbox10.style.backgroundColor = "#f4f4f4";
        button11.style.backgroundColor = "#f4f4f4";
        container11.style.backgroundColor = "#f4f4f4";
        blepBed.style.opacity = 1;
        sleepingBed.style.opacity = 1;
        dopeyBed.style.opacity = 1;
        burgerBed.style.opacity = 1;
        cartBed.style.opacity = 1;
        nerdBed.style.opacity = 1;
        shyBed.style.opacity = 1;
        sleepyBed.style.opacity = 1;
    }
}
function ChangingImage3() {
    if (checkbox11.src.includes('images/unchecked.png')) {
        checkbox11.addEventListener === "click";
        B = (2);
        console.log(B);
        checkbox11.src = 'images/checked.png';
        checkbox11.style.backgroundColor = "#cfe3ff";
        button12.style.backgroundColor = "#cfe3ff";
        container12.style.backgroundColor = "#cfe3ff";
        blepBed.style.opacity = 0.6;
        happyBed.style.opacity = 0.6;
        dopeyBed.style.opacity = 0.6;
        burgerBed.style.opacity = 0.6;
        cartBed.style.opacity = 0.6;
        nerdBed.style.opacity = 0.6;
        shyBed.style.opacity = 0.6;
        sleepyBed.style.opacity = 0.6;
    } else {
        checkbox11.src = 'images/unchecked.png';
        checkbox11.addEventListener === "click";
        //result.splice(1, 1);
        //console.log(result);
        checkbox11.style.backgroundColor = "#f4f4f4";
        button12.style.backgroundColor = "#f4f4f4";
        container12.style.backgroundColor = "#f4f4f4";
        blepBed.style.opacity = 1;
        happyBed.style.opacity = 1;
        dopeyBed.style.opacity = 1;
        burgerBed.style.opacity = 1;
        cartBed.style.opacity = 1;
        nerdBed.style.opacity = 1;
        shyBed.style.opacity = 1;
        sleepyBed.style.opacity = 1;
    }
} 
function ChangingImage4() {
    if (checkbox12.src.includes('images/unchecked.png')) {
        checkbox12.addEventListener === "click";
        B = (3);
        console.log(B);
        checkbox12.src = 'images/checked.png';
        checkbox12.style.backgroundColor = "#cfe3ff";
        button13.style.backgroundColor = "#cfe3ff";
        container13.style.backgroundColor = "#cfe3ff";
        blepBed.style.opacity = 0.6;
        happyBed.style.opacity = 0.6;
        sleepingBed.style.opacity = 0.6;
        burgerBed.style.opacity = 0.6;
        cartBed.style.opacity = 0.6;
        nerdBed.style.opacity = 0.6;
        shyBed.style.opacity = 0.6;
        sleepyBed.style.opacity = 0.6;
    } else {
        checkbox12.src = 'images/unchecked.png';
        checkbox12.addEventListener === "click";
        result.splice(1, 1);
        console.log(result);
        checkbox12.style.backgroundColor = "#f4f4f4";
        button13.style.backgroundColor = "#f4f4f4";
        container13.style.backgroundColor = "#f4f4f4";
        blepBed.style.opacity = 1;
        happyBed.style.opacity = 1;
        sleepingBed.style.opacity = 1;
        burgerBed.style.opacity = 1;
        cartBed.style.opacity = 1;
        nerdBed.style.opacity = 1;
        shyBed.style.opacity = 1;
        sleepyBed.style.opacity = 1;
    }
}

function ChangingImage5() {
    if (checkbox13.src.includes('images/unchecked.png')) {
        checkbox13.addEventListener === "click";
        B = (4);
        //result.push(0);
        console.log(B);
        checkbox13.src = 'images/checked.png';
        checkbox13.style.backgroundColor = "#cfe3ff";
        button14.style.backgroundColor = "#cfe3ff";
        container14.style.backgroundColor = "#cfe3ff";
        blepBed.style.opacity = 0.6;
        happyBed.style.opacity = 0.6;
        sleepingBed.style.opacity = 0.6;
        dopeyBed.style.opacity = 0.6;
        cartBed.style.opacity = 0.6;
        nerdBed.style.opacity = 0.6;
        shyBed.style.opacity = 0.6;
        sleepyBed.style.opacity = 0.6;
    } else {
        checkbox13.src = 'images/unchecked.png';
        checkbox13.addEventListener === "click";
        //result.splice(1, 1);
        //console.log(result);
        checkbox13.style.backgroundColor = "#f4f4f4";
        button14.style.backgroundColor = "#f4f4f4";
        container14.style.backgroundColor = "#f4f4f4";
        blepBed.style.opacity = 1;
        happyBed.style.opacity = 1;
        sleepingBed.style.opacity = 1;
        dopeyBed.style.opacity = 1;
        cartBed.style.opacity = 1;
        nerdBed.style.opacity = 1;
        shyBed.style.opacity = 1;
        sleepyBed.style.opacity = 1;
    }
}

function ChangingImage6() {
    if (checkbox14.src.includes('images/unchecked.png')) {
        checkbox14.addEventListener === "click";
        B = (5);
        //result.push(0);
        console.log(B);
        checkbox14.src = 'images/checked.png';
        checkbox14.style.backgroundColor = "#cfe3ff";
        button15.style.backgroundColor = "#cfe3ff";
        container15.style.backgroundColor = "#cfe3ff";
        blepBed.style.opacity = 0.6;
        happyBed.style.opacity = 0.6;
        sleepingBed.style.opacity = 0.6;
        dopeyBed.style.opacity = 0.6;
        burgerBed.style.opacity = 0.6;
        nerdBed.style.opacity = 0.6;
        shyBed.style.opacity = 0.6;
        sleepyBed.style.opacity = 0.6;
    } else {
        checkbox14.src = 'images/unchecked.png';
        checkbox14.addEventListener === "click";
        //result.splice(1, 1);
        //console.log(result);
        checkbox14.style.backgroundColor = "#f4f4f4";
        button15.style.backgroundColor = "#f4f4f4";
        container15.style.backgroundColor = "#f4f4f4";
        blepBed.style.opacity = 1;
        happyBed.style.opacity = 1;
        sleepingBed.style.opacity = 1;
        dopeyBed.style.opacity = 1;
        burgerBed.style.opacity = 1;
        nerdBed.style.opacity = 1;
        shyBed.style.opacity = 1;
        sleepyBed.style.opacity = 1;
    }
}

function ChangingImage7() {
    if (checkbox15.src.includes('images/unchecked.png')) {
        checkbox15.addEventListener === "click";
        B = (6);
        //result.push(0);
        console.log(B);
        checkbox15.src = 'images/checked.png';
        checkbox15.style.backgroundColor = "#cfe3ff";
        button16.style.backgroundColor = "#cfe3ff";
        container16.style.backgroundColor = "#cfe3ff";
        blepBed.style.opacity = 0.6;
        happyBed.style.opacity = 0.6;
        sleepingBed.style.opacity = 0.6;
        dopeyBed.style.opacity = 0.6;
        burgerBed.style.opacity = 0.6;
        cartBed.style.opacity = 0.6;
        shyBed.style.opacity = 0.6;
        sleepyBed.style.opacity = 0.6;
    } else {
        checkbox15.src = 'images/unchecked.png';
        checkbox15.addEventListener === "click";
        //result.splice(1, 1);
        //console.log(result);
        checkbox15.style.backgroundColor = "#f4f4f4";
        button16.style.backgroundColor = "#f4f4f4";
        container16.style.backgroundColor = "#f4f4f4";
        blepBed.style.opacity = 1;
        happyBed.style.opacity = 1;
        sleepingBed.style.opacity = 1;
        dopeyBed.style.opacity = 1;
        burgerBed.style.opacity = 1;
        cartBed.style.opacity = 1;
        shyBed.style.opacity = 1;
        sleepyBed.style.opacity = 1;
    }
}

function ChangingImage8() {
    if (checkbox16.src.includes('images/unchecked.png')) {
        checkbox16.addEventListener === "click";
        B = (7);
        //result.push(0);
        console.log(B);
        checkbox16.src = 'images/checked.png';
        checkbox16.style.backgroundColor = "#cfe3ff";
        button17.style.backgroundColor = "#cfe3ff";
        container17.style.backgroundColor = "#cfe3ff";
        blepBed.style.opacity = 0.6;
        happyBed.style.opacity = 0.6;
        sleepingBed.style.opacity = 0.6;
        dopeyBed.style.opacity = 0.6;
        burgerBed.style.opacity = 0.6;
        cartBed.style.opacity = 0.6;
        nerdBed.style.opacity = 0.6;
        sleepyBed.style.opacity = 0.6;
    } else {
        checkbox16.src = 'images/unchecked.png';
        checkbox16.addEventListener === "click";
        //result.splice(1, 1);
        //console.log(result);
        checkbox16.style.backgroundColor = "#f4f4f4";
        button17.style.backgroundColor = "#f4f4f4";
        container17.style.backgroundColor = "#f4f4f4";
        blepBed.style.opacity = 1;
        happyBed.style.opacity = 1;
        sleepingBed.style.opacity = 1;
        dopeyBed.style.opacity = 1;
        burgerBed.style.opacity = 1;
        cartBed.style.opacity = 1;
        nerdBed.style.opacity = 1;
        sleepyBed.style.opacity = 1;
    }
}
function ChangingImage9() {
    if (checkbox17.src.includes('images/unchecked.png')) {
        checkbox17.addEventListener === "click";
        B = (8);
        //result.push(0);
        console.log(B);
        checkbox17.src = 'images/checked.png';
        checkbox17.style.backgroundColor = "#cfe3ff";
        button18.style.backgroundColor = "#cfe3ff";
        container18.style.backgroundColor = "#cfe3ff";
        blepBed.style.opacity = 0.6;
        happyBed.style.opacity = 0.6;
        sleepingBed.style.opacity = 0.6;
        dopeyBed.style.opacity = 0.6;
        burgerBed.style.opacity = 0.6;
        cartBed.style.opacity = 0.6;
        nerdBed.style.opacity = 0.6;
        shyBed.style.opacity = 0.6;
    } else {
        checkbox17.src = 'images/unchecked.png';
        checkbox17.addEventListener === "click";
        //result.splice(1, 1);
        //console.log(result);
        checkbox17.style.backgroundColor = "#f4f4f4";
        button18.style.backgroundColor = "#f4f4f4";
        container18.style.backgroundColor = "#f4f4f4";
        blepBed.style.opacity = 1;
        happyBed.style.opacity = 1;
        sleepingBed.style.opacity = 1;
        dopeyBed.style.opacity = 1;
        burgerBed.style.opacity = 1;
        cartBed.style.opacity = 1;
        nerdBed.style.opacity = 1;
        shyBed.style.opacity = 1;
    }
}
function ChangingImage10() {
    if (checkbox18.src.includes('images/unchecked.png')) {
        checkbox18.addEventListener === "click";
        C = [0];
        //result.push(0);
        console.log(C);
        checkbox18.src = 'images/checked.png';
        checkbox18.style.backgroundColor = "#cfe3ff";
        button19.style.backgroundColor = "#cfe3ff";
        container19.style.backgroundColor = "#cfe3ff";
        sleepyToy.style.opacity = 0.6;
        happyToy.style.opacity = 0.6;
        sleepingToy.style.opacity = 0.6;
        dopeyToy.style.opacity = 0.6;
        burgerToy.style.opacity = 0.6;
        cartToy.style.opacity = 0.6;
        nerdToy.style.opacity = 0.6;
        shyToy.style.opacity = 0.6;
    } else {
        checkbox18.src = 'images/unchecked.png';
        checkbox18.addEventListener === "click";
        //result.splice(2, 1);
        //console.log(result);
        checkbox18.style.backgroundColor = "#f4f4f4";
        button19.style.backgroundColor = "#f4f4f4";
        container19.style.backgroundColor = "#f4f4f4";
        sleepyToy.style.opacity = 1;
        happyToy.style.opacity = 1;
        sleepingToy.style.opacity = 1;
        dopeyToy.style.opacity = 1;
        burgerToy.style.opacity = 1;
        cartToy.style.opacity = 1;
        nerdToy.style.opacity = 1;
        shyToy.style.opacity = 1;
    }
}

function ChangingImage11() {
    if (checkbox19.src.includes('images/unchecked.png')) {
        checkbox19.addEventListener === "click";
        C = (1);
        //result.push(0);
        console.log(C);
        checkbox19.src = 'images/checked.png';
        checkbox19.style.backgroundColor = "#cfe3ff";
        button20.style.backgroundColor = "#cfe3ff";
        container20.style.backgroundColor = "#cfe3ff";
        sleepyToy.style.opacity = 0.6;
        blepToy.style.opacity = 0.6;
        sleepingToy.style.opacity = 0.6;
        dopeyToy.style.opacity = 0.6;
        burgerToy.style.opacity = 0.6;
        cartToy.style.opacity = 0.6;
        nerdToy.style.opacity = 0.6;
        shyToy.style.opacity = 0.6;
    } else {
        checkbox19.src = 'images/unchecked.png';
        checkbox19.addEventListener === "click";
        //result.splice(2, 1);
        //console.log(result);
        checkbox19.style.backgroundColor = "#f4f4f4";
        button20.style.backgroundColor = "#f4f4f4";
        container20.style.backgroundColor = "#f4f4f4";
        sleepyToy.style.opacity = 1;
        blepToy.style.opacity = 1;
        sleepingToy.style.opacity = 1;
        dopeyToy.style.opacity = 1;
        burgerToy.style.opacity = 1;
        cartToy.style.opacity = 1;
        nerdToy.style.opacity = 1;
        shyToy.style.opacity = 1;
    }
}
function ChangingImage12() {
    if (checkbox20.src.includes('images/unchecked.png')) {
        checkbox20.addEventListener === "click";
        C = (2);
        //result.push(0);
        console.log(C);
        checkbox20.src = 'images/checked.png';
        checkbox20.style.backgroundColor = "#cfe3ff";
        button21.style.backgroundColor = "#cfe3ff";
        container21.style.backgroundColor = "#cfe3ff";
        sleepyToy.style.opacity = 0.6;
        blepToy.style.opacity = 0.6;
        happyToy.style.opacity = 0.6;
        dopeyToy.style.opacity = 0.6;
        burgerToy.style.opacity = 0.6;
        cartToy.style.opacity = 0.6;
        nerdToy.style.opacity = 0.6;
        shyToy.style.opacity = 0.6;
    } else {
        checkbox20.src = 'images/unchecked.png';
        checkbox20.addEventListener === "click";
        //result.splice(2, 1);
        //console.log(result);
        checkbox20.style.backgroundColor = "#f4f4f4";
        button21.style.backgroundColor = "#f4f4f4";
        container21.style.backgroundColor = "#f4f4f4";
        sleepyToy.style.opacity = 1;
        blepToy.style.opacity = 1;
        happyToy.style.opacity = 1;
        dopeyToy.style.opacity = 1;
        burgerToy.style.opacity = 1;
        cartToy.style.opacity = 1;
        nerdToy.style.opacity = 1;
        shyToy.style.opacity = 1;
    }
}
function ChangingImage13() {
    if (checkbox21.src.includes('images/unchecked.png')) {
        checkbox21.addEventListener === "click";
        C = (3);
        //result.push(0);
        console.log(C);
        checkbox21.src = 'images/checked.png';
        checkbox21.style.backgroundColor = "#cfe3ff";
        button22.style.backgroundColor = "#cfe3ff";
        container22.style.backgroundColor = "#cfe3ff";
        sleepyToy.style.opacity = 0.6;
        blepToy.style.opacity = 0.6;
        happyToy.style.opacity = 0.6;
        sleepingToy.style.opacity = 0.6;
        burgerToy.style.opacity = 0.6;
        cartToy.style.opacity = 0.6;
        nerdToy.style.opacity = 0.6;
        shyToy.style.opacity = 0.6;
    } else {
        checkbox21.src = 'images/unchecked.png';
        checkbox21.addEventListener === "click";
        //result.splice(2, 1);
        //console.log(result);
        checkbox21.style.backgroundColor = "#f4f4f4";
        button22.style.backgroundColor = "#f4f4f4";
        container22.style.backgroundColor = "#f4f4f4";
        sleepyToy.style.opacity = 1;
        blepToy.style.opacity = 1;
        happyToy.style.opacity = 1;
        sleepingToy.style.opacity = 1;
        burgerToy.style.opacity = 1;
        cartToy.style.opacity = 1;
        nerdToy.style.opacity = 1;
        shyToy.style.opacity = 1;
    }
}
function ChangingImage14() {
    if (checkbox22.src.includes('images/unchecked.png')) {
        checkbox22.addEventListener === "click";
        C = (4);
        //result.push(0);
        console.log(C);
        checkbox22.src = 'images/checked.png';
        checkbox22.style.backgroundColor = "#cfe3ff";
        button23.style.backgroundColor = "#cfe3ff";
        container23.style.backgroundColor = "#cfe3ff";
        sleepyToy.style.opacity = 0.6;
        blepToy.style.opacity = 0.6;
        happyToy.style.opacity = 0.6;
        sleepingToy.style.opacity = 0.6;
        dopeyToy.style.opacity = 0.6;
        cartToy.style.opacity = 0.6;
        nerdToy.style.opacity = 0.6;
        shyToy.style.opacity = 0.6;
    } else {
        checkbox22.src = 'images/unchecked.png';
        checkbox22.addEventListener === "click";
        //result.splice(2, 1);
        //console.log(result);
        checkbox22.style.backgroundColor = "#f4f4f4";
        button23.style.backgroundColor = "#f4f4f4";
        container23.style.backgroundColor = "#f4f4f4";
        sleepyToy.style.opacity = 1;
        blepToy.style.opacity = 1;
        happyToy.style.opacity = 1;
        sleepingToy.style.opacity = 1;
        dopeyToy.style.opacity = 1;
        cartToy.style.opacity = 1;
        nerdToy.style.opacity = 1;
        shyToy.style.opacity = 1;
    }
}

function ChangingImage15() {
    if (checkbox23.src.includes('images/unchecked.png')) {
        checkbox23.addEventListener === "click";
        C = (5);
        //result.push(0);
        console.log(C);
        checkbox23.src = 'images/checked.png';
        checkbox23.style.backgroundColor = "#cfe3ff";
        button24.style.backgroundColor = "#cfe3ff";
        container24.style.backgroundColor = "#cfe3ff";
        sleepyToy.style.opacity = 0.6;
        blepToy.style.opacity = 0.6;
        happyToy.style.opacity = 0.6;
        sleepingToy.style.opacity = 0.6;
        dopeyToy.style.opacity = 0.6;
        burgerToy.style.opacity = 0.6;
        nerdToy.style.opacity = 0.6;
        shyToy.style.opacity = 0.6;
    } else {
        checkbox23.src = 'images/unchecked.png';
        checkbox23.addEventListener === "click";
        //result.splice(2, 1);
        //console.log(result);
        checkbox23.style.backgroundColor = "#f4f4f4";
        button24.style.backgroundColor = "#f4f4f4";
        container24.style.backgroundColor = "#f4f4f4";
        sleepyToy.style.opacity = 1;
        blepToy.style.opacity = 1;
        happyToy.style.opacity = 1;
        sleepingToy.style.opacity = 1;
        dopeyToy.style.opacity = 1;
        burgerToy.style.opacity = 1;
        nerdToy.style.opacity = 1;
        shyToy.style.opacity = 1;
    }
}

function ChangingImage16() {
    if (checkbox24.src.includes('images/unchecked.png')) {
        checkbox24.addEventListener === "click";
        C = (6);
        //result.push(0);
        console.log(C);
        checkbox24.src = 'images/checked.png';
        checkbox24.style.backgroundColor = "#cfe3ff";
        button25.style.backgroundColor = "#cfe3ff";
        container25.style.backgroundColor = "#cfe3ff";
        sleepyToy.style.opacity = 0.6;
        blepToy.style.opacity = 0.6;
        happyToy.style.opacity = 0.6;
        sleepingToy.style.opacity = 0.6;
        dopeyToy.style.opacity = 0.6;
        burgerToy.style.opacity = 0.6;
        cartToy.style.opacity = 0.6;
        shyToy.style.opacity = 0.6;
    } else {
        checkbox24.src = 'images/unchecked.png';
        checkbox24.addEventListener === "click";
        //result.splice(2, 1);
        //console.log(result);
        checkbox24.style.backgroundColor = "#f4f4f4";
        button25.style.backgroundColor = "#f4f4f4";
        container25.style.backgroundColor = "#f4f4f4";
        sleepyToy.style.opacity = 1;
        blepToy.style.opacity = 1;
        happyToy.style.opacity = 1;
        sleepingToy.style.opacity = 1;
        dopeyToy.style.opacity = 1;
        burgerToy.style.opacity = 1;
        cartToy.style.opacity = 1;
        shyToy.style.opacity = 1;
    }
}

function ChangingImage17() {
    if (checkbox25.src.includes('images/unchecked.png')) {
        checkbox25.addEventListener === "click";
        C = (7);
        //result.push(0);
        console.log(C);
        checkbox25.src = 'images/checked.png';
        checkbox25.style.backgroundColor = "#cfe3ff";
        button26.style.backgroundColor = "#cfe3ff";
        container26.style.backgroundColor = "#cfe3ff";
        sleepyToy.style.opacity = 0.6;
        blepToy.style.opacity = 0.6;
        happyToy.style.opacity = 0.6;
        sleepingToy.style.opacity = 0.6;
        dopeyToy.style.opacity = 0.6;
        burgerToy.style.opacity = 0.6;
        cartToy.style.opacity = 0.6;
        nerdToy.style.opacity = 0.6;
    } else {
        checkbox25.src = 'images/unchecked.png';
        checkbox25.addEventListener === "click";
        //result.splice(2, 1);
        //console.log(result);
        checkbox25.style.backgroundColor = "#f4f4f4";
        button26.style.backgroundColor = "#f4f4f4";
        container26.style.backgroundColor = "#f4f4f4";
        sleepyToy.style.opacity = 1;
        blepToy.style.opacity = 1;
        happyToy.style.opacity = 1;
        sleepingToy.style.opacity = 1;
        dopeyToy.style.opacity = 1;
        burgerToy.style.opacity = 1;
        cartToy.style.opacity = 1;
        nerdToy.style.opacity = 1;
    }
}

function ChangingImage18() {
    if (checkbox26.src.includes('images/unchecked.png')) {
        checkbox26.addEventListener === "click";
        C = (8);
        //result.push(0);
        console.log(C);
        checkbox26.src = 'images/checked.png';
        checkbox26.style.backgroundColor = "#cfe3ff";
        button27.style.backgroundColor = "#cfe3ff";
        container27.style.backgroundColor = "#cfe3ff";
        shyToy.style.opacity = 0.6;
        blepToy.style.opacity = 0.6;
        happyToy.style.opacity = 0.6;
        sleepingToy.style.opacity = 0.6;
        dopeyToy.style.opacity = 0.6;
        burgerToy.style.opacity = 0.6;
        cartToy.style.opacity = 0.6;
        nerdToy.style.opacity = 0.6;
    } else {
        checkbox26.src = 'images/unchecked.png';
        checkbox26.addEventListener === "click";
        //result.splice(2, 1);
        //console.log(result);
        checkbox26.style.backgroundColor = "#f4f4f4";
        button27.style.backgroundColor = "#f4f4f4";
        container27.style.backgroundColor = "#f4f4f4";
        shyToy.style.opacity = 1;
        blepToy.style.opacity = 1;
        happyToy.style.opacity = 1;
        sleepingToy.style.opacity = 1;
        dopeyToy.style.opacity = 1;
        burgerToy.style.opacity = 1;
        cartToy.style.opacity = 1;
        nerdToy.style.opacity = 1;
    }
}

function stopUser() {
    button.style.pointerEvents="none";
    button2.style.pointerEvents="none";
    button3.style.pointerEvents="none";
    button4.style.pointerEvents="none";
    button4.style.pointerEvents="none";
    button4.style.pointerEvents="none";
    button5.style.pointerEvents="none";
    button6.style.pointerEvents="none";
    button7.style.pointerEvents="none";
    button8.style.pointerEvents="none";
    button9.style.pointerEvents="none";
    button10.style.pointerEvents="none";
    button11.style.pointerEvents="none";
    button12.style.pointerEvents="none";
    button13.style.pointerEvents="none";
    button14.style.pointerEvents="none";
    button15.style.pointerEvents="none";
    button16.style.pointerEvents="none";
    button17.style.pointerEvents="none";
    button18.style.pointerEvents="none";
    button19.style.pointerEvents="none";
    button20.style.pointerEvents="none";
    button21.style.pointerEvents="none";
    button22.style.pointerEvents="none";
    button23.style.pointerEvents="none";
    button24.style.pointerEvents="none";
    button25.style.pointerEvents="none";
    button26.style.pointerEvents="none";
    button27.style.pointerEvents="none";

}

function addResult() {
    sum = A + B + C; 
    console.log(sum);
    result = Math.floor(sum / 3);
    console.log(result);
    if (result === 0){
        const blepResult = document.getElementById("blep");
        const result = document.getElementById("reset");
        resultDisplay.style.visibility= "visible";
        result.style.visibility="visible";
        blepResult.innerHTML = "You got: " + RESULTS_MAP.blep.title;
        blepResult.style.visibility="visible";
        const blepResult2 = document.getElementById("blep2");
        blepResult2.innerHTML = RESULTS_MAP.blep.contents;
        blepResult2.style.visibility="visible";
    }
    else if (result === 1){
        const blepResult = document.getElementById("blep");
        const result = document.getElementById("reset");
        resultDisplay.style.visibility="visible";
        result.style.visibility="visible";
        blepResult.innerHTML = "You got: " + RESULTS_MAP.burger.title;
        blepResult.style.visibility="visible";
        const blepResult2 = document.getElementById("blep2");
        blepResult2.innerHTML = RESULTS_MAP.burger.contents;
        blepResult2.style.visibility="visible";
    }
    else if (result === 2){
        const blepResult = document.getElementById("blep");
        const result = document.getElementById("reset");
        resultDisplay.style.visibility= "visible";
        result.style.visibility="visible";
        blepResult.innerHTML = "You got: " + RESULTS_MAP.cart.title;
        blepResult.style.visibility="visible";
        const blepResult2 = document.getElementById("blep2");
        blepResult2.innerHTML = RESULTS_MAP.cart.contents;
        blepResult2.style.visibility="visible";
    }
    else if (result === 3){
        const blepResult = document.getElementById("blep");
        const result = document.getElementById("reset");
        resultDisplay.style.visibility= "visible";
        result.style.visibility="visible";
        blepResult.innerHTML = "You got: " + RESULTS_MAP.dopey.title;
        blepResult.style.visibility="visible";
        const blepResult2 = document.getElementById("blep2");
        blepResult2.innerHTML = RESULTS_MAP.dopey.contents;
        blepResult2.style.visibility="visible";
    }
    else if (result === 4){
        const blepResult = document.getElementById("blep");
        const result = document.getElementById("reset");
        resultDisplay.style.visibility= "visible";
        result.style.visibility="visible";
        blepResult.innerHTML = "You got: " + RESULTS_MAP.happy.title;
        blepResult.style.visibility="visible";
        const blepResult2 = document.getElementById("blep2");
        blepResult2.innerHTML = RESULTS_MAP.happy.contents;
        blepResult2.style.visibility="visible";
    }
    else if (result === 5){
        const blepResult = document.getElementById("blep");
        const result = document.getElementById("reset");
        resultDisplay.style.visibility= "visible";
        result.style.visibility="visible";
        blepResult.innerHTML = "You got: " + RESULTS_MAP.nerd.title;
        blepResult.style.visibility="visible";
        const blepResult2 = document.getElementById("blep2");
        blepResult2.innerHTML = RESULTS_MAP.nerd.contents;
        blepResult2.style.visibility="visible";
    }
    else if (result === 6){
        const blepResult = document.getElementById("blep");
        const result = document.getElementById("reset");
        resultDisplay.style.visibility= "visible";
        result.style.visibility="visible";
        blepResult.innerHTML = "You got: " + RESULTS_MAP.shy.title;
        blepResult.style.visibility="visible";
        const blepResult2 = document.getElementById("blep2");
        blepResult2.innerHTML = RESULTS_MAP.shy.contents;
        blepResult2.style.visibility="visible";
    }
    else if (result === 7){
        const blepResult = document.getElementById("blep");
        const result = document.getElementById("reset");
        resultDisplay.style.visibility= "visible";
        result.style.visibility="visible";
        blepResult.innerHTML = "You got: " + RESULTS_MAP.sleeping.title;
        blepResult.style.visibility="visible";
        const blepResult2 = document.getElementById("blep2");
        blepResult2.innerHTML = RESULTS_MAP.sleeping.contents;
        blepResult2.style.visibility="visible";
    }
    else if (result === 8){
        const blepResult = document.getElementById("blep");
        const result = document.getElementById("reset");
        resultDisplay.style.visibility= "visible";
        result.style.visibility="visible";
        blepResult.innerHTML = "You got: " + RESULTS_MAP.sleepy.title;
        blepResult.style.visibility="visible";
        const blepResult2 = document.getElementById("blep2");
        blepResult2.innerHTML = RESULTS_MAP.sleepy.contents; 
        blepResult2.style.visibility="visible";
    }
}
    function restartQuiz() {
    //window.location.reload();
            const blepResult = document.getElementById("blep");
        const result = document.getElementById("reset");
        const blepResult2 = document.getElementById("blep2");
        result.style.visibility="hidden";
        blepResult.style.visibility="hidden";
        blepResult2.style.visibility="hidden";
        resultDisplay.style.visibility= "hidden";
        
        button.style.pointerEvents="auto";
        button2.style.pointerEvents="auto";
        button3.style.pointerEvents="auto";
        button4.style.pointerEvents="auto";
        button4.style.pointerEvents="auto";
        button4.style.pointerEvents="auto";
        button5.style.pointerEvents="auto";
        button6.style.pointerEvents="auto";
        button7.style.pointerEvents="auto";
        button8.style.pointerEvents="auto";
        button9.style.pointerEvents="auto";
        button10.style.pointerEvents="auto";
        button11.style.pointerEvents="auto";
        button12.style.pointerEvents="auto";
        button13.style.pointerEvents="auto";
        button14.style.pointerEvents="auto";
        button15.style.pointerEvents="auto";
        button16.style.pointerEvents="auto";
        button17.style.pointerEvents="auto";
        button18.style.pointerEvents="auto";
        button19.style.pointerEvents="auto";
        button20.style.pointerEvents="auto";
        button21.style.pointerEvents="auto";
        button22.style.pointerEvents="auto";
        button23.style.pointerEvents="auto";
        button24.style.pointerEvents="auto";
        button25.style.pointerEvents="auto";
        button26.style.pointerEvents="auto";
        button27.style.pointerEvents="auto";
        
        checkbox.style.backgroundColor = "#f4f4f4";
        button.style.backgroundColor = "#f4f4f4";
        container.style.backgroundColor = "#f4f4f4";

        checkbox1.style.backgroundColor = "#f4f4f4";
        button2.style.backgroundColor = "#f4f4f4";
        container2.style.backgroundColor = "#f4f4f4";

        checkbox2.style.backgroundColor = "#f4f4f4";
        button3.style.backgroundColor = "#f4f4f4";
        container3.style.backgroundColor = "#f4f4f4";

        checkbox3.style.backgroundColor = "#f4f4f4";
        button4.style.backgroundColor = "#f4f4f4";
        container4.style.backgroundColor = "#f4f4f4";

        checkbox4.style.backgroundColor = "#f4f4f4";
        button5.style.backgroundColor = "#f4f4f4";
        container5.style.backgroundColor = "#f4f4f4";

        checkbox5.style.backgroundColor = "#f4f4f4";
        button6.style.backgroundColor = "#f4f4f4";
        container6.style.backgroundColor = "#f4f4f4";

        
        checkbox6.style.backgroundColor = "#f4f4f4";
        button7.style.backgroundColor = "#f4f4f4";
        container7.style.backgroundColor = "#f4f4f4";

        checkbox7.style.backgroundColor = "#f4f4f4";
        button8.style.backgroundColor = "#f4f4f4";
        container8.style.backgroundColor = "#f4f4f4";

        checkbox9.style.backgroundColor = "#f4f4f4";
        button10.style.backgroundColor = "#f4f4f4";
        container10.style.backgroundColor = "#f4f4f4";
                
        checkbox10.style.backgroundColor = "#f4f4f4";
        button11.style.backgroundColor = "#f4f4f4";
        container11.style.backgroundColor = "#f4f4f4";

        checkbox11.style.backgroundColor = "#f4f4f4";
        button12.style.backgroundColor = "#f4f4f4";
        container12.style.backgroundColor = "#f4f4f4";

        checkbox12.style.backgroundColor = "#f4f4f4";
        button13.style.backgroundColor = "#f4f4f4";
        container13.style.backgroundColor = "#f4f4f4";

        checkbox13.style.backgroundColor = "#f4f4f4";
        button14.style.backgroundColor = "#f4f4f4";
        container14.style.backgroundColor = "#f4f4f4";

        checkbox14.style.backgroundColor = "#f4f4f4";
        button15.style.backgroundColor = "#f4f4f4";
        container15.style.backgroundColor = "#f4f4f4";

        
        checkbox15.style.backgroundColor = "#f4f4f4";
        button16.style.backgroundColor = "#f4f4f4";
        container16.style.backgroundColor = "#f4f4f4";

        checkbox16.style.backgroundColor = "#f4f4f4";
        button17.style.backgroundColor = "#f4f4f4";
        container17.style.backgroundColor = "#f4f4f4";
                
        checkbox17.style.backgroundColor = "#f4f4f4";
        button18.style.backgroundColor = "#f4f4f4";
        container18.style.backgroundColor = "#f4f4f4";

        checkbox18.style.backgroundColor = "#f4f4f4";
        button19.style.backgroundColor = "#f4f4f4";
        container19.style.backgroundColor = "#f4f4f4";

        checkbox19.style.backgroundColor = "#f4f4f4";
        button20.style.backgroundColor = "#f4f4f4";
        container20.style.backgroundColor = "#f4f4f4";

        checkbox20.style.backgroundColor = "#f4f4f4";
        button21.style.backgroundColor = "#f4f4f4";
        container21.style.backgroundColor = "#f4f4f4";

        checkbox21.style.backgroundColor = "#f4f4f4";
        button22.style.backgroundColor = "#f4f4f4";
        container22.style.backgroundColor = "#f4f4f4";
        
        checkbox22.style.backgroundColor = "#f4f4f4";
        button23.style.backgroundColor = "#f4f4f4";
        container23.style.backgroundColor = "#f4f4f4";

        
        checkbox23.style.backgroundColor = "#f4f4f4";
        button24.style.backgroundColor = "#f4f4f4";
        container24.style.backgroundColor = "#f4f4f4";

        
        checkbox24.style.backgroundColor = "#f4f4f4";
        button25.style.backgroundColor = "#f4f4f4";
        container25.style.backgroundColor = "#f4f4f4";
        
        checkbox25.style.backgroundColor = "#f4f4f4";
        button26.style.backgroundColor = "#f4f4f4";
        container26.style.backgroundColor = "#f4f4f4";

        
        checkbox26.style.backgroundColor = "#f4f4f4";
        button27.style.backgroundColor = "#f4f4f4";
        container27.style.backgroundColor = "#f4f4f4";

        checkbox.src = 'images/unchecked.png';
        checkbox1.src = 'images/unchecked.png';
        checkbox2.src = 'images/unchecked.png';
        checkbox3.src = 'images/unchecked.png';
        checkbox4.src = 'images/unchecked.png';
        checkbox5.src = 'images/unchecked.png';
        checkbox6.src = 'images/unchecked.png';
        checkbox7.src = 'images/unchecked.png';
        checkbox8.src = 'images/unchecked.png';
        checkbox9.src = 'images/unchecked.png';
        checkbox10.src = 'images/unchecked.png';
        checkbox11.src = 'images/unchecked.png';
        checkbox12.src = 'images/unchecked.png';
        checkbox13.src = 'images/unchecked.png';
        checkbox14.src = 'images/unchecked.png';
        checkbox15.src = 'images/unchecked.png';
        checkbox16.src = 'images/unchecked.png';
        checkbox17.src = 'images/unchecked.png';
        checkbox18.src = 'images/unchecked.png';
        checkbox19.src = 'images/unchecked.png';
        checkbox20.src = 'images/unchecked.png';
        checkbox21.src = 'images/unchecked.png';
        checkbox22.src = 'images/unchecked.png';
        checkbox23.src = 'images/unchecked.png';
        checkbox24.src = 'images/unchecked.png';
        checkbox25.src = 'images/unchecked.png';
        checkbox26.src = 'images/unchecked.png';

        blepDog.style.opacity = 1;
        happyDog.style.opacity = 1;
        sleepingDog.style.opacity = 1;
        dopeyDog.style.opacity = 1;
        burgerDog.style.opacity = 1;
        cartDog.style.opacity = 1;
        nerdDog.style.opacity = 1;
        shyDog.style.opacity = 1;
        sleepyDog.style.opacity = 1;
        blepToy.style.opacity = 1;
        happyToy.style.opacity = 1;
        sleepingToy.style.opacity = 1;
        dopeyToy.style.opacity = 1;
        burgerToy.style.opacity = 1;
        cartToy.style.opacity = 1;
        nerdToy.style.opacity = 1;
        shyToy.style.opacity = 1;
        sleepyToy.style.opacity = 1;
        blepBed.style.opacity = 1;
        happyBed.style.opacity = 1;
        sleepingBed.style.opacity = 1;
        dopeyBed.style.opacity = 1;
        burgerBed.style.opacity = 1;
        cartBed.style.opacity = 1;
        nerdBed.style.opacity = 1;
        shyBed.style.opacity = 1;
        sleepyBed.style.opacity = 1;

        question.scrollIntoView();

}