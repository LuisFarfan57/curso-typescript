"use strict";
(() => {
    // const hero = ['Dr Strange', 100] // Esto seria un arreglo
    const hero = ['Dr Strange', 100]; // Esto seria una tupla
    // hero[0] = 50 // No deja porque es una tupla y la primera posicion siempre es un string
    hero[0] = '50';
    // Se pueden hacer tuplas con N posiciones
    const hero2 = ['Dr Strange', 100, true];
    hero2[0] = '50';
    hero2[1] = 50;
    hero2[2] = false;
})();
