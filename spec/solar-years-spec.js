import { Age } from './../src/solar-years.js';
// import { calcMercuryAge } from './../src/solar-years.js';
// import { calcVenusAge } from './../src/solar-years.js';
// import { calcMarsAge } from './../src/solar-years.js';
// import { calcJupiterAge } from './../src/solar-years.js';


describe ('Age', function(){
  it('should not accept non-numerical input', function() {
    let exampleAge = new Age("peanut");
    expect(exampleAge.checkValidity()).toBe(false);
  });
  it('should not accept non-numerical input', function(){
    let exampleAge2 = new Age(33);
    expect(exampleAge2.checkValidity()).toBe(true);
  });
});


describe ('calcMercuryAge', function(){
  it('should convert inputted Earth age into Mercury age', function() {
    let exampleAge3 = new Age(33);
     expect(exampleAge3.calcMercuryAge(exampleAge3.age)).toEqual(137.5);
  });
});

describe ('calcVenusAge', function(){
  it('should convert inputted Earth age into Venus age', function() {
    let exampleAge4 = new Age(33);
     expect(exampleAge4.calcVenusAge(exampleAge4.age)).toEqual(53.2);
  });
});

describe ('calcMarsAge', function(){
  it('should convert inputted Earth age into Mars age', function() {
    let exampleAge5 = new Age(33);
     expect(exampleAge5.calcMarsAge(exampleAge5.age)).toEqual(17.6);
  });
});

describe ('calcJupiterAge', function(){
  it('should convert inputted Earth age into Jupiter age', function() {
    let exampleAge6 = new Age(33);
     expect(exampleAge6.calcJupiterAge(exampleAge6.age)).toEqual(137.5);
  });
});

// describe ('expectancy'), function() {
//   it('should calculate life expectancy based on which continent is selected from dropdown  menu')
//     let exampleExpectancy = africa;
//     expect (expectancy(africa).toEqual(62.5)
//   });
// });
//
// describe ('remainingYears'), function() {
//   it('should calcuate remaining years in life based on a the age of user and continental residence')
//     let lifeExpectancy = 72.5
//     let age = 33
//     expect (remainingYears().toEqual)(39.5)
//   });
// });
//
// describe ('mercuryTimeRemaining'), function() {
//   it('should convert timeRemaining from Earth years to Mercury years')
//     let timeRemaining = 39.5
//     expect (mercuryTimeRemaining(timeRemaining).toEqual)(164.58)
//   });
// });
