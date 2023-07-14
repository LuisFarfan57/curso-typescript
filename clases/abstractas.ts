(() => {
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string
    ) { }

    get fullName(): string {
      return `${this.name} ${this.realName}`
    }
  }



  class Xmen extends Mutante { // Automaticamente tiene todas las definiciones de la clase Mutante
    salvarMundo() {
      return 'Mundo a salvo!'
    }
  }

  class Villian extends Mutante {
    conquistarMundo() {
      return 'Mundo conquistado!'
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan')
  const magneto = new Villian('Magneto', 'Magnus')

  console.log(wolverine.name + ' ' + wolverine.salvarMundo())
  console.log(magneto.name + ' ' + magneto.conquistarMundo())

  const printName = (personaje: Mutante) => {
    console.log(personaje.fullName)
  }

  printName(wolverine)
  printName(magneto)

})()
