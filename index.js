class Animal {
    constructor(especie, color, edad) {
        this.especie = especie;
        this.color = color;
        this.edad = edad;
    }
    comer() {
        console.log("El Gato está comiendo");
    }
    dormir() {
        console.log("El Gato está durmiendo");
    }
    sonido() {
        console.log("El Gato está maullando");
    }
    
}
const gato1 = new Animal("gato", "gris", 2)
gato1.sonido()


class perro extends Animal{
    sonido(){
        console.log("El perro está ladrando");
        
    }
}
const perro1 = new perro("perro", "marron", 3)
perro1.sonido()
//encapsulacion herencia diagrama de clases
class Persona {
    constructor(Edad, nombre, correo, telefono) {
        this.Edad = Edad;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        
    }
    trabajar() {
        console.log("La persona está trabajando");
    }
    dormir() {
        console.log("La persona está durmiendo");
    }
    ocupacion(){
        console.log("El es un profesor");
        
    }
    ocupacion2(){
        console.log("El es un estudiante");
        
    }
}
const persona1 = new Persona(20, "Estebitan", "anderson@", "666666666")
persona1.ocupacion()

class Estudiante extends Persona{
    constructor(nombre, edad, correo, telefono, curso) {
        super(edad, nombre, correo, telefono);
        this.curso = curso;
    }
    ocupacion2() {
        console.log("El es de la ficha 3203082");
    }
}
const estudiante1 = new Estudiante("3203082")
estudiante1.ocupacion2()

class profesor extends Persona{
    constructor(nombre, edad, correo, telefono, materia) {
        super(edad, nombre, correo, telefono);
        this.materia = materia;
        
    }
    ocupacion() {
        console.log("El es un profesor de Programacion");
    }
}
const profesor1 = new profesor("Programacion")
profesor1.ocupacion()
