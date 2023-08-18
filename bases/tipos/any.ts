(() => {
  let avenger: any = 123
  let exists
  let power

  avenger = 'Dr Strange'
  console.log(avenger.charAt(0))
  console.log((avenger as string).charAt(0))

  avenger = 150.232564 // Se le puede cambiar el tipo implicitamente sin problemas porque es un any
})()
