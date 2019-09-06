import { Age } from './../src/solar-years.js';
import { calcMercuryAge } from './../src/solar-years.js';

describe ('Age', function() {
  it('should not accept non-numerical input', function() {
    let exampleAge = new Age ("peanut");
    expect (exampleAge.checkValidity()).toBe(false);
  });
describe ('Age', function() {
  it('should not accept non-numerical input'), function(){
    let exampleAge2 = new Age (33);
    expect (exampleAge2.checkValidity()).toBe(true)
  }
})

describe ('calcMercuryAge'), function(){
  it('should convert inputted Earth age into Mercury age using simple calculation'), function(){
    let earthAge = 33;
    expect(calcMercuryAge(earthAge)).tobe(137.5)
  }
}
