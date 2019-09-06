import { Age } from './../src/solar-years.js';
import { calcMercuryAge } from './../src/solar-years.js';
import { calcVenusAge } from './../src/solar-years.js';
import { calcMarsAge } from './../src/solar-years.js';
import { calcJupiterAge } from './../src/solar-years.js';


describe ('Age', function() {
  it('should not accept non-numerical input', function() {
    let exampleAge = new Age ("peanut");
    expect (exampleAge.checkValidity()).toBe(false);
  });
});

describe ('Age', function() {
  it('should not accept non-numerical input'), function(){
    let exampleAge2 = new Age (33);
    expect (exampleAge2.checkValidity()).toBe(false)
  });
});

describe ('calcMercuryAge', function(){
  it('should convert inputted Earth age into Mercury age', function() {
    let age = "33";
     expect(calcMercuryAge(age)).toEqual(138);
  });
});

describe ('calcVenusAge'), function() {
  it('should convert inputted Earth age into Venus age using simple calculation', function() {
    let age = "33";
    expect (calcVenusAge(age)).toEqual(53.22)
  });
});

describe ('calcMarsAge'), function() {
  it('should convert inputted Earth age into Mars age using simple calculation', function() {
    let age = "33";
    expect (calcMarsAge(age)).toEqual(17.55)
  });
});

describe ('calcJupiterAge'), function() {
  it('should convert inputted Earth age into Jupiter age using simple calculation', function() {
    let age = "33";
    expect (calcJupiterAge(age)).toEqual(2.78)
  });
});

describe ('expectancy'), function() {
  it('should calculate life expectancy based on which continent is selected from dropdown  menu')
    let exampleExpectancy = africa;
    expect (expectancy(africa).toEqual(62.5)
  });
});

describe ('remainingYears'), function() {
  it('should calcuate remaining years in life based on a the age of user and continental residence')
    let lifeExpectancy = 72.5
    let age = 33
    expect (remainingYears().toEqual)(39.5)
  });
});

describe ('mercuryTimeRemaining'), function() {
  it('should convert timeRemaining from Earth years to Mercury years')
    let timeRemaining = 39.5
    expect (mercuryTimeRemaining(timeRemaining).toEqual)(164.58)
  });
});
