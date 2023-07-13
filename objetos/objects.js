"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad']
    };
    flash = {
        name: 'Luis',
        // age: 24,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        },
        // otra: 'Hola' // Error porque no es parte de la definicion
    };
});
