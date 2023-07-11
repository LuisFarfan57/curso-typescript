"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark'); // Typescript no dejaria enviar otro tipo de dato, o no enviar alguno
})();
