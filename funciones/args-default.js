"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName || '----'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
