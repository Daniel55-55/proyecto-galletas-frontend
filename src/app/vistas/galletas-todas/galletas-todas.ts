import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TablaGenerica } from '../../tabla-generica/tabla-generica';
import { GalletasService } from '../../Services/galletas.service';

@Component({
  selector: 'app-galletas-todas',
  standalone: true,
  imports: [TablaGenerica],
  templateUrl: './galletas-todas.html',
  styleUrl: './galletas-todas.css'
})
export class GalletasTodas implements OnInit {
  galletas: any[] = [];

  // Las columnas se definen por llaves (así se llaman en la base de datos)
  columnas: string[] = ['id', 'nombre', 'tamano', 'precio', 'cantidad', 'tipo'];
  titulos: { [llave: string]: string } = { tamano: 'Tamaño' };
  monedas: string[] = ['precio'];

  constructor(private galletasService: GalletasService) {}

  ngOnInit() {
    forkJoin([
      this.galletasService.obtener('chocolate'),
      this.galletasService.obtener('vainilla')
    ]).subscribe(([chocolate, vainilla]) => {
      this.galletas = [...chocolate, ...vainilla];
    });
  }
}
