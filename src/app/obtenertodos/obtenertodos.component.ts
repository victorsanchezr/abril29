import { Component, Input } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { EmpleadosService } from '../_servicio/empleados.service';

@Component({
  selector: 'app-obtenertodos',
  standalone: true,
  imports: [],
  templateUrl: './obtenertodos.component.html',
  styleUrl: './obtenertodos.component.css'
})
export class ObtenertodosComponent {



  productos:Producto[] = [];

  constructor(private productoServicio:EmpleadosService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
 this.productoServicio.listar().subscribe(data => this.productos = data);
  }

}
