// primitives ✅
// complex types ✅
// const let var ✅
// operators ✅
// logical operators ✅
// truthy i falsy ✅
// conditionals
// loops
// objects
// arrays
// array methods
// callbacks
// scope ✅

// promises
// async await
// closure
// hoisting
// classes
// DOM
// DOM manipulation
// events
// es6 js

// straiji nacin za deklarisanje varijabli i ima globalni/funkcionalni scope
var a = "string";

// noviji nacin za deklarisanje varijabli i ima bloked scope
const b = "string";
let c = "string";

// funkcionalni scope je kada je varijabla vidljiva (ima scope) samo unutar funkcije gde je napravaljna
// blocked scope je kada je varijabla vidljiva (ima scope) samo unutar bloka gde je napravljena ({ })

// function fn() {
//   if (true) {
//     var f = "nesto";
//     const d = 1231;

//     console.log(d);
//   }

//   console.log(f);
// }

// ne mozemo da pristupimo f i d , jer ne vidimo (scope) te variable odavde
// console.log(f);
// fn();

// primitivni tipovi
// string, boolean, number, undefined, null, NaN
console.log(typeof "nesto");
console.log(typeof true);
console.log(typeof 1);
console.log(typeof undefined);

// kompleksni tipovi
// funkcija, objekat
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});

// operatori
// +, -, *, /, %, ==, ===, >= , <=, >, <

// operatori se uglavnom koriste za matematicke opreacije, sastavljanje stringova, i poredenje

// trhuty i falsy
// falsy: "", false, undefined, null, 0
// sve ostalo je thruty

if ("") {
  console.log("izvrsio se");
}

// logicke operatore
// && , ||

// rezultat je prva falsy vrednost ili poslednja thruty
console.log("sdfas" && false && "sdfs");
console.log("sdfas" && 1324 && "sdfs");

// rezulat je prva thruty vrednost ili poslenja falsy
console.log(false || false || "sdfs");
console.log("" || false || null);
