//Primera parte
interface estudiante {
    nombre:string;
    edad:number
    curso:string
    direccion:direccion
}

interface direccion {
    calle:string
    ciudad:string
    pais:string
}

const estudiante = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas',
    direccion: {
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
    },
    mostrarInfo() {
        return `${this.nombre} estudia ${this.curso} en
${this.direccion.ciudad}`;
    }
};
console.log(estudiante.mostrarInfo());


//2
interface producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    mostrarDetalle(): string;
}

const producto = {
    id: 1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle() {
        return `${this.nombre} cuesta $${this.precio} y hay ${this.stock}
unidades disponibles`;
    }
};
console.log(producto.mostrarDetalle());


//3
interface Pelicula {
    titulo: string;
    director: string;
    duracion: number;
    genero: string;
    reproducir(): string;
}

const pelicula: Pelicula = {
    titulo: 'Avengers: Endgame',
    director: 'Anthony y Joe Russo',
    duracion: 181,
    genero: 'Acción',
    reproducir() {
        return `Reproduciendo: ${this.titulo} dirigida por ${this.director}`;
    }
};

console.log(pelicula.reproducir());


//4
interface Vehiculo {
    marca: string;
    modelo: string;
    anio: number;
    encender(): string;
}

const vehiculo: Vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    encender() {
        return `${this.marca} ${this.modelo} está encendido`;
    }
};

console.log(vehiculo.encender());


//5
interface Usuario {
    username: string;
    password: string;
    roles: string[];
    login(): string;
}

const usuario: Usuario = {
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
        return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`;
    }
};

console.log(usuario.login());


//Segunda parte
// Error: "true" no es un tipo válido. Debe usarse el tipo boolean en su lugar.
let myValue: number | string | boolean = 10;

// Error: El tipo correcto en TypeScript es boolean (en minúscula), no Boolean.
let myBoolean: boolean = true;

// Error: Se asigna un string cuando la variable está definida como number.
let healthPoints: number = 150; 

// Error: Solo se permite el literal "myTag", no cualquier cadena.
let otherMultipleDataType: number | boolean | "myTag" = "myTag";

// Correcto: Al no declararse un tipo, myVar es de tipo any de forma implícita.
let myVar;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};

// Error: Una constante debe inicializarse en el momento de la declaración.
const myConstant: number = 10; 

// Error: El tipo inferido fue string, por lo tanto no puede asignarse un número después.
// Se soluciona declarando la unión string | number.
let inferedDataType: string | number = "Texto inicial"; 
inferedDataType = 123; 

// Error: El valor 1 no es booleano, debe usarse true o false.
const isActive: boolean = true;

// Error: El tipo declarado no admite valores booleanos.
let mixed: number | string | boolean = true; 

// Error: "while" es una palabra reservada, no puede usarse como nombre de variable.
let whileVar: string = "Hola"; 

// Error: "numer" no existe como tipo, lo correcto es "number".
let myNumber: number = 10; 

// Error: Se está incluyendo un string dentro de un arreglo de números.
// Se corrige usando una unión de number y string.
let numeros: (number | string)[] = [1, 2, 3]; 

// Error: La tupla requiere dos valores, uno string y otro number.
let tupla: [string, number] = ["Hola", 123]; 

// Error: Los tipos de la tupla están invertidos.
let otraTupla: [string, boolean] = ["Hola", true]; 

// Error: null no es asignable a string con las opciones estrictas activadas.
// Se soluciona usando una unión string | null.
let texto: string | null = "Hola mundo"; 
texto = null;

// Error: "amarillo" no forma parte de los literales permitidos.
let color: "rojo" | "verde" | "azul" = "rojo"; 

// Correcto: any permite cualquier operación, aunque no es recomendable.
// Se usa toString() en lugar de toUpperCase() para un número.
let valor: any = 10;
valor.toString(); 

// Correcto en su declaración, pero al ser const no puede reasignarse.
// Por lo tanto no es válido hacer version = 2.0.
const version: number = 1.0;

// Error: La propiedad "apellido" no estaba definida en el objeto original.
// Se corrige agregándola como opcional en el tipo.
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz"; 

// Error: undefined no puede asignarse a number directamente.
// Se corrige usando la unión number | undefined.
let edad: number | undefined = undefined; 


// Salida
console.log("myValue:", myValue);
console.log("myBoolean:", myBoolean);
console.log("healthPoints:", healthPoints);
console.log("otherMultipleDataType:", otherMultipleDataType);
console.log("myVar:", myVar);
console.log("myConstant:", myConstant);
console.log("inferedDataType:", inferedDataType);
console.log("isActive:", isActive);
console.log("mixed:", mixed);
console.log("whileVar:", whileVar);
console.log("myNumber:", myNumber);
console.log("numeros:", numeros);
console.log("tupla:", tupla);
console.log("otraTupla:", otraTupla);
console.log("texto:", texto);
console.log("color:", color);
console.log("valor:", valor);
console.log("version:", version);
console.log("persona:", persona);
console.log("edad:", edad);
