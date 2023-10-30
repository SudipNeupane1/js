"use strict"; // treat all JS code as newer version

console.log(3+3);
console.log("sudip")

// Javascript's Object are mutable and its primitive types are immutable. 
// 
const RED = Symbol();
const ORANGE = Symbol(" The color of a sunset");

// Objects 
let user1 = {
	name : "sudip",
  classification: {
	 class: "English",
	 order: "carnivorial",
	 family: " Neupane",
	 gender: " Male",
	 weight: " 67",
}, 
}; 

console.log(user1.classification.family);
console.log(user1.classification['family']);
console.log(user1['classification']['family'])
console.log(user1['classification'].family)