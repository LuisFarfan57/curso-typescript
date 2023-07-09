"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const superman = 'Superman';
    const number = 10;
    console.log(`I'm ${batman} ${number}`); // Automaticamente transforma los numeros a string, por eso no se queja
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente'); // ?. es para que no se queje si no esta presente el valor. Devuelve undefined
})();
