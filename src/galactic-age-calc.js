export class AgeCalc {
  constructor(inputAge) {
  this.earthAge = inputAge;
  this.planetConversions = [["Mercury", 0.24], ["Venus", 0.62], ["Mars", 1.88], ["Jupiter", 11.86]];
  }

  checkValidity() {
    let validInput = false;
    if (parseInt(this.earthAge)) {
      validInput = true;
    }
    return validInput;
  }

  calcPlanetAges() {
    let planetAges = [];
    for (let i = 0; i < this.planetConversions.length; i++) {
      let planetAge = parseInt(this.earthAge / this.planetConversions[i][1]);
      planetAges.push([this.planetConversions[i][0], planetAge]);
    }
    return planetAges;
  }

  calcYearsLeft() {
    const earthLifeExpectancy = 71;
    let yearsLeft = [];
    if (this.earthAge <= earthLifeExpectancy) {
      for (let i = 0; i < this.planetConversions.length; i++) {
        let planetLifeExpectancy = parseInt(earthLifeExpectancy / this.planetConversions[i][1]);
        let planetYearsLeft = planetLifeExpectancy - this.calcPlanetAges()[i][1];
        yearsLeft.push([this.planetConversions[i][0], planetYearsLeft]);
      }
    } else if (this.earthAge > earthLifeExpectancy) {
      for (let i = 0; i < this.planetConversions.length; i++) {
        let planetLifeExpectancy = parseInt(earthLifeExpectancy / this.planetConversions[i][1]);
        let planetExtraYears = this.calcPlanetAges()[i][1] - planetLifeExpectancy;
        yearsLeft.push([this.planetConversions[i][0], planetExtraYears]);
      }
    }
    return yearsLeft;
  }
}
