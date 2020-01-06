// if-else
let time = 25;
if(time >= 0 && time <= 12){
    console.log('Good Morning');
}
else if(time >12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time >17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter Proper Time');
}

// Switch
let day = new Date().getDay();
let today = '';
switch(day) {
    case 0:
        today = 'SUNDAY';
        break;
    case 1:
        today = 'MONDAY';
        break;
    case 2:
        today = 'TUESDAY';
        break;
    case 3:
        today = 'WEDNESDAY';
        break;
    case 4:
        today = 'Thursday';
        break;
    case 5:
        today = 'FRIDAY';
        break;
    case 6:
        today = 'SATURDAY';
        break;
    default:
        today = 'Enter a Proper Day';
        break;
}
console.log(`Today is : ${today}`);

// for-loop
let output = '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// print from 20 - 0 diff is 2
output = '';
for(let i = 20; i >= 0 ; i -= 2){
    if(i > 0){
        output += `${i} , `;
    }
    else{
        output += `${i}x`;
    }
}
console.log(output);

// print the stars
output = '';
let number = 5;
for(let i=1; i<=number; i++){
    for(let j=1; j<=i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);

// print Numbers
/*
    1
    12
    123
    1234
    12345
 */
output = '';
let maxValue = 5;
for(let i =1; i<=maxValue; i++){
    for(let j=1; j<=i; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// print Numbers
/*
    1
    22
    333
    4444
    55555
 */
output = '';
maxValue = 5;
for(let i =1; i<=maxValue; i++){
    for(let j=1; j<=i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// print Numbers
/*
    54321
    5432
    543
    54
    5
 */
output = '';
maxValue = 5;
for(let i=maxValue; i>=1; i--){
    for(j=maxValue; j>(maxValue - i); j--){
        output += j;
    }
    output += '\n';
}
console.log(output);

// print Numbers
/*
    12345
    1234
    123
    12
    1
 */
output = '';
maxValue = 5;
for(let i=1; i<=maxValue; i++){
    for(let j=1; j<=(maxValue - i+1); j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// print Numbers
/*
    55555
    4444
    333
    22
    1
 */

console.log('--------------------- While loop ---------------------');
// print the stars
output = '';
number = 5;
let i=1;
while(i<=number){
    let j=1;
    while(j<=i){
        output += '*';
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

