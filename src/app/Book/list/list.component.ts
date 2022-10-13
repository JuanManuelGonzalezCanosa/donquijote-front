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
    this.bookService.getBook().subscribe
    (dato => {
      this.books = dato;
    })
  }

  private idBook(){
    this.bookService.idBook;
  }

  deleteBook(id:number){
    this.bookService.deleteBook(id).subscribe(
      dato =>{
        this.listBook
      }
    );
  }

  private putBook(id:number){
    this.router.navigate(['put', id]);
  }

}
