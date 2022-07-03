// Primitives 
const number = 5
let string = 'fast'

let nothing: null = null
let nothung1: undefined = undefined

// Built-in objects 
let now: Date = new Date()

// Array (with strings)
let colors: string[] = ['red', 'yellow']

// Classes 
class Car {

}

let car: Car = new Car()

// Object literal 
let point: { x: number; y: number } = {
    x: 2,
    y: 5
}

// Functions 
const logNumber: (num: number) => void = (num: number) => {
    console.log(num)
}

// When to use type annotations 
// 1) Function returns the 'any' type 
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json)

// 2) When we declare a variable on one line and initialize it later
let words = ['one', 'two']
let isTwo: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'two') isTwo = true
}

// 3) Variables whoes type can't be inferred 
let numbers = [-19, -2, 1]
let positiveNumber: null | number = null; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) positiveNumber = numbers[i]
}

