//1.EJERCICIOS VARIABLES KAREN SALAZAR//

/*
alert("¡JavaScript funcionando correctamente!")
*/

let variableSinValor;
console.log(variableSinValor);

let boleano1 = true;
let boleano2 = false;

console.log("El valor de boleano1 es: " + boleano1);
console.log("El valor de boleano2 es: " + boleano2);


const PI = 3.14;
const TAU = 2* PI;
console.log("valor de PI es:" + PI)
console.log("valor de TAU:", TAU);

const miNombre= "Karen";
const miNumeroFav = 3;

let esEstudiante = true;

console.log("longitud de miNombre: ", miNombre.length);

console.log("tipo de dato de miNumeroFav:", typeof miNumeroFav);

console.log("Mi nombre es " +miNombre +" y mi numero favorito es " + miNumeroFav)

console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase())

let frase = 'Hola soy un crack';
console.log(frase.slice(0, 5));

let miNumeroFavString = String(miNumeroFav);
console.log("Tipo de dato despues de convertir:", typeof miNumeroFavString);

let pais = "Colombia"
let mensaje = `Vivo en ${pais} y me gusta mucho.`;
console.log(mensaje)

console.log("PI con 2 decimales:", PI.toFixed(2));




//2.EJERCICIOS ARRAYS//


/*arrayvacio*/

let arrayVacio = []

/*arrayConNumeros0a9*/

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/*arrayNumeros0al15*/

let arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/*arrayconNumerosPares*/

let arrayNumerosPares = [0, 2, 4, 6, 8];

/*arrayConNumerosNeg*/

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

/*arrayConPalabras*/

let holaMundo = ['Hola','Mundo'];

/*arrayConDiferentesTiposDeValores*/

let loGuardoTodo = ['Hola','que', 23, 42.33, 'tal'];

/*arrayMatrices*/

let arrayDeArrays = [[756, 'nombre'],[225,'apellido'], [298,'direccion']];

/*longitud de array*/

console.log(loGuardoTodo.length);

/*añadirUnNuevoElementoAlfinalDeArray*/

loGuardoTodo.push('nuevoElemento');
console.log(loGuardoTodo);

/*accederAunElementoEspecifico*/

console.log(loGuardoTodo[1]);

/*añadirOtroElementoAlArray*/

loGuardoTodo.push('Euralio');
console.log(loGuardoTodo);

//3.EJERCICIOS OBJETOS//

let coche = {
marca:'MercedesBenz',
modelo: 'AMG',
matricula: 'KY-5485'
};

let casa = {
    codPostal: '28011',
    calle: 'Av Portugal',
    portal: 5,
    piso: 10
};

let FullStackDeveloper ={
    lenguajes: ['javascript', 'php', 'python'],
    proyectos: ['mi pagina personal', 'aplicacion de videojuegos']
};

let perro = {
    nombre: 'romeo',
    raza: 'chihuahua',
    color: 'blanco',
    edad: '3'
};
let Noticia = {
    titular: 'Vacaciones de Verano',
    cuerpo: 'Disfruta tus vacaciones en la mejor playa del mediterraneo..'

};
let persona = {
    nombre: 'Giancarlo',
    apellidos: 'Salazar',
    edad: 8
};

//Mostrar por consola//
console.log(persona.nombre);

console.log(FullStackDeveloper.lenguajes[0]);

let portatil ={
    marca: 'asusVibook'
};
console.log (portatil.marca);
console.log(portatil["marca"]);

let concierto = {
    grupos: ['salsa','bachata',]
};
console.log(concierto.grupos);

let Led = {

lampara1: 'rojo',
lampara2: 'verde',
lampara3: 'azul'
};

let RGB = [Led.lampara1, Led.lampara2, Led.lampara3];
console.log(RGB);

let O_Error = {
    codigo: 921
};
console.log(O_Error.codigo);

let Grupo = {
    integrantes:['laura','manuela', 'lorena']
};
let integrantes = Grupo.integrantes;
console.log(integrantes[1]);

let Impresora = {
    tinta: {
        rojo: 50,
        verde: 60,
        azul: 40
    }
};

    let nivelesTinta = Impresora.tinta;
    console.log(nivelesTinta);

    let Movil = {
        especificaciones: {
        marca: 'Iphone',
        modelo: '15'}
    };
let especificaciones = Movil["especificaciones"];
console.log(especificaciones);

portatil.marca = 'MSI';
console.log(portatil.marca);

concierto.grupos.push('Guns N\' Roses');
console.log(concierto.grupos);

concierto.fecha = '2024-10-05'; 
console.log(concierto.fecha);

concierto.fecha = new Date(); 
console.log(concierto.fecha);

Grupo.integrantes.pop(); 
console.log(Grupo.integrantes.length); 