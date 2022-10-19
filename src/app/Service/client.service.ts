import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private listClientUrl= "http://localhost:8080/client/list"
  private idClientUrl= "http://localhost:8080/client"
  private clientNameUrl="http://localhost:8080/client/name"
  private clientLastNameUrl="http://localhost:8080/client/lastname"
  private clientDniUrl="http://localhost:8080/client/dni"



  constructor(private httClient : HttpClient) { }

  getClient():Observable<Client[]>{
    return this.httClient.get<Client[]>(`${this.listClientUrl}`);
  }

  idClient(id:number) : Observable<Object>{
    return this.httClient.get<Client>(`${this.idClientUrl}/${id}`);
  }

  getClientName(name:String):Observable<Client[]>{
    return this.httClient.get<Client[]>(`${this.clientNameUrl}/${name}`);
  }

  getClientLastName(lastName:String){
    return this.httClient.get<Client[]>(`${this.clientLastNameUrl}/${lastName}`);
  }

  getClientDni(dni:number){
    return this.httClient.get<Client[]>(`${this.clientDniUrl}/${dni}`);
  }
}
