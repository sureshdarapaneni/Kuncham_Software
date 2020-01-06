// Operator
// Assignment operator =
let abc = 10;
console.log(abc);

// Arithmetic operator + , - , / , * , %
let num1 = 10;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

// Short hand math += , -= , /= , *=
let a = 10;
let b = 20;
let add = 10;
add = add + (a + b); // 10 + 10 + 20 = 30
add += (a + b); // 30 + 10 + 20 = 70
console.log(add); // 70

// conditional Operators < , > , <= , >= , !==
let marks = 75;
if(marks <= 35){
    console.log('You Failed the Exam');
}
else{
    console.log('You cleared the Exam');
}

// logical operator AND && , OR ||
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until parents agreed');
}

// Ternary Operator (?:)
// (condition)? true part : false part;
marks = 35;
let message = '';
(marks >= 35)? message = 'You cleared the exam' : message = 'You failed the Exam';
console.log(message);

// typeof operator
let name = 'John';
console.log(`value : ${name} Type : ${typeof name}`);

// == operator
let x = 10;
let y = '10';
if(x == y){
    console.log('both are equal');
}
else{
    console.log('both are NOT equal');
}

// === operator
 x = 10;
 y = '10';
if(x === y){
    console.log('both are equal');
}
else{
    console.log('both are NOT equal');
}

// ++ , --
let p = 10;
p = p - 1;
p -= 1;
p--;
console.log(p);



