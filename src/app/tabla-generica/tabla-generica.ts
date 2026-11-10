import { Component, Input, OnChanges } from '@angular/core';
import { NgFor, TitleCasePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla-generica',
  standalone: true,
  imports: [NgFor, TitleCasePipe, MatTableModule],
  templateUrl: './tabla-generica.html',
  styleUrl: './tabla-generica.css'
})
export class TablaGenerica implements OnChanges {
  // Los datos (cualquier arreglo de objetos)
  @Input() dataSource: any[] = [];

  // Las llaves que se mostrarán como columnas
  @Input() displayedColumns: string[] = [];

  // Títulos personalizados por llave (opcional). Ej: { tamano: 'Tamaño' }
  @Input() titulos: { [llave: string]: string } = {};

  // Llaves que se muestran con el signo $ (opcional). Ej: ['precio']
  @Input() monedas: string[] = [];

  // Si no se indican columnas, se toman las llaves del primer registro
  ngOnChanges() {
    if (this.displayedColumns.length === 0 && this.dataSource.length > 0) {
      this.displayedColumns = Object.keys(this.dataSource[0]);
    }
  }
}
