import { Age } from './../src/solar-years.js';
import { calcMercuryAge } from './../src/solar-years.js';
import { calcVenusAge } from './../src/solar-years.js';
import { calcMarsAge } from './../src/solar-years.js';
import { calcJupiterAge } from './../src/solar-years.js';


describe ('Age', function(){
  it('should not accept non-numerical input', function() {
    let exampleAge = new Age("peanut");
    expect(exampleAge.checkValidity()).toBe(false);
  });
  it('should not accept non-numerical input', function(){
    let exampleAge2 = new Age(33);
    expect(exampleAge.checkValidity()).toBe(true);
  });
});

describe ('calcMercuryAge', function(){
  it('should convert inputted Earth age into Mercury age', function() {
    let exampleAge3 = new Age(33);
     expect(exampleAge.calcMercuryAge(exampleAge3.age)).toEqual(137.5);
  });
});

describe ('calcVenusAge', function(){
  it('should convert inputted Earth age into Venus age', function() {
    let exampleAge4 = new Age(33);
     expect(exampleAge.calcVenusAge(exampleAge4.age)).toEqual(53.2);
  });
});

describe ('calcMarsAge', function(){
  it('should convert inputted Earth age into Mars age', function() {
    let exampleAge5 = new Age(33);
     expect(exampleAge.calcMarsAge(exampleAge5.age)).toEqual(17.6);
  });
});

describe ('calcJupiterAge', function(){
  it('should convert inputted Earth age into Jupiter age', function() {
    let exampleAge = new Age(33);
     expect(exampleAge6.calcJupiterAge(exampleAge6.age)).toEqual(2.78);
  });
});

describe ('remainingYears'), function() {
  it('should calculate remaining life years based on life expectancy age 80')
    let exampleAge = new Age(33);
    expect (remainingYears(exampleAge).toEqual(47.00);
  });
});

describe ('remainingMercuryYears'), function() {
  it('should calculate remaining life years based on life expectancy age 80 and then convert the difference to Mercury years', function() {
    let exampleAge = new Age(33);
    expect(remainingMercuryYears(exampleAge).toEqual(195.83);
  });
});

describe ('remainingVenusYears'), function() {
  it('should calculate remaining life years based on life expectancy age 80 and then convert the difference to Venus years', function() {
    let exampleAge = new Age(33);
    expect(remainingVenusYears(exampleAge).toEqual(75.80);
  });
});

describe ('remainingMarsYears'), function() {
  it('should calculate remaining life years based on life expectancy age 80 and then convert the difference to Mars years', function() {
    let exampleAge = new Age(33);
    expect(remainingMarsYears(exampleAge).toEqual(25.00);
  });
});

describe ('remainingJupiterYears'), function() {
  it('should calculate remaining life years based on life expectancy age 80 and then convert the difference to Jupiter years', function() {
    let exampleAge = new Age(33);
    expect(remainingJupiterYears(exampleAge).toEqual(3.96);
  });
});
