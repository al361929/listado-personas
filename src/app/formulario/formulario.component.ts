import { Persona } from './../persona.model';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>(); // NOTE De esta manera estamos creando un nuevo evento para avisar a la clase padre desde la clase hijo
  // NOTE Con esta sintaxis hemos creado un objeto EventEmitter de tipo Persona que posteriormente emitirá un evento
  //nombreInput:string;
  //apellidoInput:string;
  // NOTE Se comenta porque hemos pasado a utilizar variables locales del modelo html

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor() {

  }

  ngOnInit(): void {
  }

  onAgregarPersona(){ // NOTE Como utilizamos una variable local en el modelo, lo que se le pasa al método es un objeto de tipo HTMLInputElement
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value); // NOTE Mediante el atributo value obtenemos el valor de la variable
    this.personaCreada.emit(persona1);
  }

}
