const myColors = ['red', 'green', 'yellow']

const fruitsByColor = [
  ['tomato'],
  ['apple'],
  ['lemon']
]

// Help with inference when extracting values 
const color = myColors[0]
const color1 = myColors.pop()

// Prevent incompatible values 
myColors.push(null)

// Help with 'map'
myColors.map((item: string): string => {
  return item
})

// Flexible types 
const importantDates = [new Date(), '2021-11-11']
