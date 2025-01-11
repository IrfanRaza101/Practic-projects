// Q1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

// ans1:
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student));



// Q2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

// ans2:
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(student);
delete student.rollno;
console.log(student);


// Q3. Write a JavaScript program to get the length of a JavaScript object. Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

// ans3:
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student).length);



// Q4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

// ans4:
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
library.forEach(function(book) {
    console.log(`Book Name: ${book.title}, Author Name: ${book.author}, Reading Status: ${book.readingStatus}`);

});

// Q5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.

// ans5:
class Cylinder {
   cylinderRadius;
   cylinderHeight
    constructor(cylinderRadius, cylinderHeight) {
        this.cylinderRadius = cylinderRadius;
        this.cylinderHeight = cylinderHeight;
    }

    volume() {
        return (Math.PI * this.cylinderRadius * this.cylinderRadius * this.cylinderHeight);
    }
}
const cylinder = new Cylinder(1, 2);
console.log(cylinder.volume().toFixed(4));

