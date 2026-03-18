feat: reduccion de energia y cambio de accion 
//1. Creacion de variables
let nombreHeroe = "Cat Noir";
let nivelEnergia = 1000;
let ciudad = "Paris";
let enemigo = "Shadow Moth";

//2. Mostrar en la pantalla
// El console.log sirve para que la computadora nos hable
console.log("=== INICIO DE LA AVENTURA ===");
console.log(nombreHeroe + " está viajando a " + ciudad);
console.log("Su energía actual es de: " + nivelEnergia);

//3. Cambiar el valor (Algo pasa en la historia)
nivelEnergia = 100; // El héroe se cansó


console.log("--- Noticia de último minuto ---");
console.log(nombreHeroe + " esta viajando a " + ciudad + " con " + enemigo +
    " y ahora por el viaje su energía es " + nivelEnergia);
