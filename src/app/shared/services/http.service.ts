import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post, Response} from '../models/post.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(`${environment.DB_URL}/posts.json`)
      .pipe(
        map((response: { [key: string]: any }) => {
            return Object.keys(response).map(key => ({
              ...response[key],
              id: key,
              date: new Date(response[key].date)
            }));
          }
        )
      );
  }

  getById(id: string) {
    return this.http.get(`${environment.DB_URL}/posts/${id}.json`)
      .pipe(
        map((post: Post) => {
          return {
            ...post,
            id,
            date: new Date(post.date)
          };
        })
      );
  }

  changePost(post: Post) {
    return this.http.patch(`${environment.DB_URL}/posts/${post.id}.json`, post);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post(`${environment.DB_URL}/posts.json`, post)
      .pipe(
        map((res: Response) => {
          return {
            ...post,
            id: res.name,
            date: new Date(post.date)
          };
        })
      );
  }

  deletePost(id: string) {
    return this.http.delete(`${environment.DB_URL}/posts/${id}.json`);
  }

}
