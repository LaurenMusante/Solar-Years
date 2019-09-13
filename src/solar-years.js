export class Age {
  constructor(age) {
    this.age = age;
  }
  checkValidity() {
    let age;
    let invalidLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    for(let i=0; i< invalidLetters.length; i++) {
      if (this.age.toString().includes(invalidLetters[i])) {
        return false;
      } else {
        age = true;
      }
    }
    return age;
  }
  calcMercuryAge() {
    const mercuryAge = this.age / 0.24;
    return mercuryAge.toFixed(2);
  };
  calcVenusAge() {
    const venusAge = this.age / 0.62
    return venusAge.toFixed(2);
  };
  calcMarsAge() {
    const marsAge = this.age/ 1.88;
    return marsAge.toFixed(2);
  };
  calcJupiterAge() {
    const jupiterAge = this.age / 11.86;
    return jupiterAge.toFixed(2);
  };
  remainingYears() {
    const lifeExpectancy = 80;
    let timeRemaining = (lifeExpectancy - this.age);
    return timeRemaining.toFixed(2);
  };
  remainingMercuryYears() {
    const lifeExpectancy = 80;
    let mercuryTimeRemaining = (lifeExpectancy - this.age) / 0.24;
    return mercuryTimeRemaining.toFixed(2);
  };
  remainingVenusYears() {
    const lifeExpectancy = 80;
    let venusTimeRemaining = (lifeExpectancy - this.age) / 0.62;
    return venusTimeRemaining.toFixed(2);
  };
  remainingMarsYears() {
    const lifeExpectancy = 80;
    let marsTimeRemaining = (lifeExpectancy - this.age) / 1.88;
    return marsTimeRemaining.toFixed(2);
  };
  remainingJupiterYears() {
    const lifeExpectancy = 80;
    let jupiterTimeRemaining = (lifeExpectancy - this.age) / 11.86;
    return jupiterTimeRemaining.toFixed(2);
  };
};
