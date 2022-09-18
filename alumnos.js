let alumno = [
    {
        nombre: "micaela",
        apellido: "umansky",
        dni: 45678267,
        anio: 4,
        curso: "A",
        nota: 8,
    },

    {
        nombre: "micaela",
        apellido: "szmukler",
        dni: 46755821,
        anio: 4,
        curso: "A",
        nota: 5,
    },

    {
        nombre: "santi",
        apellido: "hirsch",
        dni: 47326989,
        anio: 5,
        curso: "A",
        nota: 9,
    },

    {
        nombre: "octavio",
        apellido: "spano",
        dni: 47553284,
        anio: 5,
        curso: "A",
        nota: 3,
    },

    {
        nombre: "martin",
        apellido: "fried",
        dni: 45873446,
        anio: 4,
        curso: "B",
        nota: 6,
    },

    {
        nombre: "abril",
        apellido: "piso martinez",
        dni: 46228903,
        anio: 4,
        curso: "B",
        nota: 7,
    },

    {
        nombre: "luca",
        apellido: "langsam",
        dni: 45612345,
        anio: 3,
        curso: "B",
        nota: 2.5,
    },

    {
        nombre: "ivan",
        apellido: "gallardo",
        dni: 47332507,
        anio: 3,
        curso: "B",
        nota: 4.8,
    },

];

//Ejercicio 2
const capitalizar = (str) => {
    inicial = str[0].toUpperCase(); 
    return inicial + str.slice(1);
}
console.log("Ejercicio 2: " + capitalizar("geografia"));

//Ejercicio 3

const mostrarAlumno = (alumno) => {
    console.log("DNI: " + alumno.dni);
    console.log("Nombre y Apellido: " + alumno.nombre + " " + alumno.apellido);
    console.log("Curso: "+ alumno.anio + "°"+alumno.curso);
    console.log("Nota: " + alumno.nota);
};
console.log("\nEjercicio 3: ");
mostrarAlumno(alumno[3]);

//Ejercicio 4
 alumno.map((elemento) =>{

    elemento.nombre= capitalizar(elemento.nombre); 
    elemento.apellido= capitalizar(elemento.apellido);
    console.log("\nEjercicio 4: " + elemento.nombre + " " + elemento.apellido);
});     


//Ejercicio 5
console.log("\nEjercicio 5: ");
let ArrayMostrarAlumnos = alumno.map((elemento) => mostrarAlumno(elemento));

//Ejercicio 6
const notaAlumno = (alumno) => {
    console.log("\nNombre y Apellido: " + alumno.nombre + " " + alumno.apellido);
    console.log("Nota: " + alumno.nota);
};

console.log("\nEjercicio 6: ");
let AlumnosAprobados = alumno.filter((elemento) => elemento.nota >= 6);
AlumnosAprobados.map((y) => notaAlumno(y));

//Ejercicio 7
const cursoAlumno = (alumno) => {
    console.log("\nNombre y Apellido: " + alumno.nombre + " " + alumno.apellido);
    console.log("Curso: "+ alumno.anio + "°"+alumno.curso);
};

console.log("\nEjercicio 7: ");
let AlumnosB = alumno.filter((elemento) => elemento.anio === 4);
AlumnosB.map((y) => cursoAlumno(y));

//Ejercicio 8
console.log("\nEjercicio 8: ");
let AlumnosCuarto = alumno.filter((elemento) => elemento.curso === "B");
AlumnosCuarto.map((y) => cursoAlumno(y));