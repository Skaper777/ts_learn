const profile = {
    name: 'Jack',
    age: 30,
    coordinates: {
        lat: 15,
        lng: 20
    },
    setAge(age: number): void {
        this.age = age
    }
}

const age: number = profile.age

const {coordinates: {lat, lng}}: {coordinates: {lat: number; lng: number}} = profile