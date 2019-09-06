
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
    // for (let i = 0; i < this.planetConversions.length; i++) {
    //
    //   yearsLeft.push()
    // }
    return yearsLeft;
  }

}
