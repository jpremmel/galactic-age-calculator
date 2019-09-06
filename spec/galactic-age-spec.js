import { AgeCalc } from './../src/galactic-age-calc.js';

describe ("AgeCalc", function() {
  it("should only accept numerical input", function() {
    let example = new AgeCalc("Twenty years");
    expect(example.checkValidity()).toBe(false);
  });
  it ("should convert the input age into Mercury age", function() {
    let example = new AgeCalc(20);
    expect(example.calcPlanetAges()[0][1]).toBe(83);
  });
  it ("should convert the input age into Venus age", function() {
    let example = new AgeCalc(20);
    expect(example.calcPlanetAges()[1][1]).toBe(32);
  });
  it ("should convert the input age into Mars age", function() {
    let example = new AgeCalc(20);
    expect(example.calcPlanetAges()[2][1]).toBe(10);
  });
  it ("should convert the input age into Jupiter age", function() {
    let example = new AgeCalc(20);
    expect(example.calcPlanetAges()[3][1]).toBe(1);
  });

});
