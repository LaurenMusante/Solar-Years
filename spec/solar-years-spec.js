import { Age } from './../src/solar-years.js';

describe ('Age', function(){
  it('should not accept non-numerical input', function() {
    let exampleAge = new Age("peanut");
    expect(exampleAge.checkValidity()).toBe(false);
  });
  it('should not accept non-numerical input', function(){
    let exampleAge = new Age(33);
    expect(exampleAge.checkValidity()).toBe(true);
  });
});

describe ('calcMercuryAge', function(){
  it('should convert inputted Earth age into Mercury age', function() {
    let exampleAge = new Age(33);
     expect(exampleAge.calcMercuryAge()).toEqual("137.50");
  });
});

describe ('calcVenusAge', function(){
  it('should convert inputted Earth age into Venus age', function() {
    let exampleAge = new Age(33);
     expect(exampleAge.calcVenusAge()).toEqual("53.23");
  });
});

describe ('calcMarsAge', function(){
  it('should convert inputted Earth age into Mars age', function() {
    let exampleAge = new Age(33);
     expect(exampleAge.calcMarsAge()).toEqual("17.55");
  });
});

describe ('calcJupiterAge', function(){
  it('should convert inputted Earth age into Jupiter age', function() {
    let exampleAge = new Age(33);
     expect(exampleAge.calcJupiterAge()).toEqual("2.78");
  });
});

describe ('remainingYears', function() {
  it('should calculate remaining life years based on life expectancy age 80', function() {
    let exampleAge = new Age(33);
    expect(exampleAge.remainingYears()).toEqual("47.00");
  });
});

describe ('remainingMercuryYears', function() {
  it('should calculate remaining life years based on life expectancy age 80 and then convert the difference to Mercury years', function() {
    let exampleAge = new Age(33);
    expect(exampleAge.remainingMercuryYears()).toEqual("195.83");
  });
});

describe ('remainingVenusYears', function() {
  it('should calculate remaining life years based on life expectancy age 80 and then convert the difference to Venus years', function() {
    let exampleAge = new Age(33);
    expect(exampleAge.remainingVenusYears()).toEqual("75.81");
  });
});

describe ('remainingMarsYears', function() {
  it('should calculate remaining life years based on life expectancy age 80 and then convert the difference to Mars years', function() {
    let exampleAge = new Age(33);
    expect(exampleAge.remainingMarsYears()).toEqual("25.00");
  });
});

describe ('remainingJupiterYears', function() {
  it('should calculate remaining life years based on life expectancy age 80 and then convert the difference to Jupiter years', function() {
    let exampleAge = new Age(33);
    expect(exampleAge.remainingJupiterYears()).toEqual("3.96");
  });
});
