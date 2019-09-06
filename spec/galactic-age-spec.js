import { AgeCalc } from './../src/galactic-age-calc.js';

describe ("AgeCalc", function() {
  it("should only accept numerical input", function() {
    let example = new AgeCalc("Twenty years");
    expect(example.checkValidity()).toBe(false);
  });

});
