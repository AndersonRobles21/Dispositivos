// Dispositivo.js
class Dispositivo {
  #password; // atributo privado

  constructor(marca, modelo, password) {
    this.marca = marca;
    this.modelo = modelo;
    this.#password = password;
  }

  // Método para verificar contraseña
  verificarPassword(pass) {
    return this.#password === pass;
  }

  // Método para mostrar la info básica del dispositivo
  mostrarInfo() {
  return `${this.nombre} - ${this.marca} - ${this.modelo}`;
  }
}

// Clase hija Celular
class Celular extends Dispositivo {
  constructor(nombre, marca, modelo, password) {
    super(nombre, marca, modelo, password);
  }
}

// Clase hija Computador
class Computador extends Dispositivo {
  constructor( marca, modelo, password) {
    super(marca, modelo, password);
  }
}

// Exportamos las clases
export { Dispositivo, Celular, Computador };