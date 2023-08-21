function printToConsole(constructor: Function) {
  console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole
  }

  return () => { }
}

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

function checkValidPokemonId() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('Invalid ID')
      } else {
        return originalMethod(id)
      }
    }
  }
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      // Para caerle encima al valor de la propiedad
      get() {
        return 'Luis'
      },
      set(this, val) {
        Object.defineProperty(this, propertyKey, {
          // Este es el property descriptor
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
    }

    return descriptor
  }
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
  @readOnly()
  public publicApi: string = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(
    public name: string
  ) { }

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon saved to DB ${id}`)
  }

}
