(() => {

  // Forma corta de declarar clases
  class Avenger {
    // Ya no es necesario declarar aca las variables
    static avgAge: number = 35 // Se puede acceder directamente al llamar la clase afuera

    constructor(
      // De una vez asigna las variables a la clase aparte de declararlas
      private name: string,
      public team: string,
      public realName?: string,
      // El static no se puede declarar aca
      avgAge: number = 55 // Lo que si se puede hacer es asignarle un valor
    ) {
      Avenger.avgAge = avgAge
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang')
  console.log(antman)

  console.log(Avenger.avgAge)
})()
