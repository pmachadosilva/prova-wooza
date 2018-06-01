import { PlanoService } from './../services/planos/plano.service';
import { PlataformaService } from './../services/plataformas/plataforma.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Plataforma } from '../models/plataformas/plataforma.models';
import { Plano } from '../models/planos/plano.models';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    styleUrls: ['home.scss']
})

export class PageHome {
    plataf: Array<Plataforma.IPlataforma>;
    plan: Array<Plano.IPlano>;
    plataformaSelecionada: string;
    
    //Máscaras
    public maskTelefone = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public maskCpf = [ /[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',  /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    public maskNascimento = [ /[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    
    public formulario: FormGroup = new FormGroup({
        'nome': new FormControl(null,[ Validators.required,Validators.minLength(5),Validators.maxLength(150)]),
        'email': new FormControl(null,[ Validators.required,Validators.minLength(5),Validators.maxLength(150)]),    
        'cpf': new FormControl(null,[ Validators.required,Validators.minLength(11),Validators.maxLength(150)]),
        'nascimento': new FormControl(null, [ Validators.required,Validators.minLength(10),Validators.maxLength(150)]),        
        'telefone': new FormControl(null, [ Validators.required,Validators.minLength(7),Validators.maxLength(150)])
    });
    constructor (
        private _plataformaService: PlataformaService,
        private _planoService: PlanoService,
    ) {
        
    }

    ngOnInit (): void {
        this.getPlataformas();        
    }
    getPlataformas (): void {
        this
            ._plataformaService
            .consultaPlataformas()
            .subscribe(plat => {
                    this.plataf = plat;
                });
    }
    
    getPlanos(event: string): void {
        if (event != ''){ 
            this.plataformaSelecionada = event;
            this
                ._planoService
                .consultaPlanos(event)
                .subscribe(plano => {
                this.plan= plano;
                        });
                }
                else
                {
                    this.plan = [];
                }
    }

    cadastroUsuario(plano:string): void{
        if(this.formulario.status === 'INVALID'){
            this.formulario.get('nome').markAsTouched()
            this.formulario.get('email').markAsTouched()
            this.formulario.get('cpf').markAsTouched()
            this.formulario.get('nascimento').markAsTouched()
            this.formulario.get('telefone').markAsTouched()
            
        }
        else {
            //Criando objeto a ser exibido no console
            let resultado = [{
                nome:this.formulario.get('nome').value,
                email:this.formulario.get('email').value,
                cpf:this.formulario.get('cpf').value,
                nascimento:this.formulario.get('nascimento').value,
                telefone:this.formulario.get('telefone').value,
                plataforma: this.plataformaSelecionada,
                plano: plano,
            }]
            console.log(resultado);
        }
            
        }    
    
}

