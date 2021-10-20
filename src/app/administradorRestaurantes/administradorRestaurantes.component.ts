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

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
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

}
