export class Age {
  constructor(age) {
    this.age = earthAge;
  }
checkValidity() {
  let age = false;
  let invalidLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  for(let i=0; i< invalidLetters.length; i++) {
    if (this.age.includes(invalidLetters[i])) {
      console.log("Please enter your age using only numbers");
      return false;
      }
    }
  }
};
export function calcMercuryAge() {
  let age = parseInt($('input:text').val());
  let mercuryAge = (age / 0.24);
  return mercuryAge;
}
export function calcVenusAge() {
  let age = parseInt($('input:text').val());
  let mercuryAge = (age / 0.62);
  return venusAge;
}
export function calcMarsAge() {
  let age = parseInt($('input:text').val());
  let mercuryAge = (age / 1.88 );
  return marsAge;
}
export function calcJupiterAge() {
  let age = parseInt($('input:text').val());
  let mercuryAge = (age / 11.86);
  return jupiterAge;
}

$(document).ready(function(){
  $("form#ageContinent").submit(function(event){
    event.preventDefault();

let africa = $("select[value=africa") option:selected").val();
let asia = $("select[value=asia") option:selected").val();
let europe = $("select[value=europe") option:selected").val();
let latinAmerica = $("select[value=latinAmerica") option:selected").val();
let northAmerica = $("select[value=northAmerica") option:selected").val();
let oceania = $("select[value=oceania") option:selected").val();

function expectancy(){
  let lifeExpectancy = 0
  if (africa) {
    lifeExpectancy += 62.5
  } else if (asia) {
    lifeExpectancy += 72.5
  } else if (europe) {
    lifeExpectancy += 78.5
  } else if (latinAmerica) {
    lifeExpectancy += 76
  } else if (northAmerica) {
    lifeExpectancy += 79
  } else {
    lifeExpectancy += 78
  };
}

function remainingYears() {
  let timeRemaining = ("lifeExpectancy" - "age")
};
remainingYears(age);

function mercuryTimeRemaining() {
  timeRemaining/0.24
};
mercuryTimeRemaining(timeremaining);

function venusTimeRemaining() {
  timeRemaining/0.62
};
venusTimeRemaining(timeremaining);

function marsTimeRemaining() {
  timeRemaining/1.88
}
marsTimeReamining(timeremaining);

function jupiterTimeRemaining() {
  timeRemaining/11.86
}
jupiterTimeRemaining(timeremaining);
