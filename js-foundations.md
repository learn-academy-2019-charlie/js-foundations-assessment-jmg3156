# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
Primitive: Strings,Numbers, Booleans, null, undefined
Objects, symbols, variables

2. What's the difference between =, ==, and === in JavaScript?
 === tests for strict equality 
== tests for abstract equality 

3. What is the difference between an array's index and length?
 Array index refers to a specific location in the array 
 length turns or sets the number of elements in a given array

4. What are the three parts of a for loop?
First part is executed (one time) before the execution of the code block.
Second part defines the condition for executing the code block.
Third partis executed (every time) after the code block has been executed.


5. What is a function's declaration, argument, and call?
Declaration includes function keyword that includes the name of the function, a 
list of parameters to the function, and Javascript statments that define the function
enclosed in curly braces

6. What are the three main steps in saving work to github?
git add .
git commit -m
git push

7. What is the terminal command to move directories?
cd

8. Do you have a suggestion for a Check In question?


9. What was your favorite topic this week?
create-react-app was fun to learn about


10. What was your "A-ha!" moment this week?
This assessment. I understood a bit more than the last one.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()

Undefined

var text = 'outside'
var text1 = 'inside'

function logIt(){
    console.log(text)
    console.log(text1)
    }

logIt()

```

2. What is JSON? How does it relate to javascript objects?
Javascript object notation. Passes data between server and application

3. Describe a closure, what is it good for and how do you recognize one?
A closure is the combination of a function bundled together 