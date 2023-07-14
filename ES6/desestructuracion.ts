(() => {
  type Avengers = {
    nick: string,
    ironman: string,
    vision: string,
    activo: boolean,
    poder: number
  }

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500
  }

  const { poder, activo, vision } = avengers

  console.log(vision.toUpperCase())

  const printAvenger = ({ vision, ...rest }: Avengers) => {
    console.log(vision)
    console.log(rest.ironman) // Typescript no va a recomendar vision porque sabe lo que hay en el tipo
  }

  printAvenger(avengers)


  // Desestructuracion de arreglos

  const avengersArr: string[] = ['Samuel L. Jackson', 'Robert Downey Jr.', 'Paul Bettany']

  const ironman = avengersArr[1] // Como se hace antes de es6
  const [, ironman2, vision2] = avengersArr // Como se hace ahora en es6

  const avengersTupla: [string, boolean, number] = ['Samuel L. Jackson', true, 1500]
  const [capitan, activo2, poder2] = avengersTupla

  console.log(capitan, activo2, poder2) // Typescript detecta el tipo de dato de cada desestructuracion

})()
