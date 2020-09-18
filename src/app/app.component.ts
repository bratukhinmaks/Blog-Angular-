import { Component } from '@angular/core';
import {Post} from './shared/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [];
  pushPosts(post) {
    return this.posts.push(post);
  }
  remove(idx: number) {
    this.posts.splice(idx, 1);
  }
}
