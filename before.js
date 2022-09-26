//! Modules before - IIFE

//! Scopes
//Global scope;
//?Module scope;
//Function scope;
//Block scope

//?1 IIFE

(function () {
  function getTimestamp() {
    console.log(Date.now());
  }
  getTimestamp();
})();

//?2 expose IIFE as a module

const timeModule = (function () {
  const day = "have a nice day";
  function getTimestamp() {
    console.log(Date.now());
  }
  return {
    getTimestamp: getTimestamp,
    dayQuote: day,
  };
})();
