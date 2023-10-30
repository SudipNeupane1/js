
//  let beatles = [ "John", "paul"," George", " Ringo"]

// let name = " Sudip"; 
// beatles[0] = name;
// // below output is changed to sudip. 

// console.log(beatles);

// The value of an element in one array can be an element from another array.

let names = ['saroj', 'sudip', 'sudhan', 'sova']
// beatles[1] = names[3];
// console.log(beatles);

// In fact, arrays can hold other arrays. Any element of an array can contain an array as its value.

let lennon = [ "John", 1940, false]; 
let beatles = []; 
beatles[0] = lennon;
console.log(beatles)
console.log(beatles[0][1]) // 1940


// Asociative Arrays 

let student = Array(); 
student["name"] = "Sudip"
student["Class"] = 12; 
student["Grade"] = false; 
console.log(student)
console.log(typeof student)

// Objects  

let teacher = Object(); 
teacher.name = " Ram"; 
teacher.year = 1999; 
teacher.living = true; 
console.log(teacher)
console.log(typeof teacher)
// Insted of using brackets with an index to specify element, 
// we use dot notation and specify the property name. 

let teachers = { 
    name: "Ram",
    year: 1999,
    living: true,
}
// This is another way of creating an object. 

let school = Array()
school[0] = student// arrays 
school[1] = teacher // objects
console.log(school)


let schools = {}; 
schools.pass = student;
schools.teach = teacher;
console.log(schools)

let examp = Array.of(10)

console.log(examp)

// Array length 

// let village = []
// names = [" boardgaun", "charNumber"];
// village[0] = names 
// console.log(village.length)
// console.log(village)

let Muncipality  = []
village = {
    development: "boardGaun",
    developed : "charNumber",
}
Muncipality.names = village
Muncipality[0] = village
console.log(Muncipality) 
console.log(Muncipality.length)

// In this way we can make changes. 
// By specifying the name or index we can update the elements and values


let wildAnimal = []

let category = Object() 
category.Birds = " crow"
category.animals = "lion"

wildAnimal[0] = category 
console.log(category)
console.log(wildAnimal)
console.log(wildAnimal.length)

// Adding and Removing Single Elements at the Beginning or End

/// push an pop add and remove, respectively, elements to the end of the array.
// Shift and unshift remove and add, respectively, elements to the begining of the array. 

// push and pop are actions on a stack, where the important elements were the most recent ones added. 
// shift and unshift treat the array lika a queue, where the important elements are the oldest ones added. 
// push and unshift returns the new length of the array after the new element has been added. 
// pop and shift returns the element that was removed. 


let fruits = ['mango', 'apple', 'banana', 'orange'];
// fruits.pop();
fruits.push('watermelon')
// fruits.shift()
fruits.unshift('cucumber')
console.log(fruits);

let a = []; 
a.push('zero');
a.push('one','two')
console.log(a)

let b = [] 
b.unshift('ten');
b.unshift('eleven','twelve')
console.log(b)



// **) Concat 

// let val = [1,2,4,'five']
//  val.concat(false,true)
//  console.log(val)
//  console.log(typeof val)

let threeNumber = [1,2,4]
let twoNumber  = [1,4] 

let result = threeNumber.concat(twoNumber)
console.log(result)

// first we need to put all the values in a variable then we can concat 

