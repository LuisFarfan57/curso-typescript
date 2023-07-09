"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    // const fuerzaFlash = 5;
    // const fuerzaSuperman = 100;
    // const fuerzaBatman = 1;
    // const fuerzaAcuaman = 0;
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();