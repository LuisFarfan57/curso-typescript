(() => {

  class Avenger {
    constructor(
      private name: string,
      public realName?: string,
    ) { }

    private getFullName(): string {
      return `${this.name} ${this.realName}`
    }

    protected getFullProtectedName(): string {
      return `${this.name} ${this.realName}`
    }

  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ) {
      super(name, realName)
    }

    getFullNameDesdeXmen() {
      // console.log(super.getFullName()) // Marca error porque getFullName() es privado
      console.log(super.getFullProtectedName()) // Este si se puede porque es protegido
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true)

  console.log(wolverine) // Si xmen no tiene constructor, automaticamente llama al constructor del padre
  // console.log(wolverine.getFullProtectedName()) // No se puede porque es protegido


})()
