import { Component, Input } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { EmpleadosService } from '../_servicio/empleados.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obtenertodos',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './obtenertodos.component.html',
  styleUrl: './obtenertodos.component.css'
})
export class ObtenertodosComponent {



  productos:Producto[] = [];

  constructor(private productoServicio:EmpleadosService){}


  eliminar(id:number){
    this.productoServicio.eliminar(id)
      .subscribe(()=>
        {
          this.productoServicio.listar()
            .subscribe(data=>this.productoServicio.productoCambio.next(data))
        })

  }

  recibirAviso(listaActualizada:Observable<Producto[]>){
      console.warn("regresa el padre ----")
      //listaActualizada.subscribe(data => this.empleados = data);
      this.productoServicio.listar()
      .subscribe(datos => {
         this.productos = datos;
         console.log("entra");

      })
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productoServicio.productoCambio
    .subscribe((data) => {this.productos = data}
    )
 this.productoServicio.listar().subscribe(data => this.productos = data);
  }

}
