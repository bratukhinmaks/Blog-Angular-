import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../interfaces/interfaces';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], productName = '', filterName = 'title'): Post[] {
    if (!productName.trim()) {
      return posts;
    } else {
      return posts.filter(post => {
        return post[filterName].toLowerCase().includes(productName.toLowerCase());
      });
    }
  }
}
