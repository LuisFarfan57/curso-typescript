(() => {
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`
  }

  const name = fullName('Tony', 'Stark') // Typescript no dejaria enviar otro tipo de dato, o no enviar alguno
})()
