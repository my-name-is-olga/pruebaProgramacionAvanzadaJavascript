const soundPath = "./assets/sounds";

export class Animal {
  constructor(nombre, edad, img, comentarios) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
  }

  getNombre() {
    return this._nombre;
  }

  getEdad() {
    return this._edad;
  }

  getImg() {
    return this._img;
  }

  setComentarios(comentarios) {
    this._comentarios = comentarios;
  }

  playSound(rutaSonido) {
    const audio = new Audio(soundPath + rutaSonido);
    audio.play();
  }
}

export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios) {
    super(nombre, edad, img, comentarios);
  }
  rugido() {
    this.playSound("Rugido.mp3");
  }
}

export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios) {
    super(nombre, edad, img, comentarios);
  }
  aullido() {
    this.playSound("Aullido.mp3");
  }
}

export class Oso extends Animal {
  constructor(nombre, edad, img, comentarios) {
    super(nombre, edad, img, comentarios);
  }
  grunido() {
    this.playSound("Grunido.mp3");
  }
}

export class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios) {
    super(nombre, edad, img, comentarios);
  }
  siseo() {
    this.playSound("Siseo.mp3");
  }
}
console.log("Siseo");

export class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios) {
    super(nombre, edad, img, comentarios);
  }
  chillido() {
    this.playSound("Chillido.mp3");
  }
}
console.log("Chillido");
