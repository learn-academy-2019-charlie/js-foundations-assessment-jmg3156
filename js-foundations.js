// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
    let newNum => (num) {
        if(newNum % 3 === 0){
            console.log (`${newNum} is divisible by 3`)
        } else if ( newNum % 3 != 0){
            console.log (`${newNum} is not divisible by 3`)
        }
        
    }
    console.log(12)
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
let myJessa = {
  me: {
    name1: "Jessa Garcia",
    eyes: "Brown",
    feeling: "Tired"
  },
  getJessa() {return  `My name is ${this.name} my eyes are ${this.eyes}. I am feeling ${this.feeling}.`}
}

console.log(myJessa.me.name1)
console.log(myJessa.me.eyes)
console.log(myJessa.me.feeling)
console.log(myJessa.getJessa())

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
var groceryList = ["milk", "eggs", "bread","rice", "cereal"]


const Num = (array) => {
    return arr.map()
}
}

console.log (groceryList [0]);
console.log(groceryList [2])
console.log (groceryList [4])



// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

const alphabetSoup = (str) =>{
    var arr = str.split('');
    var ord;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
          ord = arr[i];
          arr[i] = arr[j];
          arr[j] = ord;
        }
      }
    }
    return arr.join('');
  }



console.log(alphabetSoup("idiosyncratic"))
    
}
// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]


animalNums = (arr1, arr2) => {
    let newArr = []
for (let i = 0; i < nums.length; i++) {
    newArr[i] = `${arr1[i]}-${arr2[i]}`
}
 return newArr
}

console.log(animalNums(nums,nouns))



// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
var arr1 = [20, 3, 14, 9, 12]


mult5 = (arr) => {
    return arr.map(value => value * 5)
}

console.log("original", arr1);
console.log("new", mult5(arr1));