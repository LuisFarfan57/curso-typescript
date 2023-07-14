(() => {

  // Forma larga de declarar clases
  class Avenger {
    private name: string // Solo se tiene acceso a la propiedad dentro de la clase
    public team: string // Se puede ver fuera de la clase
    public realName?: string // Se puede ver fuera de la clase y es opcional
    static avgAge: number = 35 // Se puede acceder directamente al llamar la clase afuera

    constructor(name: string, team: string, realName?: string) {
      this.name = name
      this.team = team
      this.realName = realName
    }

  }

  const antman: Avenger = new Avenger('Antman', 'Capitan')
  console.log(antman) // typescript nos recomienda solo las propiedades publicas

  console.log(Avenger.avgAge)
})()
