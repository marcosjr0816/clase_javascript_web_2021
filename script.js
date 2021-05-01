// Hola mundo
//alert('Hola Mundo');

// Comentarios

//Comentario de línea
/* Comentario de mas 
de una línea
*/




// Sentencias

//alert('Hola'); alert('Mundo');

//alert('Hola'); 
//alert('Mundo');


// inserción automática de punto y coma

//alert('Hola')
//alert('Mundo')

// Variables

let mensaje;
mensaje = "Hola Mundo"
//alert(mensaje)

let c=5, d=2, j = 3;

let a = 5;
let b = 6;
let suma = a + b;
console.log("El resultado de la suma es: ",suma);

b = 7
console.log(b)

let nombre = "Marco";
let nombre_dos = nombre;

nombre_dos = "Carlos";
console.log("El nombre uno es: ",nombre);
console.log("El nombre dos es: ", nombre_dos);


// Nombrar variables con camel case
nombreUno = "Marco";
nombreDos = "Antonio";

// Nombrar como underscore
nombre_uno = "Marco";
nombre_dos = "Antonio";

// nombres no comunes
let $ = 1;
let _ = 2;

//no puede nombrar variables

/*let 1a = 3;
let primer-nombre = 4;*/

"use strict"
mensaje = "Hola Mundo";


// Constantes

const PI = 3.141624;
const COLOR_ROJO = "#FFFFF";
pi_dos = PI;
pi_dos = 7;
console.log(PI);
console.log(pi_dos);

//const id_account = get_id_account(45);

// Tipos de datos

// Dinámicamente tipado

let mensaje_tres = "Hola";
mensaje_tres = 12234

// Tipo de dato Number
let n = 123;
n = 12.456;

// Valores numéricos especiales Infinity, -Infinity y NaN

// Infinity: representa el infinito matemático. Es un valor epecial que es mayor que cualquier número;

console.log(1 / 0);
console.log(Infinity)

// NaN representa un error de cálculo. Es el resultado de una operación 
// matemática incorrecta o indefinida

console.log("no es un número" / 2);

// NaN es pegajoso. Cualquier operación sonbre NaN devuelve NaN

console.log("no es un número" / 2 +  5);

// Tipo de datos BigInt


// Valores enteros mayores que (2^53-1) o menor que -(2^53-1) 9.007.199.254.740.991

let numero_grande = 12345678990122334456567124444444324;
//console.log(numero_grande);

// Tipo String
let t = "a";
let texto = "Hola";
let texto_dos = 'hola';
let texto_tres = ``;  //backticks funcionalidad extendida
let nomb = "Roberto";
//console.log("Hola", nomb);
//console.log('Hola', nomb);
//console.log(`Hola`, nomb);

/*
console.log("Hola ${nomb}");
console.log('Hola ${nomb}');
console.log(`Hola ${nomb}`);*/

// Tipo Booleano

// true y false

let verdadero = true;
let falso = false;

let mayor = 4 > 1; //True

// Valor null

// Valor especial que no pertenece a ningun tipo de dato anterior. 
// Forma un tipo propio separado que contiene sólo el valor null.

let edad = null;
//console.log(edad);

// en JS null NO significa un objeto no existente
// Es sólo un valor especial que representa nada, vacío o valor desconocido.

// valor Undefined

// Valor especial que no pertenece a ningún tipo de dato anterior.
// El significado de undefined es valor no asignado.

let edad_dos;
//console.log(edad_dos);


// El operador typeof o función typeof(x), devuelve el tipo de dato.

/*console.log(typeof undefined); //undefined
console.log(typeof 0); //number
console.log(typeof true); //boolean
console.log(typeof 10n); //bigint
console.log(typeof "Hola"); //string
console.log(typeof(alert)); // function **
console.log(typeof(null)); // object - ERROR DE JAVASCRIPT
console.log(typeof(Math)); // object*/

// Interacciones: alert, prompt, confirm

// alert

// alert('Hola Mundo');

// prompt

//let nombre_capturado = prompt('Digite el nombre', 'Hola');
//alert(nombre_capturado);

//prompt('Digite el nombre')
//prompt('Digite el nombre', '') //solo para IE

// Confirm

//let esHelado = confirm('¿Te gusta el helado?');
//console.log(esHelado); // true si presionan OK y false si presionan cancelar

// CONVERSIÓN DE TIPOS

// Existen dos tipos de conversiones explícita e implícita

//Convertir a String

let valor = true;
console.log(typeof valor);

valor = String(valor); // "true"
valor = String(false); // "false"
valor = String(null); // "null"
valor = String(undefined); //undefined
console.log(valor);
console.log(typeof valor);

// Convertir a Número

// Conversiones númericas ocurren automáticamente en funciones matemáticas y expresiones

//alert('6' / '2'); // 3
//alert(1 + '2'); //'12'
//alert('1' + 2); //'12'

let cadena = "123"
let num_cad = Number(cadena); // 123

console.log(Number('hola')); //NaN

/*
TABLA CONVERSIÓN NÚMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/

// Convertir a Boleano

console.log(Boolean("hola"))

/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/

console.log(Boolean(String(0)))
console.log(Boolean(0))

// OPERADORES BÁSICOS

// Operadores unarios y binarios

let  res;
a = 5;
b = 2;

// Operadores Binarios

res = a + b;
res = a - b;
res = a * b;
res = a / b;
res = a % b; // mod
res = a ** b; // potencia

//alert('1' + 2); //12
//alert(1 + '2'); // 12

//alert(2 + 2 + '1') //41
//alert('1' + 2 + 2) //122

//alert(2 - '1'); // 1
//alert('6' / '2'); // 3
//alert('6' / '2a'); // 

// Operaciones Unaria +

a = 1;
console.log(+a);

a = -1;
console.log(+a);

console.log(+true);
console.log(+false);
console.log(+NaN);
console.log(+undefined);
console.log(+null);
console.log(+"");

a = "2";
b = "3";

console.log(+a + +b);
console.log(Number(a)+Number(b))


// Operaciones Unaria -

a = 1;
console.log(-a);

a = -1;
console.log(-a);

console.log(-true);
console.log(-false);

// ASIGNACIONES

a = 2 + 3;
a = b = c = 2 + 3;

c = 2 + 3;
b = c;
a = b;

c = 3 - (a = b + 1);

// Modificadores

a = a + 2;
a += 2;
a = a - 2
a -= 2;

// Incremento y Decremento

// ++ Incremento
// -- Decremento

a = 2;
a ++;
console.log(a); // 3

a = 2;
a --;
console.log(a); // 1

// Posición del incremento o decremento

a = 1;
b = ++ a;
console.log(b); // 2

a = 1;
b = a ++;
c = a;
console.log(b); // 1
console.log(c); // 2