import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../shared/services/http.service';
import {Observable} from 'rxjs';
import {Post} from '../../shared/models/post.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 posts$: Observable<any>;
  constructor(private httpSer: HttpService) { }

  ngOnInit() {
    this.posts$ = this.httpSer.getAll();
  }

}
