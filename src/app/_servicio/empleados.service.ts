import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { entorno } from '../_entorno/entorno';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../_modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
private url:string = `${entorno.HOTS}/producto`;
productoCambio = new Subject<Producto[]>();

listarPorId(id:number){
  return this.http.get<Producto>(`${this.url}/${id}`);
}

listar(): Observable<Producto[]>{
  return this.http.get<Producto[]>(this.url);
}

alta(e:Producto){
  console.log('ha llegado al servicio' + e.product_name)
  console.log(this.url)
  
  return this.http.post(this.url,e);
}

eliminar(id:number){
  console.log('he borrado el producto con id ' + id)
  console.log(this.url)
  return this.http.delete(`${this.url}/${id}`);
}

modificar(e:Producto){
  return this.http.put(this.url,e);
}





  constructor(private http:HttpClient) { }
}
