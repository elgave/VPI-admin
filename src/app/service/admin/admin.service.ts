import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RechazoRest } from 'src/app/models/Restaurante/RechazoRest';
import { Restaurante } from 'src/app/models/Restaurante/Restaurante';
import { BusquedaUsuario } from 'src/app/models/usuario/busquedaUsuario';
import { Usuario } from '../../models/usuario/usuario';
import { Admin } from '../../models/Admin/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  authURL = 'http://localhost:8282/admin/'

  constructor(private httpClient: HttpClient) { }
  
  
  public getRestaurantesPendientes(): Observable<Restaurante[]> {
    return this.httpClient.get<Restaurante[]>( `${this.authURL+'restaurantesPendientes'}`);
  }

  public aprobarRest(idRestaurante: string): Observable<string> {
    return this.httpClient.post<string>(this.authURL + 'aprobarRestaurante', idRestaurante);
  }

  public rechazarRest(rechazo: RechazoRest): Observable<RechazoRest> {
    return this.httpClient.post<RechazoRest>(this.authURL + 'rechazarRestaurante', rechazo);
  }

  public listarUsuarios(usuarioBusqueda: BusquedaUsuario): Observable<Usuario[]> {
    return this.httpClient.post<Usuario[]>(this.authURL + 'usuariosBusqueda', usuarioBusqueda);
  }
  
  public bloquearRest(bloqueo: RechazoRest): Observable<string> {
    return this.httpClient.post<string>(this.authURL + 'bloquearRestaurante', bloqueo);
  }

  public bloquearCliente(bloqueo: RechazoRest): Observable<string> {
    return this.httpClient.post<string>(this.authURL + 'bloquearCliente', bloqueo);
  }

  public registarAdmin(admin: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.authURL + 'registroAdmin', admin);
  }

  
  }
  