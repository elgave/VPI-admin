import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RechazoRest } from '../models/Restaurante/RechazoRest';
import { Restaurante } from '../models/Restaurante/Restaurante';
import { AdminService } from '../service/admin/admin.service';

@Component({
  selector: 'app-registroRestauranteDetalle',
  templateUrl: './registroRestauranteDetalle.component.html',
  styleUrls: ['./registroRestauranteDetalle.component.scss']
})
export class RegistroRestauranteDetalleComponent implements OnInit {

  restaurantes: Restaurante[] = [];
  ready: boolean;
  restauranteSeleccionado: Restaurante;
  rechazo: RechazoRest;
  motivo: string = '';

  constructor(private adminService: AdminService, private toastr: ToastrService,private router : Router) {

    
   }

  ngOnInit() {
    this.ready = false;
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
        this.router.navigate(['/restaurantes']);
        },
        err=>{
         this.toastr.error( 'error', '',{
            timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/restaurantes']);
        }
      );
    }

    rechazarRestaurante(){
      this.rechazo = new RechazoRest(this.restauranteSeleccionado.email, this.motivo)  
      this.adminService.rechazarRest(this.rechazo).subscribe(
        data=> {
          this.toastr.success('Restaurante rechazado con exito con exito', '',{
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          
          this.router.navigate(['/restaurantes']);
          },
          err=>{
           this.toastr.error( 'error', '',{
              timeOut: 3000, positionClass: 'toast-top-center',
          });
          this.router.navigate(['/restaurantes']);
          }
        );
      }

}
