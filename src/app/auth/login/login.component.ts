import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {NotificationService} from '../../service/notification/notification.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  user: User = {};

  constructor(private authService: AuthService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit() {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((user) => {
      this.notificationService.showSuccessMessage('Đăng nhập thành công!');
      if (user.username === 'admin') {
        this.router.navigateByUrl('/admin/vocabulary/add');
      } else {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
