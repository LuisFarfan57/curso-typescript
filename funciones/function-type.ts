(() => {
  const addNumbers = (a: number, b: number): number => a + b
  const greet = (name: string): string => `Hola ${name}`
  const saveTheWorld = function (): string { return `El mundo esta salvado` }

  let myFunction: Function // Decir que se puede igualar a una funcion, cualquiera
  // let myFunction: () => number // Se le puede indicar el tipo de dato que retorna la funciona a la cual se le va a asignar

  // myFunction = 10 // Da error porque no es una funcion
  // console.log(myFunction)

  myFunction = addNumbers
  console.log(myFunction(1, 2))

  myFunction = greet
  console.log(myFunction('Fernando'))

  myFunction = saveTheWorld
  console.log(myFunction())

})()
