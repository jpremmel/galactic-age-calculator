import { AgeCalc } from './../src/galactic-age-calc.js';

describe ("AgeCalc", function() {
  let example;
  beforeEach(function() {
    example = new AgeCalc(20);
  });
  it("should only accept numerical input", function() {
    let invalidExample = new AgeCalc("Twenty years");
    expect(invalidExample.checkValidity()).toBe(false);
  });
  it ("should convert the input age into Mercury age", function() {
    expect(example.calcPlanetAges()[0][1]).toBe(83);
  });
  it ("should convert the input age into Venus age", function() {
    expect(example.calcPlanetAges()[1][1]).toBe(32);
  });
  it ("should convert the input age into Mars age", function() {
    expect(example.calcPlanetAges()[2][1]).toBe(10);
  });
  it ("should convert the input age into Jupiter age", function() {
    expect(example.calcPlanetAges()[3][1]).toBe(1);
  });
  it ("should calculate how many Mercury years the person has left", function() {
    expect(example.calcYearsLeft()[0][1]).toBe(295);
  });

});
