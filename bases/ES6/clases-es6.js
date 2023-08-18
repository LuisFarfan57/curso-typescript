(() => {
  class Avenger {
    // En javascript esto ni siquiera es necesario. Podemos crear propiedades donde queramos
    name
    realName
    isMutant

    constructor(name = 'No name', realName = 'No real name', isMutant = false) {
      this.name = name
      this.realName = realName
      this.isMutant = isMutant
    }
  }

  class FlyingAvenger extends JSAvenger {
    flying
    constructor(name, realName, isMutant) {
      super(name, realName, isMutant)
      this.flying = true
    }
  }

  const hulk = new FlyingAvenger('Hulk', 'Bruce Banner', true)

})()
