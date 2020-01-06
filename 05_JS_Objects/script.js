// Objects Creation
let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    salary : 85000,
};
console.log(employee);

// access the properties of an object
console.log(employee.name);
console.log(employee.age);

// access the non existing prop of object
console.log(employee.isActive);

// dot notation , [] notation
console.log(employee.salary);
console.log(employee['salary']);

// dynamic properties
let propName = 'salary';
console.log(employee.propName); // undefined
console.log(employee[propName]); // 85000

// Nested Object
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    college : 'Osmania University',
    address : {
        street : 'Jubilee Hills',
        city : 'Hyderabad',
        state : 'TS'
    }
};
console.log(student);

// access the nested Object
console.log(student.address);

// access the nested Objects property
console.log(student.address.street);

// CRUD operations with object
let mobile = {};
console.log(mobile);

// CREATE
mobile.brand = 'Apple';
mobile.color = 'Silver';
mobile.price = 35000;
mobile.isInsured = false;
console.log(mobile);

// READ
console.log(mobile.color);

// UPDATE
mobile.price = 45000;
console.log(mobile);

// DELETE
console.log(mobile);
delete mobile.isInsured;
console.log(mobile);
