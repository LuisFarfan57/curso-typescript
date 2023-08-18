(() => {

  class Avenger {
    static avgAge: number = 35

    constructor(
      private name: string,
      public team: string,
      public realName?: string,
      avgAge: number = 55
    ) {
      Avenger.avgAge = avgAge
    }

    public bio(): string { // Igual se le puede poner el nivel de acceso a los metodos
      return this.createBio()
    }

    private createBio(): string {
      return `${this.name} (${this.team})`
    }

    static getAvgAge() {
      return this.avgAge
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang')

  // console.log(antman.createBio()) // No se puede acceder a createBio porque es privado
  console.log(antman.bio()) // Se puede acceder a bio porque es publico

  console.log(Avenger.getAvgAge()) // Igual se pueden llamar los metodos staticos
})()
