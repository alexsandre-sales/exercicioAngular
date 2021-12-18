import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  url = 'http://localhost:3000/banco'

  constructor(private http: HttpClient) { }

  getBancos(){
    return this.http.get(this.url)
  }

  getBancoUnico(id:any){
    return this.http.get(this.url + '/'+id)
  }

  addBanco(ccCliente:Banco){
    return this.http.post(this.url, ccCliente)
  }

  delBanco(id:any){
    return this.http.delete(this.url+ '/' +id)
  }

  atualizaBanco(id:any, ccCliente:Banco){
    return this.http.put(this.url + '/' + id, ccCliente)
  }

}

export interface Banco{
  id_transferencia?: string
  nomeClinte?: string
  valor?:string
  ccCliente?:string
  
}
