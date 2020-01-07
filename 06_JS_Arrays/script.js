let array = [10,20,30,40,50];
console.log(array);

// access the elements
console.log(array[1]); // 20
console.log(array[5]); // undefined

// mixed Array
let mixedArray = [[10,20],[30,40],[50,[60,70]]];
console.log(mixedArray[1][1]); // 40
console.log(mixedArray[2][1][1]); // 70

// array of objects
let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Manager',
        active : false
    },
    {
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager',
        active : true
    },
    {
        name : 'Rajan',
        age : 30,
        designation : 'Tech Lead',
        active : true
    },
    {
        name : 'Mahesh',
        age : 25,
        designation : 'Software Engineer',
        active : false
    },
    {
        name : 'Laura',
        age : 28,
        designation : 'Sr. Software Engineer',
        active : true
    }
];

// Loop an array using normal for-loop
for(let i=0; i<employees.length; i++){
    console.log(employees[i]);
}

// junior Employees from array (age <= 30)
let juniorEmployees = [];
for(let i=0; i<employees.length; i++){
    if(employees[i].age <= 30){
        juniorEmployees.push(employees[i]);
    }
}
console.log(juniorEmployees);

// for-in loop (ES5)
juniorEmployees = [];
for(let index in employees){
    if(employees[index].age <= 30){
        juniorEmployees.push(employees[index]);
    }
}
console.log(juniorEmployees);

// for-of loop (ES6)
juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// forEach function
juniorEmployees = [];
employees.forEach(function(employee) {
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
});
console.log(juniorEmployees);

// filter function
juniorEmployees = employees.filter(function(employee) {
    return employee.age <= 30;
});
console.log(juniorEmployees);

// filter with arrow function
juniorEmployees = employees.filter(employee => employee.age <= 30);
console.log(juniorEmployees);
