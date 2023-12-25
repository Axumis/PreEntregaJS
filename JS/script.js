//Este programa muestra un menu de productos
//en el que el cliente puede elegir que comprar

//Variables y constantes
const PrecioPanDulce = 2577
const PrecioBudin = 790
const PrecioSidra = 949
let opcion = ""
let cantidad = 0

//Funciones flechas
let comprarPanDulce= (a)=> a*PrecioPanDulce
let comprarBudin= (a)=> a*PrecioBudin
let comprarSidra = (a)=> a*PrecioSidra

//Funcion normal
function listarPrecios(){
    alert('Precio del pan dulce: $' +PrecioPanDulce+ '\n Precio del budin: $' +PrecioBudin+ '\n Precio de la sidra: $' +PrecioSidra)
}

//Programa principal
alert('Bienvenido al negocio Navideño')
do{
opcion = prompt("Que desea hacer\n 1- Comprar pan dulce\n 2- Comprar budin\n 3- Comprar sidra\n 4- Averiguar precios de los productos\n 5- Salir")
switch(opcion){
    case "1":
        cantidad = parseInt(prompt('Cuantos Panes dulces quiere comprar?'))
        console.log("Compro " +cantidad+ " panes dulces a $" + comprarPanDulce(cantidad))
    break;

    case "2":
        cantidad = parseInt(prompt('Cuantos budines quiere comprar?'))
        console.log("Compro " +cantidad+ " budines a $" + comprarBudin(cantidad))
    break;

    case "3":
        cantidad = parseInt(prompt('Cuantas sidras quiere comprar?'))
        console.log ("Compro " +cantidad+ " sidras a $" + comprarSidra(cantidad))
    break;

    case "4":
        listarPrecios()
    break;

    case "5":
        let salir = confirm("Seguro que desea salir?")
        if(salir==true)
            alert('Muchas gracias por elegirnos')
        else
        {
            alert('Algo mas?')
            opcion = ""
        }
    break;

    default:
        alert("Opcion no valida")
    break;
}
}while(opcion!="5")//Termina el programa cuando presiona 5