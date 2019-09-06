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

describe ('Age', function() {
  it('should not accept non-numerical input'), function(){
    let exampleAge2 = new Age (33);
    expect (exampleAge2.checkValidity()).toBe(false)
    }
  });

describe ('calcMercuryAge', function(){
  it('should convert inputted Earth age into Mercury age', function() {
    let age = 33;
     expect(calcMercuryAge(age)).toBe(138);
  })
});

describe ('calcVenusAge'), function() {
  it('should convert inputted Earth age into Venus age using simple calculation', function() {
    let age = 33;
    expect (calcVenusAge(age)).tobe(53.22)
  })
};

describe ('calcMarsAge'), function() {
  it('should convert inputted Earth age into Mars age using simple calculation', function() {
    let age = 33;
    expect (calcMarsAge(age)).tobe(17.55)
  })
};

describe ('calcJupiterAge'), function() {
  it('should convert inputted Earth age into Jupiter age using simple calculation', function() {
    let age = 33;
    expect (calcJupiterAge(age)).tobe(2.78)
  })
};
