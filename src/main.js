import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalc } from './../src/galactic-age-calc.js';

$(document).ready(function() {
  console.log("WE GOT HERE");
  let example = new AgeCalc(20);
  console.log(example.checkValidity());
  console.log(example.calcPlanetAges());
});
