export const printObject = (argument: any) => {
  console.log(argument)
}

// export function genericFunction(argument: any) {
//   return argument
// }
export function genericFunction<T>(argument: T): T {
  return argument
}

export const arrowGenericFunction = <T>(argument: T): T => {
  return argument
}
