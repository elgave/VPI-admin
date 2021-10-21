import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Restaurante } from '../models/Restaurante/Restaurante';
import { AdminService } from '../service/admin/admin.service';

@Component({
  selector: 'app-administradorRestaurantes',
  templateUrl: './administradorRestaurantes.component.html',
  styleUrls: ['./administradorRestaurantes.component.css']
})
export class AdministradorRestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = [];
  ready: boolean;
  restauranteSeleccionado: Restaurante;

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.ready = false;
    this.cargarRest();
    

  }

  cargarRest() {
    this.adminService.getRestaurantesPendientes().subscribe(
      data => {
        this.restaurantes = data;
        
        
      },
      err => {
        console.log(err);
      }
    );
   
    
  }

  seleccionar(res: Restaurante){
    this.ready = true;
    this.restauranteSeleccionado = res;

  }

  aprobarRestaurante(){
    this.adminService.aprobarRest(this.restauranteSeleccionado.email).subscribe(
      data=> {
        this.toastr.success('Restaurante aprobado con exito', '',{
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        console.log(data);
        this.cargarRest();
        },
        err=>{
         this.toastr.error( 'error', '',{
            timeOut: 3000, positionClass: 'toast-top-center',
        });
         this.cargarRest();
        }
      );
    }

}
