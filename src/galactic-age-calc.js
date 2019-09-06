
export class AgeCalc {
  constructor(inputAge) {
  this.earthAge = inputAge;
  }

  checkValidity() {
    let validInput = false;
    if (parseInt(this.earthAge)) {
      validInput = true;
    }
    return validInput;
  }

  calcPlanetAges() {
    const planetConversions = [["Mercury", 0.24], ["Venus", 0.62], ["Mars", 1.88], ["Jupiter", 11.86]];
    let planetAges = [];
    for (let i = 0; i < planetConversions.length; i++) {
      let planet = planetConversions[i][0];
      let conversionFactor = planetConversions[i][1];
       let planetAge = this.earthAge / conversionFactor;
      planetAges.push([planet, planetAge]);
    }
    return planetAges;
  }

}
