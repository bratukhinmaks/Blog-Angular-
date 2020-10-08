import {Component, OnInit} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {HttpService} from '../../../shared/services/http.service';
import {Post} from '../../../shared/models/post.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  posts: Post[];
  filter: string;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.http.getAll().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  deleteItem(id: string) {
    this.http.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
    });
  }
}
