export class Persona { //NOTE export sirve para que podamos usar la clase en otros ficheros
  // nombre:string;
  // apellido:string;

  // constructor(nombre:string, apellido:string){
  //   this.nombre = nombre;
  //   this.apellido = apellido;
  // }
  // NOTE esta sintaxis es más extensa, la siguiente es más simplificada
  // NOTE PRUEBA DEL GIT HUB
  // NOTE PRUEBA 2
  // NOTE PRUEBA 3
  // NOTE PRUEBA 5

  constructor(public nombre: string, public apellido: string) { } //NOTE al añadir public estamos creando los atributos y asignando los valores desde este constructor

}
