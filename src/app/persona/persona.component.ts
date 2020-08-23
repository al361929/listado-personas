import { Persona } from './../persona.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input () persona: Persona; // NOTE El decorador Input sirve para indicar a la clase que se le pasa un parámetro desde la clase padre
                              // NOTE Para pasar el elemento desde la clase padre se pone [elemento]="nombreElemento" en el modelo de la clase padre
                              // NOTE De esta manera estamos aplicando la propiedad el property-binding entre componentes
  @Input () indice: number;

  constructor() { }

  ngOnInit(): void {
  }

}
