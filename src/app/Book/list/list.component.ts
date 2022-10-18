import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceBook } from 'src/app/Service/service.book';
import { Book } from 'src/app/Model/Book';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books:Book[];
  constructor(private bookService:ServiceBook, private router:Router) { }

  ngOnInit(){
    this.listBook();
  }

  private listBook(){
    this.bookService.getBook().subscribe(
      dato => {
      this.books = dato;
    })
  }

  getIdBook(){
    this.bookService.idBook;
  }

  deleteBookActive(id:number){
    this.bookService.deleteBookActive(id).subscribe(
      dato =>{
        console.log(dato);
        this.irAlInicio;
      }
    );
  }

  putBook(id:number){
    this.router.navigate(['put', id]);
  }

  irAlInicio(){
    this.ngOnInit();
    this.router.navigate(['/list']);
  }

}
