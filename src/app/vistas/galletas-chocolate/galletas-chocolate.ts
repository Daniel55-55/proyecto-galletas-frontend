import { Component, OnInit } from '@angular/core';
import { TablaGalletas } from '../../tabla-galletas/tabla-galletas';
import { GalletasService } from '../../Services/galletas.service';

@Component({
  selector: 'app-galletas-chocolate',
  standalone: true,
  imports: [TablaGalletas],
  templateUrl: './galletas-chocolate.html',
  styleUrl: './galletas-chocolate.css'
})
export class GalletasChocolate implements OnInit {
  galletas: any[] = [];

  constructor(private galletasService: GalletasService) {}

  ngOnInit() {
    this.galletasService.obtener('chocolate').subscribe((data) => {
      this.galletas = data;
    });
  }
}