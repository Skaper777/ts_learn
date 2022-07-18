class Vehicle {  
  constructor(public color: string) {}

  public stop(): void {
    console.log('Stop!')
  }

  protected beep(): void {
    console.log('Beeep!')
  }
} 


class Car extends Vehicle {
  constructor(public engine: number, color: string) {
    super(color)
  }

  private drive(): void {
    console.log('Driving car!!')   
  }

  implementDrive(): void {
    this.drive()
    this.beep()
  }
}


const car = new Car(1.6, 'red')
car.implementDrive()
car.stop()