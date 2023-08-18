(() => {
  interface Client {
    name: string
    age?: number
    address?: Address
    // getFullAddress: (id: string) => void
    getFullAddress(id: string): string
  }

  interface Address {
    id: number
    zip: string
    city: string
  }

  const client: Client = {
    name: 'Juan',
    age: 25,
    address: {
      id: 125,
      zip: 'ABC',
      city: 'New York'
    },
    getFullAddress(id: string) {
      return this.address?.city || ''
    }
  }
})()
