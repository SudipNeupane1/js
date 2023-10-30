// function : A function is a self-contained collection of statements that run as a single unit: essentially , it is as a subprogramm
// if a function is assigned to a property of an object, it is known as a method of that object. 
// When a function is invoked on or through an object, that object is the invocation context or this value for the function. 
// Since functions are objects, you can set properties on them and even invoke method on them. 

// Every function has a body; this is the collection of statements that compose the function
function getGreeting() {
    return " hello world" ; 
}
console.log(getGreeting())

// The term call, invoke, and execute( as well as run) are interchangeable.
// ** function declerations** 

function printprops(o) { 
    for( let p in o){
        console.log(`${p}: ${o[p]}`);
    }
}
// console.log(printprops(3))
// Compute the distance between Cartesian points( x1,y1) and (x2,y2).
function distance( x1, y1, x2, y2) { 
    let dx = x2 - x1; 
    let dy = y2 -y1 ; 
    return Math.sqrt(dx*dx + dy*dy);
}
console.log(distance(2,3,4,5))


// A recursive function( one that calls itself) that computes factorials

function factorials(x) { 
    if(x <= 1) return 1; 
    return x * factorials(x-1);
}
console.log(factorials(4))
 // use return to return that value to their caller.
 //The return statement causes the function to stop executing and to return the value of its expression (if any)
// to the caller. If the return statement does not have an associated expression, the
// return value of the function is undefined.
// when we return the value we can assign it to the another variable which will be easy to manipulate. 
// printprops() function is differnet; its job is to output the name and value of an object's properites.
// No return value is necessary, and the function does not include a return statment.
// remains undefined, if you don't explicityly call return, the return value will be undefined. 

// *** Function expressions***

// This function expression defines a function that squares its argument.
const square = function(x) { return x*x;};
console.log(square(4));

const add = function(a) { return a+a;};
console.log(add(7))

// Function expressions can include names, which is useful for recursion.
const f = function fact(xx) { if (xx<=1) return 1; else return xx*fact(xx-1)};
console.log(f(4))

/// *** Calling Versus Refering *** 

// When you follow a function identifier with parentheses, JavaScript Knows that you're calling it. 
// it executes the body of the function, and the expression resolves to the return value. 
// When you don't provide the parentheses, you're simply referring to the function just like any other value, and it's not involed. 

getGreeting(); // calling 
getGreeting; // refereing 

// Assign a function to a variable
const d =  getGreeting; 
d();
console.log(d())
// assign a function to an object property 

const o = {};
o.d = getGreeting;
o.d();
console.log(o.d())

// add a function to an array; 

const yarra = [1,3,5];
yarra[1] = getGreeting;
yarra[1]();
console.log(yarra[1]())
console.log(yarra);

// if you try to add parentheses to a value that is not a function, you will get an error. 

// **** Function Arguments 
// Arguments are like variables that don't exist untile the function is called. 


function avg(a, b){ 
    return ( a+b)/2;
}
console.log(avg(3,4));

// In this function declaration a and b are called formal arguments( paramaters). When a function is called, 
// formal arguments recives values and become actual arguments. 
///  Destructuring Arguments 

function getSentence({subject,verb,object}) {
    return `${subject} ${verb} ${object}`;
    
}
const oo = {
    subject: "I",
    verb: " am",
    object:"Sudip"
}
console.log(getSentence(oo))

function vectorAdd([x1,y1],[x2,y2]){
    return [x1 + x2, y1 + y2];
}
console.log(vectorAdd([1,2],[3,4]))

// Destructure arrays: 

function getCountry([ japan,India,Nepal]){
    return `${japan} ${India} ${Nepal};`
}
const country = ['mongolian','brown','mixed'];
console.log(getCountry(country));
// using rest argument/ spread operator(...)

// const objects = { 
//     names :'sudip',
//     bark :function(){
//         return 'woof';
//     }

// }
// console.log(objects.bark())

// another way to do it 

// const objects = {
//     names: 'Sudip',
//     bark() {
//         return 'woof';
//     }
// }
// console.log(objects.bark())




// This keyword 
// Normally this keyword relates to functions that are properties of objects 

const oj = {
    names: 'Sudip',
    speak(){ return `My name is ${this.names}`}
}

console.log(oj.speak())
// how the function is called, not where the function is delcared.

// using in the nested 

// const ject = { 
//     names: "Sudip",
//     greetBackwards: function(){
//         function getReverseName(){
//             let nameBackwards ='';
//             for(let i = this.names.length -1; i>=0; i--){
//                 nameBackwards += this.name[i];
//             }
//             return nameBackwards;
//         }
//         return `${getReverseName()} si eman ym olleh`;
//     },
// }
// console.log(ject.greetBackwards())

// above code wont work because we need to use self to get the propertie

const ject = {
    names: "Sudip",
    greetBackwards: function(){
        const self = this;
        function getReverseName(){
            let nameBackwards ='';
            for(let i = self.names.length-1; i>=0; i--){
                nameBackwards += self.names[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`
    },
}
console.log(ject.greetBackwards())
// Arrow is the another way to addressing this problems. 

// A method is nothing more than a JavaScript function that is store in a property of an object

let calculator = { 
    operand1: 1,
    operand2: 1,
    add() { 
        this.result = this.operand1 + this.operand2;
    }
};
console.log(calculator.add())
console.log(calculator.result)

// An arrow function, which will properly inherit the this value;

// omit the word function 
// if the function takes a single argument, you can omit the parentheses.
// if the function body is a single expression, you can omit curly braces and the return statment 
// They are always anonymous. 

// const f1 = function() { return 'hello'}
// or 
const f1 = () => 'hello';

// const f2 = function(name) { return ' `hello, ${name}`};
//or 
const f2 = names => `hello,${names}`;
console.log(f2('sudip'))
// const f3  = function (a, b) { return a+b};
const f3 = (a,b) => a+b;
console.log(f3(2,5))


   // call, apply and bind 

   const Sudip = { names: "Sudip"}
   const Sudhan = {names: "Sudhan"}
   function greet(){
    return `Hello, I'm ${this.names}`;
   }
   console.log(greet())
   console.log(greet.call(Sudip))
   console.log(greet.call(Sudhan))

   function update(birthYear, occupation){ 
    this.birthYear = birthYear;
    this.occupation= occupation;
   }
   update.call(Sudip,1999,'coder');
   update.call(Sudhan,2000,'actor')

   console.log(Sudip)
   console.log(Sudhan)

   // apply is identical to call except the way it handles function arguments. call takes
//arguments directly, just like a normal function. apply takes its arguments as an array:
update.apply(Sudip,[1994,'writer']);
update.apply(Sudhan,[2342,'walker']);

console.log(Sudip)

// rest parameter ...

// function sum(... numbers) { 
//     return numbers 
// }
// console.log(sum(1,2,4,5,4,5,6))

function sum( ... numbers){
    let total = 0;
    for(const num of numbers){
        total += num;
    }
    return total;
};
console.log(sum(1,2,3,4,5))

// object as params 

function loginUser(user) { 
    return ` The user ${ user.names} with the id of ${user.id } is lodded in}`
}
const user = {
    names: 'sudip',
    id : 1
}

console.log(loginUser(user))
console.log(loginUser({
    names:"Sudhan",
    id:2
}))

