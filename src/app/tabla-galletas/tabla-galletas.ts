import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla-galletas',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabla-galletas.html',
  styleUrl: './tabla-galletas.css'
})
export class TablaGalletas {
  @Input() dataSource: any[] = []; 
  displayedColumns: string[] = ['id', 'nombre', 'tamano', 'precio', 'cantidad'];
}