import { Component, Input } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from '@ionic/angular';

// Paso 3: el encabezado que antes estaba copiado en home y en acerca vive aquí
// una sola vez. Cada página lo usa pasándole lo que cambia.
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
})
export class EncabezadoComponent {
  @Input() titulo = 'Mi App'; // lo que dirá la barra
  @Input() volverA?: string; // si llega, muestra el botón atrás
}
