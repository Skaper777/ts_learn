import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"

const numbersCollection = new NumbersCollection([2, -10, 99, 1])
const charatersCollection = new CharactersCollection('asXsdw')

numbersCollection.sort()
charatersCollection.sort()

console.log(numbersCollection.data)
console.log(charatersCollection.data)
