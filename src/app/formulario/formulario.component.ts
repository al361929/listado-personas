import { Persona } from './../persona.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>(); // NOTE De esta manera estamos creando un nuevo evento para avisar a la clase padre desde la clase hijo
  // NOTE Con esta sintaxis hemos creado un objeto EventEmitter de tipo Persona que posteriormente emitirá un evento
  nombreInput:string;
  apellidoInput:string;

  constructor() {

  }

  ngOnInit(): void {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.emit(persona1);
  }

}
