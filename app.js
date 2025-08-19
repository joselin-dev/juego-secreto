/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del numero secreto";

let parrafo =document.querySelector("p");
parrafo.innerHTML = "Escoge un numero del 1 al 10"

function intentoDeFuncion() {
    alert("click desde el boton")
}*/

//------------

let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteado = [];
let numeromaximo = 10;





function asignacionTexto(elemento, texto) {
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario > 10 || numeroUsuario <= 0 ){
        alert(`Coloca un numero entre 1 y ${numeromaximo}`)
        limpiarCaja()
        return
    }
    //console.log(intentos);

    if(numeroUsuario === numeroSecreto) {
        asignacionTexto("p", `Acertaste el numero en ${intentos} ${intentos > 1 ? "veces" : "vez"}`);

        

        document.getElementById("reiniciar").removeAttribute("disabled")
    } else{
        if (numeroUsuario < numeroSecreto){
            asignacionTexto("p", "El numero Secreto es mayor");
        }else{
            asignacionTexto("p", "El numero Secreto es menor");
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeromaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    if (listaNumeroSorteado.length == numeromaximo){
        asignacionTexto("p" , `Ya se sortearon todos los numero`);
        

    }else{

        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
            
            // recursividad 
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    
    }

}

function condicionesInicial(){
    asignacionTexto("p" , `Indica un numero del 1 al ${numeromaximo}`);
    asignacionTexto("h1" , "Juego del numero secreto!");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}


function reiniciarJuego(){
    // limpiar caja 
    limpiarCaja();

    //mensaje inicial
    //generar el numero numero secreto
    //reiniciar el numeros de intentos 
    condicionesInicial();
    
    // desabilitar el cuadro de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", true)

}

condicionesInicial()

//-------------

/*function mensaje(nombre) {
   return nombre * 2;
}
let valor = mensaje(4);
console.log(valor);*/

//-----------

/*function promedio(valor1, valor2, valor3) {
   return (valor1 + valor2 +valor3) / 3;
}
let producto = promedio(3,6,9);
console.log(producto);

 ------------*/

/*function promedio(valor1, valor2) {
   if (valor1 > valor2) {
    return console.log(valor1);
   } else {
    return console.log(valor2);
   }
}
promedio(11, 34);

// codigo resumido 

function promedio(valor1, valor2) {
   return valor1 > valor2 ? valor1 : valor2;
}
let mayor = promedio(3,9);
console.log(mayor)*/

//------------

/*function multiplicar(valor1) {
   return valor1 * valor1;
}
let mayor = multiplicar(9);
console.log(mayor)
*/

//----- Crea una función que calcule el valor del factorial de un número pasado como parámetro.

/*function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);*/

//--------

/*function convertir(dolares) {
    let cotización = 3.568
    return dolares * cotización
}

let soles = convertir(100)
console.log(soles)*/

//------

/*function rectangulo(base, altura){
    let area = base * altura
    let perimetro = 2*(base + altura)
    console.log(`el area del regtangulo es ${area} y el perimetro es ${perimetro}`)

}

rectangulo(10,6)*/

//-----

/*function tabla(numero) {
    let n = 0
    while(n <= 10){
        let resultado = numero * n
        console.log(` ${numero} x ${n} = ${resultado} `)
        n++
    }
}

tabla(8)*/

//------ desafio lista
//----- mostrar los elementos de una lista 
/*let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLista(){
    for (let index = 0; index < lenguagesDeProgramacion.length; index++) {
        console.log(lenguagesDeProgramacion[index]);
        
    }
}

mostrarLista()*/


//--------- mostrar lsita de forma inversa

/*let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLista(){
    for (let index = lenguagesDeProgramacion.length -1; index >= 0; index--) {
        console.log(lenguagesDeProgramacion[index]);
        
    }
}

mostrarLista()*/

//---------

//Crea una función que calcule el promedio de los elementos en una lista de números.

/*function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
  //--- forma larga suma = suma + lista[i]
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);

console.log('Média:', media);*/
