// import { Hero } from "./classes/Hero"

import { arrowGenericFunction, genericFunction, printObject } from "./generics/generics";
import { Hero } from "./interfaces/hero";
import { Villian } from "./interfaces/villian";

// const hero = new Hero('Superman', 2, 30)


// printObject('Hola')
// printObject(1)
// printObject({ a: 1, b: 2 })
// printObject([1, 2, 3, 4, 5])

// console.log(genericFunction(3.141516).toFixed(2)) // No da recomendaciones porque no sabe que retorna
// console.log(genericFunction('Hola Mundo').toUpperCase())
// console.log(arrowGenericFunction(3.141516, 'Hola Mundo'))

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

// console.log(arrowGenericFunction<Hero>(deadpool).dangerLevel) // Se queja porque dangerLevel no es parte de Hero
console.log(arrowGenericFunction<Villian>(deadpool).dangerLevel) // Pero se le puede indicar que es tipo Villano
