import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../shared/models/user.interface';
import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  user: User;
  form: FormGroup;

  constructor(public authSer: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    this.user = {
      email: this.form.get('name').value,
      password: this.form.get('password').value,
      returnSecureToken: true
    };
    this.authSer.login(this.user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin', 'dashboard']);
    });

  }
}
