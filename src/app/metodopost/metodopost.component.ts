import { Component, Input } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { EmpleadosService } from '../_servicio/empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-metodopost',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './metodopost.component.html',
  styleUrl: './metodopost.component.css'
})
export class MetodopostComponent {

          

  nombre:string = "";
  id_pro:number = 0;
  
 
  constructor(private productoServicio:EmpleadosService){}

 
  botonanadir(): void {
    let nuevo2:Producto =  new Producto(this.id_pro,this.nombre, 5, 6, '3 unidades', 20.99, 300, 40, 20, 0.15);
    this.productoServicio.alta(nuevo2).subscribe();
    
  }

}
