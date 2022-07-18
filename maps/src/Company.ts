import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  name: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }
  
  constructor() {
    this.name = faker.company.companyName()    
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <h2>Company name: ${this.name}</h2>
      <h3>Company phrase: ${this.catchPhrase}</h3>
    `
  }
}