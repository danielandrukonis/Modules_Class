//! ES6 Modules

//? 1 Basic syntax

// import moduleDefault from 'module1';
// import { tryModules } from 'module1';

// export function tryModules(){
// }

//? 2 export example

const pi = Math.PI;

const round2Decimals = (number) => parseFloat(number).toFixed(2);

export const getAreaCircle = (r) => {
  const area = r * r * pi;
  return round2Decimals(area);
};

//? 3 import export
//named export
export const name = "value";
//default export
export default name;

//default import
import getMeters from "./feetToM.js";
//named import
import { first, second } from "./feetToM.js";
