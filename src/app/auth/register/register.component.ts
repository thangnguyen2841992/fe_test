import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required]),

    confirmPassword: new FormControl('', [Validators.required]),

    email: new FormControl('', [Validators.required, Validators.email]),

    phone: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe((user) => {
          this.router.navigateByUrl('/login');
          this.notificationService.showSuccessMessage('Đăng ký tài khoản thành công!');
        },
        error => {
          this.notificationService.showErrorMessage('Đăng ký không thành công!');
        });
    } else {
      this.notificationService.showErrorMessage('Bạn chưa nhập đúng biểu mẫu');
    }
  }
}
