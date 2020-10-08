import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../shared/services/http.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
 post$: Observable<any>;
  constructor(private httpSer: HttpService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.post$ = this.actRoute.params
      .pipe(switchMap(params => {
        return this.httpSer.getById(params['id'])
      }))
  }

}
