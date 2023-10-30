// conditionals, Loops, Jumps, 

// Conditionals 
// if ... else 

// syntaxt 

// if (expression) 
//    statement 

let age= 24

if ( age >= 28) {
    console.log( `Are you a married man/women? your age is ${age}.`)
}else {
    console.log( `You are elligible you age is under 30`)
}


// 
let username = null
if( username == null) 
    username = " John Doe";


let n = 2;
    if (n === 1) 
        console.log("You have 1 new message.");
    else 
        console.log(` you have ${n} new messages`);
//readable by using curly braces{}
i = j = 1;
k = 2;
if (i === j) {
	if(j === k){
			 console.log('i equals k');
}
else {
	console.log( " i doesn't equal j") 
}
}
// refer https://www.notion.so/Conditionals-b4412953301547c59e452c19bb65cfda

// loops: javascript has five looping statements:
// While, do/while, for, for/of , for/await



// while 
// syntax
// while (expression)
//     statement 


// let count = 0; 
// while(count < 10){
//     console.log(count);
//     count++;
// }
// console.log(count)

// do/ while 
// do 
// statment
// while(expression);

function printArray(a){
    let len = a.length, i=0;
    if(len ===0){
        console.log("empty array");
    } else {
        do{
            console.log(a[i])
        } while (++i < len);
    }
}

printArray("")
printArray('son')
// for 
// for(initialize: text: increment)

// for /of 
let data = [1,2,3,4,5,6,7,8], sum = 0;
for(let element of data){
     sum+= element;
}

console.log(sum)

// for/ of with objects 

// let o1 = {
//     x:1,
//     y:2,
//     z:3
// };
// for(let element of o1){ // o1 is not iterable
//     console.log(element)
// }

let o1 ={
    x:1,
    y:2,
    z:3,
};
let keys="";
for(let k of Object.keys(o1)){
    keys += k;
}
console.log(keys)
// for/of with strings 

let frequency = {};
for(let letter of "Arghakhanchi"){
    if(frequency[letter]){
        frequency[letter]++;
    } else {
        frequency[letter] = 1
    }
}
console.log(frequency)
console.log(typeof frequency)