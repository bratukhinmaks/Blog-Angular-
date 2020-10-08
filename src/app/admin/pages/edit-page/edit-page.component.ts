import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpService} from '../../../shared/services/http.service';
import {switchMap, tap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../../shared/models/post.model';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  form: FormGroup;
  post: Post;
  constructor(private routerAct: ActivatedRoute, private http: HttpService, private router: Router, private aSer: AlertService) {
  }

  ngOnInit() {
    this.routerAct.params
      .pipe(
        switchMap((params: Params) => {
          return this.http.getById(params['id'])
        })
      ).subscribe((post: Post) => {
        this.post = post;
        this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        content: new FormControl(post.content, Validators.required),
        author: new FormControl(post.author, Validators.required)
      });
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.http.changePost({
      id: this.post.id,
      content: this.form.get('content').value,
      title: this.form.get('title').value,
      author: this.form.get('author').value,
      date: new Date()
    })
      .subscribe(() => {
      this.router.navigate(['/admin', 'dashboard']);
      this.form.reset();
      this.aSer.success('Post has been updated')
    });
  }
}
