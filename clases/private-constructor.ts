(() => {
  class Apocalipsis {
    static instance: Apocalipsis

    private constructor(public name: string) { }

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el ÚNICO')
      }

      return Apocalipsis.instance
    }
  }

  // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el ÚNICO') // No se puede llamar asi porque no se puede llamar fuera de la clase
  const apocalipsis2 = Apocalipsis.callApocalipsis()
  const apocalipsis3 = Apocalipsis.callApocalipsis()

  console.log(apocalipsis2, apocalipsis3) // Todas son las mismas porque es la misma instancia

})()
