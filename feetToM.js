//? default export

const conversionRatio = 0.3048;

const getMeters = (length) => length * conversionRatio;

export default getMeters;

export const first = "Pirmas";
export const second = "Antras";

//todo Task
/*
Susikurkit naują projektą. Pridėkit script.js failą nurodydami, kad tipas 'module';
Susikurkit po atskirą modulį valiutos konversijai: toGBP, toPLN, toUSD;
Kiekvienas iš tų trijų modulių turi turėti const su EURto<currency> kursu(susiraskit kursą nete) 
ir funkciją, kuri priima kiekį, ir grąžina suma kita valiuta; 
Modulių funkcijos turi būti eksportuotos, o EURto<currency> konstanta ne; 
Pasibandykite ir default ir named export;
index.js susiimportuokit funkcijas ir patestuokite su visom konversijom; 

Bonus. 
Perkelkit tris konversijos modulius į vieną ir pasidarykit visus konversijų funkcijų
exportus į named. Atitinkamai pakeiskit import script.js faile. 
*/
