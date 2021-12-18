import { Component, OnInit } from '@angular/core';
import { TarefaService, Banco } from '../../servico/tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  banco:Banco = {
    id_transferencia:'',
    nomeClinte:'',
    valor:'',
    ccCliente:''
  }
  constructor(
    private tarefaService:TarefaService, 
    private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    delete this.banco.id_transferencia

    this.tarefaService.addBanco(this.banco).subscribe({
      next:(resultado)=>{
        console.log("OK")
      },
      error:(e)=>console.error(e)
    })
    this.router.navigate(['/inicio'])
  }
  cancelar(){
    this.router.navigate(['/inicio'])
  }
}
