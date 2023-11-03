
/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 *  
 */

var animals = [
    homePets = ["cat", "dog", "hamster"],
    wildAnimals = ["frog", "lizard", "horse"]
]

var animalList = homePets.concat(wildAnimals);
console.log(animalList)





/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. 
 * Grab some values out of this array to create a sentence using concatenation.
 * 
 *  
 */

var food = [
    cakeFlavours = ["vanilla", "chocolate", "strawberry", "mango"],
    icingColor = ["red", "yellow", "blue", "green"]
]


var cakeOrder = "For my cake i want " + cakeFlavours[1] + " with " + icingColor[2] + " icing."
console.log(cakeOrder)
