import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../../shared/models/post.model';
import {HttpService} from '../../../shared/services/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  post: Post;

  constructor(private httpSer: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required)
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.post = {
      author: this.form.get('author').value,
      content: this.form.get('content').value,
      date: new Date(),
      title: this.form.get('title').value
    };
    this.httpSer.addPost(this.post).subscribe(() => {
      this.router.navigate(['/admin', 'dashboard']);
      this.form.reset();
    });
  }
}
