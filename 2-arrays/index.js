
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
 * -----------
 * initialise the variable called `animals` to a 2-Dimensional array containing
 * the values below:
 *          C[0]    C[1]    C[2]
 *  Row 1   cat     dog     hamster
 *  Row 2   frog    lizard  horse
 * 
 * then use the .concat() method to console log out a list
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
 * ----------
 * initialise the variable called `food` to a 2-Dimensional array conataining 
 * the values below:
 *          column(0)   column(1)   column(2)   column(3)
 * Row 1    vanilla     chocolate   strawberry  mango
 * Row 2    red         yellow      blue        green
 *  
 * then based on the values stored in the food array, console log out the following
 * sentence (use concatenation):
 * For my cake I want _flavour_ with _color_ icing.
 */

var food = [
    cakeFlavours = ["vanilla", "chocolate", "strawberry", "mango"],
    icingColor = ["red", "yellow", "blue", "green"]
]


var cakeOrder = "For my cake I want " + cakeFlavours[1] + " with " + icingColor[2] + " icing."
console.log(cakeOrder)
