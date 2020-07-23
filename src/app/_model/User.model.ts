export class User {
    cell: string
    dob: {
        age: number
        date: string
    }
    email: string
    gender: string
    location: {
        city: string
        coordinates: {
            latitude: string,
            longitude: string
        }
        country: string
        postcode: number
        state: string
        street: {
            number: number,
            name: string
        }
        timezone: {
            offset: string,
            description: string
        }
    }
    name: {
        first: string
        last: string
        title: string
    }
    nat: string
    phone: string
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    registered: {
        date: string,
        age: number
    }

    constructor(parameters) {

    }
}