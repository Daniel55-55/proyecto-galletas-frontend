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
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  ngOnChanges() {
    if (this.displayedColumns.length === 0 && this.dataSource.length > 0) {
      this.displayedColumns = Object.keys(this.dataSource[0]);
    }
  }
}
