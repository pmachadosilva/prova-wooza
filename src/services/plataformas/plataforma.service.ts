import { Plataforma } from './../../models/plataformas/plataforma.models';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class PlataformaService {
   // private _apiCadastroFidelio = this._apiService.get('apiFidelio').v1.prd;
    
    constructor (
        private _httpClient: Http,        
    ) {
        
    }

    /**
     * Consultando Palataformas
     * @author Paulo Eduardo - pauloems@yahoo.com.br
     */
    consultaPlataformas (): Observable<Array<Plataforma.IPlataforma>> {
        return this
            ._httpClient
            .get(`http://private-59658d-celulardireto2017.apiary-mock.com/plataformas`)
            .retry(3)
            .map(response => response.json());
    }

   
}
