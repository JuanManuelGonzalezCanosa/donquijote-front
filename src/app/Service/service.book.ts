import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../Model/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceBook {

  private listBookUrl=    "http://localhost:8080/book/listactive";
  private createBookUrl=  "http://localhost:8080/book/create"
  private deleteBookUrl=  "http://localhost:8080/book/deleteactive"
  private idBookUrl=      "http://localhost:8080/book"
  private putBookUrl=     "http://localhost:8080/book/delete"

  constructor(private httpClient : HttpClient) { }

  getBook():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.listBookUrl}`);
  }

  crateBook(book:Book) : Observable<Object>{
    return this.httpClient.post<Book>(`${this.createBookUrl}`, book);
  }

  putBook(book:Book) : Observable<Object>{
    return this.httpClient.put<Book>(`${this.putBookUrl}/${book}`, book);
  }

  idBook(id:number) : Observable<Object>{
    return this.httpClient.get<Book>(`${this.idBookUrl}/${id}`);
  }

  deleteBookActive(id:number) : Observable<Object>{
    return this.httpClient.put(`${this.deleteBookUrl}/${id}`,Book);
  }
}
