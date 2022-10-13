import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Model/Book';
import { ServiceBook } from 'src/app/Service/service.book';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  book:Book = new Book();

  constructor(private serviceBook:ServiceBook, private router:Router) { }

  ngOnInit(): void {
  }

  createBook(){
    this.serviceBook.crateBook(this.book).subscribe(
      dato => {
        this.irAlInicio();
      }
    )
  }

  irAlInicio(){
    this.router.navigate(['/list']);
  }

  createBookOnSubmit(){
      this.createBook();
  }

}
