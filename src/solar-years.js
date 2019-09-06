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
