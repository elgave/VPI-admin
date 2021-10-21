import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RechazoRest } from 'src/app/models/Restaurante/RechazoRest';
import { Restaurante } from 'src/app/models/Restaurante/Restaurante';

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
  
  }
  