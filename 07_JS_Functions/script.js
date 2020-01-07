function print(startNumber,endNumber,increNumber) {
    let output = '';
    for(let i=startNumber; i<=endNumber; i += increNumber){
        output += `${i} `;
    }
    console.log(output);
}
print(0,100,10);
print(100,1000,100);

// simple function
function greet() {
    console.log('Hello Good Morning');
}
greet();

// function with parameters
function greetMe(name) {
    console.log(`Hello Mr. ${name}`);
}
greetMe('John');

// function with return statement
function sum(a , b) {
    let result = a + b;
    return result;
}
function multiply(value){
    let result = 2 * value;
    console.log(result);
}
let output = sum(10,20);
multiply(output);

// function expression
let addition = function(a , b) {
    let result = 2 * (a + b);
    console.log(result);
};
addition(10,20);

// function with object as parameter
let printObject = function(obj) {
    console.log(obj);
};
let studentOne = {
    name : 'Rajan',
    age : 23
};
printObject(studentOne);
printObject({name : 'Wilson' , age : 45});

// function with array as parameter
let printArray = function(array) {
   let output = '';
   for(let index in array){
       output += `${index} => ${array[index]} \n`;
   }
   console.log(output);
};
let colors = ['html','css','javascript','jquery'];
printArray(colors);
printArray([10,20,30,40,50]);

// function inside as object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    age : 23,
    address : {
        street : 'Jubilee Hills',
        city : 'Hyderabad'
    },
    fullName : function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

// nested function
let outerFn = function() {
  console.log('Hello iam from outerFn');
  let innerFn = function() {
    console.log('Iam from inner Function');
  };
  return innerFn;
};
let test = outerFn();
test();

// arrow functions ES6
let sayHello = (name) => {
    let message = `Hello ${name}`;
    return message;
};
let result = sayHello('John');
console.log(result);

// prepare chicken curry with functions













