(() => {
  class Avenger {
    constructor(
      private name: string,
      public realName?: string,
    ) { }

    get fullName(): string {
      return `${this.name} ${this.realName}`
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre es muy corto')
      }
      this.name = name
    }
  }


  const ironman: Avenger = new Avenger('Ironman', 'Tony Stark')

  console.log(ironman.fullName)
  ironman.fullName = 'Luis'

})()
