// Entradas de datos
 var 
    prompt = letras
    parseInt = numeros enteros
    parseFloat = numeros decimales    
*/


//Salidas de datos

/*
    alert
    document.write
    console.log
   
   
 //Tipos de datos
var cadena_texto = "Esto es un string";
var ejemplo_numero = 55;
var un_booleano = false;
var numero_falso = "55";

//typeof se utiliza para determinar el tipo de
console.log(typeof(cadena_texto));
console.log(typeof(ejemplo_numero));
console.log(typeof(un_booleano));
console.log(typeof(numero_falso)); */
    
    
//Ejercicios de ingresos y salidas de datos

var nombre = prompt("Escribe tu nombre aquí: ");
var apellido = prompt("Escribe tu apellido: ");

var numero1 = 12;
var numero2 = 10;

//alert(nombre);
//document.write(nombre);
console.log(nombre + " " + apellido);
console.log(numero1+numero2);
console.log(numero1-numero2);
console.log(numero1*numero2);
console.log(numero1/numero2);

//Condicionales

// Mayor qué >
// Menor qué <
// Igual qué =

var numero1 = parseInt(prompt("Ingrese un número"));
var numero2 = parseInt(prompt("Ingrese otro número"));

 if(numero1 > numero2){
    alert("Número 1 es mayor a número 2.");
}else if(numero1 < numero2){
    alert("Número 1 es menor a número 2")
}else if(numero1 = numero2){
    alert("Número es igual a número 2")
} 
*/

//Ejercicios de condicionales

//Vamos a pedirle al usuario que ingrese su edad. x
//Si es mayor a 12, aparecerá una alerta que puede ingresar.
//Si es menor a 12, aparecerá en EL DOCUMENTO que NO puede ingresar.

var edad = parseInt(prompt("Ingrese su edad"));


if(edad > 12){
    alert("Bienvenido/a, puedes ingresar");
}else if (edad < 12){
    document.write("Eres menor a 12. No puedes ingresar");
}
