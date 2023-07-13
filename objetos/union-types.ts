(() => {
  type Hero = {
    name: string
    age?: number
    powers: string[]
    getName?: () => string
  }

  let myCustomVariable: (string | number | Hero) = 'Hola'
  myCustomVariable = 12
  myCustomVariable = {
    name: 'Luis',
    powers: ['Correr']
  }
})()
