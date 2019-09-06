
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
}
