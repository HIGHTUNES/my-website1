// there are variable called let, const--- with let I can re-assign values, while const must have a stable value. It is advisable to you const for the value that will not change, always use const unless I know the I am going to re-asign the values; while let can be used in a situation where the values are changed frequently. something like "class" and "id" in html.//
//** Primitive data type = string, number, boolean, null, undefined */
const name= "John";
const age= 30;
const rating= 3.0;
const iscool= true;
const x= null;
const y= undefined;
let z

console.log (typeof z)

//** Talking about strings */
//**Concatenation-- In formal language theory and computer programming, string concatenation is the operation of joining character strings end-to-end. For example, the concatenation of "snow" and "ball" is "snowball". In certain formalisations of concatenation theory, also called string theory, string concatenation is a primitive notion.  */
console.log("My name is" + name + "I am" +age);
/**Template String */
const hello= `My name is ${name} I am ${age}`;
console.log(hello)

/**String properties and methods --- When writing the codes, properties don't have parentheses"()" but when using a metthod there will be a need for parentheses. A method is basically a function that is associated to an object.*/

/**const s= "Hello World";
console.log(s.substring(0, 5).toUpperCase())*/

const s= "Computers, Information Technology, Codes, Data Engineering" 
console.log(s.split(', '))

// Arrays are variable that holds multiple values. an array constructor can be new Array()
// To find out if something is in array, I can use the line of codes below.

const number= new Array (1, 2, 3, 4, 5);
console.log(number)

const friuts=['apples', 'bananas', 'mangoes', 'grapes', 'oranges']
console.log(friuts);
friuts[5]='blueberry';
friuts.push= ('strawberry');
friuts.unshift('pear');
friuts.pop();

console.log(Array.isArray(friuts));
console.log(friuts.indexOf('oranges')); 

// Object literals- These are basic key value pairs.an object literal is a comma-separated list of name-value pairs inside of curly braces.

const person={
FirstName:'John',
LastName: 'Doe',
Age:30,
Hobbies:['music', 'sports', 'travelling'],
Address:{
street:'44 Eric Moore Rd',
city:'Surulere',
state:'Lagos'
}

}
console.log(person.Address.city);

const { FirstName, LastName, Address:{city}}= person
console.log(city)

person.email= 'john2022@gmail.com'
console.log(person);

const todos= [
    {
        id: 1,
    text: 'Meeting with boss',
    isCompleted: true,
    },

    {
        id: 2,
    text: 'Meeting with the procurement manager',
    isCompleted: true,
    },

    {
        id: 3,
    text: 'See Julius at lunch',
    isCompleted: false,
    },
    
];   
console.log(todos[1].text)

//JSON FORMAT, a little bit similar to object literals.
/**Sending and recieving data from a server is usually in JSON format, check the example below */

const todoJSON=JSON.stringify(todos);
console.log(todoJSON)

//For loop
for(let i =0; i <=10; i++){
    console.log(`For Loop Number: ${i}`);
}
//While loop
let i =0;
while(i< 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// looping arrays
for(let todo of todos){
    console.log(todo.text);
}

//High order array methods. forEach, map, filter
todos.forEach(function(todo){ 
    console.log(todo.text)
});


const todoText= todos.map(function(todo){ 
  return todo.text; 
});
console.log(todoText);

const todoCompleted= todos.filter(function(todo){ 
    return todo.isCompleted=== true; 
  }).map(function(todo) {
    return todo.text;
  })
  console.log(todoCompleted);

  //Conditionals

  const p =20;

  if (p === 10) {
    console.log('p is 10');  
  } else if(p > 10){
    console.log('p is greater than 10')
  }
 else{
    console.log('p is less than 10')

 }

const b = 6;
const c =11;

// 'or' is represented with "||", while 'and' is represented with "&&""

if(b >5 && c >10){
    console.log('b is more than 5 or c is more than 10');
}
 /* ternary operator in java it is basically like a shorthand if statement and it is used to assign variables based on a condition ---
  "?"represents "then", else is represented by a ":"
  */

  // switches is another way to evaluate a condition.
  const g =8;
  const color = 'black';
  
  switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
     default:
        console.log ('color is NOT red or blue')
        break;
  }
  


// the arrow function---

const addNums = num1 => num1 +5
console.log(addNums(5));

// read on "lexical this" and how I can use it in Javascript.

// Object-oriented programming---
// Constructor function--- When creating a constructor function iy should start with a capital.

/* es 5 way of using a constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date (dob); 
     
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear 
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;

}**/

//Class- es6/es2015
class Person{
    constructor (firstName, lastName, dob){
        this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date (dob); 
 }
    
  getBirthYear(){
    return this.dob.getFullYear ();
  }  
  
  getFullName(){
    return `${this.firstName} ${this.lastName}`;

  }
}

// Instantiate object
 const person1 = new Person('John', 'Doe', '4-6-1950');
 const person2 = new Person('Mary', 'Smith', '10-3-1980');

 console.log(person1.getFullName());
 console.log(person1);

  //selectors
  //-- Single element selectors
  console.log(document.getElementById('my-form'));
  console.log(document.querySelector('.container'))

  //Multiple element selectors
  console.log(document.querySelectorAll('.item'));

 //looping documents using the element selector
  const items = (document.querySelectorAll('.item'));
 items.forEach((item) => console.log(item));

 //manipulating things in the DOM/changing things in the DOM

 const ul = document.querySelector('.items');
 //ul.remove();
 //ul.lastElementChild.remove();
 ul.firstElementChild.textContent = 'Hello';
 ul.children[1].innerText = 'Brad';
 ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
 
 const btn = document.querySelector('.btn');
 btn.style.background = 'red';

 /**check the MDN documents for te lists of events that can be used to make the user interface more interactive---
  * e.g mouseover, mouseout, click,  */
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', (e) => {
      e.preventDefault();
     document.querySelector('#my-form').style.background ='blue';
     document.querySelector('body').classList.add('bg-dark');
  
  });


  //JS DOM CRASH COURSE

  //Examine the document object//
  //console.dir(document.);
  console.log(document.domain);
  console.log(document.URL);
  console.log(document.title);
  //document.title = 123 ---- This expression is to change the name or the discription of a thing in the document.
  console.log(document.doctype);
  console.log(document.head);
  console.log(document.body);
  console.log(document.all);

  // selection --- getElementbyId
  const headerTitle = document.getElementById('headerTitle');
  console.log(headerTitle);
  headerTitle.textContent = 'Hello';
  headerTitle.innerText = 'Goodbye';
  /**The difference between textcontext and innertext is that the innertext pays more attention
   to the styling in the document. */

   headerTitle.innerHTML = '<h3> Hello</h3>';
   

  /**GETELEMENTSBYCLASSNAME
    console.log(item);
    console.log(items(1));
    item[1].style.fontweight = 'bold';
    item[1].style.backgroundColor = 'Yellow';

    for(var 1 = 0; i < items.length; i++){
      item[1].style.backgroundColor = 'f4f4f4';
    }
    */ 

  // GETELEMENTSBYTAGNAME
  
  //QUERY SELECTOR--- this function only select the first class(check example above. Ln 245), while if I want to select more than one class in the DOM, I can use querySelectorAll//
  var header = document.querySelector('main-header');
  header.style.borderButton = 'solid 4px black';
  

  // TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';   

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

//container.insertBefore(newDiv, h1);
  