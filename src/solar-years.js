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
  calcMercuryAge(age) {
    const mercuryAge = age / 0.24;
    return mercuryAge;
  };
  calcVenusAge(age) {
    const venusAge = age / 0.62
    return venusAge;
  };
  calcMarsAge(age) {
    const marsAge = age/ 1.88;
    return marsAge;
  };
  calcJupiterAge(age) {
    const jupiterAge = age / 11.86;
    return jupiterAge;
  };
  remainingYears(age) {
    const lifeExpectancy = 80;
    let timeRemaining = (lifeExpectancy - age);
    return timeRemaining;
  };
  remainingMercuryYears(age) {
    const lifeExpectancy = 80;
    let mercuryTimeRemaining = (lifeExpectancy - age) / 0.24;
    return mercuryTimeRemaining;
  };
  remainingVenusYears(age) {
    const lifeExpectancy = 80;
    let venusTimeRemaining = (lifeExpectancy - age) / 0.62;
    return venusTimeRemaining;
  };
  remainingMarsYears(age) {
    const lifeExpectancy = 80;
    let marsTimeRemaining = (lifeExpectancy - age) / 1.88;
    return marsTimeRemaining;
  };
  remainingJupiterYears(age) {
    const lifeExpectancy = 80;
    let jupiterTimeRemaining = (lifeExpectancy - age) / 11.86;
    return jupiterTimeRemaining;
  };
};
