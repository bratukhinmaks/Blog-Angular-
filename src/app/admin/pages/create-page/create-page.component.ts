import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.email]),
      content: new FormControl('', [Validators.required, Validators.email]),
      author: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {

  }
}
