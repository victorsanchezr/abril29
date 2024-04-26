import { Component } from '@angular/core';
import { EmpleadosService } from '../_servicio/empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-metododelete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './metododelete.component.html',
  styleUrl: './metododelete.component.css'
})
export class MetododeleteComponent {

  id_pro:number = 0;
  
 
  constructor(private productoServicio:EmpleadosService){}

 
  botonborrar(): void {
  
    this.productoServicio.eliminar(this.id_pro).subscribe();
    
  }

}
