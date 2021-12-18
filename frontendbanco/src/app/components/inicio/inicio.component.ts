import { Component, OnInit } from '@angular/core';
import { TarefaService, Banco } from "../../servico/tarefa.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListaCc: Banco[]

  constructor(
    private tarefaService:TarefaService, 
    private router:Router) {
    this.ListaCc=[]
   }

  ngOnInit(): void {
    this.listaCc()
  }

  listaCc(){
    this.tarefaService.getBancos().subscribe({
      next:(resultado)=>{
        console.log(resultado)
        this.ListaCc = <any>resultado
      },
      error:(e)=> console.error(e)
    })
  }

  excluir(id:any){
    this.tarefaService.delBanco(id).subscribe({
      next:(resultado)=>{ console.log("Exluido")
    this.listaCc()},
    error:(e)=> console.error(e)
    })
  }
  editar(id:any){
    this.router.navigate(['/edit/' +id])
  }
}
