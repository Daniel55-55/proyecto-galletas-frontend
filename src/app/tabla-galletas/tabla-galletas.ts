import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GalletasService } from '../Services/galletas.service';

@Component({
  selector: 'app-tabla-galletas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './tabla-galletas.html',
  styleUrl: './tabla-galletas.css'
})
export class TablaGalletas {
  @Input() dataSource: any[] = [];
  @Input() tipo: 'chocolate' | 'vainilla' = 'chocolate';
  @Output() recargarDatos = new EventEmitter<void>();

  displayedColumns: string[] = ['id', 'nombre', 'tamano', 'precio', 'cantidad'];
  formulario: FormGroup;
  mostrarFormulario = false;

  constructor(private fb: FormBuilder, private galletasService: GalletasService) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      tamano: ['', Validators.required],
      precio: [0, Validators.required],
      cantidad: [0, Validators.required]
    });
  }

  guardar() {
    if (this.formulario.valid) {
      this.galletasService.crear(this.tipo, this.formulario.value).subscribe(() => {
        this.formulario.reset();
        this.mostrarFormulario = false;
        this.recargarDatos.emit();
      });
    }
  }
}
