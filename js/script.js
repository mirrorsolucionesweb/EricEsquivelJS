alert("Bienvendo al sistema de seleccion de cerraduras de Full Lock Sytem")

let blindada = prompt("¿Es una puerta blindada?");
switch(blindada){
    case "no":
        alert("Puede continuar")
    break;

    default:
     alert("No trabajamos en puertas blindadas")
    break;
}
//Aca mi primer problema, no trabajamos en puertas blindadas. Por lo tanto quiero que la app corte su funcionamiento cuando el usuario indique que la puerta sea blindada.

let espesor = parseInt(prompt("Indique el Espesor de la puerta EN MILÍMETROS"));
let bocaDeLlave = parseInt(prompt("Indique distancia de boca de llave al borde de la puerta EN MILÍMETROS"));
let pestaña = parseInt(prompt("Indique espesor de la pestaña del marco EN MILÍMETROS"));
console.warn("Paso 1: Control de espesor")
console.log(espesor);
if(espesor < 30){
    console.warn("No se peude adaptar ninguna cerradura, el espesor minimo tiene que ser de 3cm")
}else if(espesor < 45){
    console.log("No se pueden adaptar las Face One, las Blugate New Plus ni las Blugate de la linea 80, el espesor minimo debe ser de 4.5cm")
}else if(espesor >= 45){
    console.log("El espesor de la puerta se adapta a cualquiera de nuestras cerraduras")
}
console.warn("Paso 2: Control de Boca de Llave")
console.log(bocaDeLlave);

if(bocaDeLlave < 30){
    console.log("Se recomienda mortise de 35mm")
}else if((bocaDeLlave > 30 ||bocaDeLlave <= 40)){
    console.log("Se recomienda moritse de 40mm")
}else if(bocaDeLlave > 40 || bocaDeLlave <=45){
    console.log("Se recomienda moritse de 45mm") //Aqui mi segundo problema, no importa la medida que ingrese, siempre me recomienda el mortise de 40mm
}else if(bocaDeLlave > 45 || bocaDeLlave <=60){
    console.log("Se recomienda mortise de 60mm")
}
console.warn("Paso 3: Control de Pestaña de Marco")
console.log(pestaña);

//Falta todavia...








