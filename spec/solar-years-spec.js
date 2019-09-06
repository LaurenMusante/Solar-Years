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
});
