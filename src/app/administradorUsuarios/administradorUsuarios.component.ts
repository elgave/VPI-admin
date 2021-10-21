import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../service/admin/admin.service';
import { BusquedaUsuario } from 'src/app/models/usuario/busquedaUsuario';
import { Usuario } from '../models/usuario/usuario';

@Component({
  selector: 'app-administradorUsuarios',
  templateUrl: './administradorUsuarios.component.html',
  styleUrls: ['./administradorUsuarios.component.css']
})
export class AdministradorUsuariosComponent implements OnInit {

  busquedaUsuario: BusquedaUsuario;
  isCliente: boolean;
  isBloqueado: boolean;
  textoBusqueda: string
  usuarios: Usuario[] = [];
  seleccionado: string = "Clientes";
  capturado: string;
  marked = false;
  theCheckbox = false;

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
  ) { }
  
  ngOnInit() {
    this.isCliente = true;
    this.isBloqueado = false;
    this.textoBusqueda = "";
    this.seleccionado = '1';
    this.cargarRest();
  }

  cargarRest() {
    this.busquedaUsuario = new BusquedaUsuario(this.isCliente, this.isBloqueado, this.textoBusqueda);
    this.adminService.listarUsuarios(this.busquedaUsuario).subscribe(
      data => {
        this.usuarios = data;  
      },
      err => {
        console.log(err);
      }
    );
  }

  capturar() {
    this.capturado = this.seleccionado;
    if (this.capturado === "2")
      this.isCliente = false;
      else
      this.isCliente = true;

      this.cargarRest();
  }

  capturarBloqueado(e){
    this.marked= e.target.checked;
    this.cargarRest();
  }


}
