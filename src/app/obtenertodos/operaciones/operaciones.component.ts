import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Producto } from '../../_modelo/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../../_servicio/empleados.service';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {

  form: FormGroup;
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicio: EmpleadosService
  ) {
    this.form = new FormGroup({
      'product_id': new FormControl(0),
      'product_name': new FormControl(''),
      'supplier_id': new FormControl(''),
      'category_id': new FormControl(''),
      'quantity_per_unit': new FormControl(''),
      'unit_price': new FormControl(0),
      'units_in_stock': new FormControl(0),
      'units_on_order': new FormControl(0),
      'reorder_level': new FormControl(0),
      'discount': new FormControl(0)
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.formaFormulario();
    });
  }

  formaFormulario() {
    if (this.edicion) {
      this.servicio.listarPorId(this.id).subscribe(data => {
        this.form.patchValue(data); // Assuming the returned data structure matches the form structure
      });
    }
  }

  operar() {
    let p: Producto = this.form.value;
    if (this.edicion) {
      this.servicio.modificar(p).subscribe(() => {
        this.servicio.listar().subscribe(data => {
          this.servicio.productoCambio.next(data);
        });
      });
    } else {
      this.servicio.alta(p).subscribe(() => {
        this.servicio.listar().subscribe(data => {
          this.servicio.productoCambio.next(data);
        });
      });
    }
    this.router.navigate(['']);
  }
  
  

}
