import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { NgFor, TitleCasePipe } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla-generica',
  standalone: true,
  imports: [NgFor, TitleCasePipe, MatTableModule, MatPaginatorModule],
  templateUrl: './tabla-generica.html',
  styleUrl: './tabla-generica.css'
})
export class TablaGenerica implements OnChanges {
  @Input() dataSource: any[] = [];
  displayedColumns: string[] = [];
  datosPaginados = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) set paginator(pager: MatPaginator) {
    if (pager) {
      this.datosPaginados.paginator = pager;
    }
  }

  ngOnChanges() {
    this.displayedColumns = this.dataSource.length > 0 ? Object.keys(this.dataSource[0]) : [];
    this.datosPaginados.data = this.dataSource;
  }
}
