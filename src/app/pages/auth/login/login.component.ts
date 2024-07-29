import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { login } from '../../../model/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.loginForm = this.fb.group<login>({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  submit() {
    console.log(this.loginForm.value);
  }
}
