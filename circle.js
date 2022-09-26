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

//todo Task
/*
Susikurkit naują projektą. Pridėkit script.js failą nurodydami, kad tipas 'module';
Susikurkit po atskirą modulį valiutos konversijai: toGBP, toPLN, toUSD;
Kiekvienas iš tų trijų modulių turi turėti const su EURto<currency> kursu(susiraskit kursą nete) 
ir funkciją, kuri priima kiekį, ir grąžina suma kita valiuta; 
Modulių funkcijos turi būti eksportuotos, o EURto<currency> konstanta ne; 
Pasibandykite ir default ir named export;
script.js susiimportuokit funkcijas ir patestuokite su visom konversijom; 

Bonus. 
Perkelkit tris konversijos modulius į vieną ir pasidarykit visus konversijų funkcijų
exportus į named. Atitinkamai pakeiskit import script.js faile. 
*/
