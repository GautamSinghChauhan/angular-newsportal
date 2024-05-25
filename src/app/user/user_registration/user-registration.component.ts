import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup; // Declare the property
  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  registerUser(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    const userData = this.registrationForm.value;

    this.http.post('http://localhost:4050/register', userData)
      .subscribe(
        (response) => {
          this.isFormSubmitted = true; 
          this.registrationForm.reset();
          console.log('Registration successful:', response);
          // Optionally, you can navigate to a different route or show a success message
        },
        (error) => {
          console.error('Registration failed:', error);
          // Handle error, e.g., display error message to the user
        }
      );
  }
}


