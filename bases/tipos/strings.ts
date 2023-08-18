(() => {
  const batman: string = 'Batman'
  const superman: string = 'Superman'

  const number: number = 10

  console.log(`I'm ${batman} ${number}`) // Automaticamente transforma los numeros a string, por eso no se queja
  console.log(batman[10]?.toUpperCase() || 'No esta presente') // ?. es para que no se queje si no esta presente el valor. Devuelve undefined
})()
