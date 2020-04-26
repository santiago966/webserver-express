const hbs = require('hbs');
//helpers
//sirve para el footer, en caso de que haya varias ventanas con lo mismo
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});