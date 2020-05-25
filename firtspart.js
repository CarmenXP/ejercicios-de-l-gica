// RESPUESTAS DEL PROF JHON MIRCHA
//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

//function contarLetras(cadena=""){
//    if(!cadena){
//        console.warn("no se ingreso texto")
//    } else{
       // console.info(`La cadena de texto  "${cadena}" tiene "${cadena.length}" caracteres.`);
   // }   
//}
//con arrow functions
//const contarLetras= (cadena="")=> (!cadena)?console.warn("no se ingreso texto"):console.info(`La cadena de texto  "${cadena}" tiene "${cadena.length}" caracteres.`)
//
//contarLetras();
//contarLetras("Hola mundote");

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
//const recortarTexto= (texto="", cortador=undefined)=>
//(!texto)
//?console.warn("no ingresaste texto")
//:(cortador===undefined)
//?console.warn("no ingresaste en número de cortador")
//:console.info(texto.slice(0,cortador));
//recortarTexto("hOLA MUNDO", 4);
//recortarTexto();
//recortarTexto("hola mundazo");
//recortarTexto("",5);
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
//const devolviendoArray= (texto="", separador=undefined)=>
//(!texto)
//?console.warn("no ingresaste texto")
//:(separador===undefined)
//?console.warn("no ingresaste el número de separador")
//:console.info(texto.slice(0,separador))
//
//devolviendoArray("Hola mundo mundazo", 4);
//devolviendoArray("Hola hola");
//devolviendoArray("",5);

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
/*const repetirTexto= (texto="", repeticion=undefined)=>{
    if(!texto) return console.warn("No ingresaste texto");
    if(repeticion===undefined)return console.warn("no ingresaste en número de repeticiones");
    if(repeticion===0)return console.error("número 0 no es válido");
    if(Math.sign(repeticion)===-1)return console.error("el número de repeticiones no puede ser negativo");
    for(let i=1; i<=repeticion; i++)console.info(`${texto},${i}`);
}
repetirTexto("hola gato");
repetirTexto();
repetirTexto("",8);
repetirTexto("hola gato", 3);
repetirTexto("hola", 0);
repetirTexto("hola", -3);*/


//MIS RESPUESTAS CARMEN
// resolución ejercicio 1 
/*function counter(x){
    return x.length 
}
let length= counter("hola mundo")
console.log(length);*/
// resolución ejercicio 2, dos soluciones conmétod split y slice
/*function split(palabra, numero, numero1){
    let palabraCortada= palabra.split(numero, numero1);
    return palabraCortada

}
let cut = split("Hola hola a todo el mundo", " ");
cut2= split("Hola hola a todo el mundo", " ", "2");

console.log(cut); 
console.log(cut2);

function slice(texto, numero, numero1){
    let palabrarebanada= texto.slice(numero, numero1);
    return palabrarebanada
}
let resultado = slice("Hola a todos", "0", "10");
console.log(resultado);
//aclarando dudas
let example= "0123456789";
cortado= example.slice(2,8); // resultad0 234567
console.log(cortado)*/

// resolución del ejercicio 3
/*function array(texto, separador){
    let separaciones= texto.split(separador)
    return separaciones

}
let resultado= array("Hola qué tal!", " ");
console.log(resultado)*/

//resolución al ejercicio 4 

/*   for (let i= 0; i < 3; i++ ){
        console.log("Hola mundo!");
    }

    function repeticion(texto, repeticion){
        for ( i=1; i<=repeticion; i++ ){
            console.info(`${texto} , ${i}`);
        }
    }
    repeticion("hola hola", 7); */
