import { Component, OnInit } from '@angular/core';
import { TablaGalletas } from '../../tabla-galletas/tabla-galletas';
import { GalletasService } from '../../Services/galletas.service';

@Component({
  selector: 'app-galletas-vainilla',
  standalone: true,
  imports: [TablaGalletas],
  templateUrl: './galletas-vainilla.html',
  styleUrl: './galletas-vainilla.css'
})
export class GalletasVainilla implements OnInit {
  galletas: any[] = [];

  constructor(private galletasService: GalletasService) {}

  ngOnInit() {
    this.galletasService.obtener('vainilla').subscribe((data) => {
      this.galletas = data;
    });
  }
}