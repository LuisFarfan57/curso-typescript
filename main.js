"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerzas;
    (function (fuerzas) {
        fuerzas[fuerzas["flash"] = 5] = "flash";
        fuerzas[fuerzas["superman"] = 100] = "superman";
        fuerzas[fuerzas["batman"] = 1] = "batman";
        fuerzas[fuerzas["acuaman"] = 0] = "acuaman";
    })(fuerzas || (fuerzas = {}));
    const fuerzaFlash = fuerzas.flash;
    const fuerzaSuperman = fuerzas.superman;
    const fuerzaBatman = fuerzas.batman;
    const fuerzaAcuaman = fuerzas.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    };
    const { poder, activo, vision } = avengers;
    console.log(vision.toUpperCase());
    const printAvenger = (_a) => {
        var { vision } = _a, rest = __rest(_a, ["vision"]);
        console.log(vision);
        console.log(rest.ironman);
    };
    printAvenger(avengers);
    const avengersArr = ['Samuel L. Jackson', 'Robert Downey Jr.', 'Paul Bettany'];
    const ironman = avengersArr[1];
    const [, ironman2, vision2] = avengersArr;
    const avengersTupla = ['Samuel L. Jackson', true, 1500];
    const [capitan, activo2, poder2] = avengersTupla;
    console.log(capitan, activo2, poder2);
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    const captainAmerica = {
        name: 'Capitan America',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
});
(() => {
    const nombre = 'Fernando';
    const getName = () => {
        console.log('Viejo getName');
    };
})();
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        get fullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    console.log(wolverine.name + ' ' + wolverine.salvarMundo());
    console.log(magneto.name + ' ' + magneto.conquistarMundo());
    const printName = (personaje) => {
        console.log(personaje.fullName);
    };
    printName(wolverine);
    printName(magneto);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan');
    console.log(antman);
    console.log(Avenger.avgAge);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
        getFullProtectedName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullProtectedName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        get fullName() {
            return `${this.name} ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre es muy corto');
            }
            this.name = name;
        }
    }
    const ironman = new Avenger('Ironman', 'Tony Stark');
    console.log(ironman.fullName);
    ironman.fullName = 'Luis';
})();
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        bio() {
            return this.createBio();
        }
        createBio() {
            return `${this.name} (${this.team})`;
        }
        static getAvgAge() {
            return this.avgAge;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el ÚNICO');
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis2, apocalipsis3);
})();
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName || '----'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Kent', 'Joseph');
    console.log(superman);
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = function () { return `El mundo esta salvado`; };
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Fernando'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad']
    };
    flash = {
        name: 'Luis',
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        },
    };
});
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad']
    };
    flash = {
        name: 'Luis',
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        },
    };
});
(() => {
    let myCustomVariable = 'Hola';
    myCustomVariable = 12;
    myCustomVariable = {
        name: 'Luis',
        powers: ['Correr']
    };
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.232564;
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'hola'];
    const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true];
    numbers.forEach((x) => {
    });
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio');
})();
(() => {
    let nada = undefined;
    let posibleNumero = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    let villanos = 10;
    if (avengers > villanos) {
        console.log('Estamos salvados');
    }
    else {
        console.log('Estamos muertos');
    }
})();
(() => {
    var _a;
    const batman = 'Batman';
    const superman = 'Superman';
    const number = 10;
    console.log(`I'm ${batman} ${number}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerzas;
    (function (fuerzas) {
        fuerzas[fuerzas["flash"] = 5] = "flash";
        fuerzas[fuerzas["superman"] = 100] = "superman";
        fuerzas[fuerzas["batman"] = 1] = "batman";
        fuerzas[fuerzas["acuaman"] = 0] = "acuaman";
    })(fuerzas || (fuerzas = {}));
    const fuerzaFlash = fuerzas.flash;
    const fuerzaSuperman = fuerzas.superman;
    const fuerzaBatman = fuerzas.batman;
    const fuerzaAcuaman = fuerzas.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const hero = ['Dr Strange', 100];
    hero[0] = '50';
    const hero2 = ['Dr Strange', 100, true];
    hero2[0] = '50';
    hero2[1] = 50;
    hero2[2] = false;
})();
(() => {
    function callSuperman() {
        return;
    }
    const callBatman = () => {
        return;
    };
    const a = callBatman();
})();
//# sourceMappingURL=main.js.map