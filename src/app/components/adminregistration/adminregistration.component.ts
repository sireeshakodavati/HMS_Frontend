import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtclientService } from '@app/services/jwtclient.service';


@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrl: './adminregistration.component.css'
})
export class AdminregistrationComponent {
  adminRegistrationForm!: FormGroup;
  Submitted = false;

  constructor(private fb: FormBuilder, private jwtClientService: JwtclientService) {
  }

  ngOnInit() {
    this.adminRegistrationForm = this.fb.group({
      userName: ['', [Validators.pattern('[A-Z][a-z]{3,20}')]],
      password: ['', [Validators.required]],
      fullName: ['', [Validators.pattern('[A-Za-z]{3,20}')]],
      email: ['', [this.emailValidator(), Validators.required]],
      phoneNumber: ['', [Validators.pattern('\\d{6}')]],
      role: [''],
    });
  }

  get f() {
    return this.adminRegistrationForm.controls;
  }

  onSubmit() {
    this.Submitted = true;

    if (this.adminRegistrationForm.valid) {
      // Assuming you have an AuthService with a register method
      this.jwtClientService.registerAdmin(this.adminRegistrationForm.value).subscribe(
        (response:any) => {
          // Handle successful registration
          console.log('Registration successful:', response);
          alert('Registration successful');

          // Save the JWT token securely (e.g., in localStorage)
          localStorage.setItem('token', response.token);

          // Redirect to another page or perform other actions
        },
        (error:any) => {
          // Handle registration error
          console.error('Registration failed:', error);
        }
      );
    }
  }
  private emailValidator() {
    return (control: { value: string }) => {
      const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(control.value);
      return isValid ? null : { invalidEmail: true };
    };
  }
}
