import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../models/post.model';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(posts: Post[], itemName: string): Post[] {
    if (itemName === '' || itemName === null || itemName === undefined) {
      return posts;
    } else {
      return  posts.filter(post => post.title.toLowerCase().includes(itemName.toLowerCase()));
    }
  }

}
