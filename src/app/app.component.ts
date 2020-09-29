import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Post} from './shared/interfaces/interfaces';
import {interval, Observable, throwError} from 'rxjs';
import {ServicesService} from './shared/services/services.service';
import {HttpClient} from '@angular/common/http';
import {catchError, delay, first, map, pluck, take} from 'rxjs/operators';
import {HttpService} from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('select', {static: true}) select: ElementRef;
  appState = 'on';
  constructor(public myServ: ServicesService, private httpSer: HttpService) {}
  posts: Post[] = [];
  todotitle ='';
  numb: number;
  postName = '';
  filterField = 'title';
  posters: any =[];
  pushPosts(post) {
    return this.posts.push(post);
  }
  remove(idx: number) {
    this.posts.splice(idx, 1);
  }
  changeFilter(e) {
    this.filterField =  e.target.value;
    console.log(this.filterField);
  }

  ngOnInit(): void {
  this.fetchTodos()
  }

  addPost() {
    const newProduct = {
      title: this.todotitle,
      completed: false,
    };
    this.httpSer.add(newProduct)
      .subscribe(product => {
        this.posters.push(product);
        this.todotitle = '';
      }, error => {
        console.log(error)
      });
  }

  fetchTodos() {
    this.httpSer.get(10)
      .pipe(
        delay(1500),
        catchError(err => {
          console.log(err.message);
          return throwError(err);
        })
      )
      .subscribe((v) => {
        this.posters = v;
      });
  }

  removeTodo(id: number) {
    this.posters = this.posters.filter(el => el.id !== id);
    this.httpSer.remove(id)
      .subscribe(res => {
        console.log(res);
      })
  }

  paginationChange() {
    this.httpSer.get(this.select.nativeElement.value)
      .pipe(
        catchError(err => {
          console.log(err.message);
          return throwError(err);
        })
      )
      .subscribe((v) => {
        this.posters = v;
      });
  }
}
