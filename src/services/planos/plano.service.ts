import { Plano, } from './../../models/planos/plano.models';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PlanoService {
   // private _apiCadastroFidelio = this._apiService.get('apiFidelio').v1.prd;
    
    constructor (
        private _httpClient: Http,        
    ) {
        
    }

    /**
     * Consultando Planos
     * @author Paulo Eduardo - pauloems@yahoo.com.br
     */
    consultaPlanos(plano:string): Observable<Array<Plano.IPlano>> {
        //plano = sku
        return this
            ._httpClient
            .get(`http://private-59658d-celulardireto2017.apiary-mock.com/planos/${plano}`)
            .retry(3)
            .map(response => response.json());
    }

   
}
