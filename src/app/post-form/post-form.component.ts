import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup,  Validators} from '@angular/forms';
import {Post} from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onPosAdd = new EventEmitter<Post>();
  form: FormGroup;
  post: Post;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      mail: new FormControl(null , [Validators.required, Validators.email]),
      text: new FormControl(null , Validators.required)
    });
  }
  submit() {
    this.post = {
      auther: {
       name:  this.form.value.name,
       surname: this.form.value.surname,
      },
      title: this.form.value.title,
      text: this.form.value.text,
      mail: this.form.value.mail,
      date: new Date(),
    };
    console.log(this.post);
    this.onPosAdd.emit(this.post);
    this.form.reset();
  }

}
