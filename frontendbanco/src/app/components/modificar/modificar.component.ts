import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banco, TarefaService } from 'src/app/servico/tarefa.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  banco: Banco={
    id_transferencia:'',
    nomeClinte:'',
    valor:'',
    ccCliente:''
  }

  constructor(
    private tarefaService:TarefaService,
    private router:Router,
    private activateRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = <any>this.activateRoute.snapshot.params['id']
    this.tarefaService.getBancoUnico(id).subscribe({
      next:(resultado)=>{ console.log(resultado)
        this.banco = resultado
      },
      error: (e)=> console.error(e)
    })
  }

  modificar(){
    this.tarefaService.atualizaBanco(this.banco.id_transferencia, this.banco).subscribe({
      next: (resultado)=> console.log("Atualizado "),
      error:(e)=> console.error(e)
    })
    this.router.navigate(['/inicio'])
  }
  cancelar(){
    this.router.navigate(['/inicio'])

  }
}
