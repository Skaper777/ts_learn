import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"

const numbersCollection = new NumbersCollection([2, -10, 99, 1])
const charatersCollection = new CharactersCollection('asXsdw')
const sorter1 = new Sorter(numbersCollection)
const sorter2 = new Sorter(charatersCollection)

sorter1.sort()
sorter2.sort()

console.log(numbersCollection.data)
console.log(charatersCollection.data)
