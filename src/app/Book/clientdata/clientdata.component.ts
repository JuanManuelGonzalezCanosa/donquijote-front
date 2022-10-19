import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/Client';
import { ClientService } from 'src/app/Service/client.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-clientdata',
  templateUrl: './clientdata.component.html',
  styleUrls: ['./clientdata.component.css']
})
export class ClientdataComponent implements OnInit {

  clients:Client[];

  constructor(private clientService:ClientService, private router:Router) { }

  filtrar="";

  filterName:boolean;
  filterLastName:boolean;
  filterDni:boolean;

  ngOnInit(){
     this.listClient();
  }
  
  private listClient(){
    this.clientService.getClient().subscribe
    (dato => {
      this.clients = dato;
    })
  }

  getIdClient(){
    this.clientService.idClient;
  }

  getClientName(){
    this.clientService.getClientName(this.filtrar).subscribe(
      dato => {
        this.clients = dato;
      })
  }
  getClientLastName(){
    this.clientService.getClientLastName(this.filtrar).subscribe(
      dato => {
        this.clients = dato;
      });
  }
  getClientDni(){
    this.clientService.getClientDni(parseInt(this.filtrar)).subscribe(
      dato => {
        this.clients = dato;
      });
  }


  buscar(){
    if(this.filterName){
      console.log("acaaa nombre");
      this.getClientName();
      this.filterName=false;
    }
    if (this.filterLastName) {
      console.log("acaaa apellido");
      this.getClientLastName();
      this.filterLastName=false;
    } 
    if(this.filterDni){
      console.log("acaaa dni");
      this.getClientDni();
      this.filterDni=false;
    }
}
}