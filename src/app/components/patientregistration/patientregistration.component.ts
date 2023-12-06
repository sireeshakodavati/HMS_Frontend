import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtclientService } from '@app/services/jwtclient.service';

@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrl: './patientregistration.component.css'
})
export class PatientregistrationComponent {
  PatientRegistrationForm!: FormGroup;
  Submitted = false;
  response:any;

  constructor(private fb: FormBuilder,private jwtClientService: JwtclientService) {}
  ngOnInit() {
    this.PatientRegistrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern('[A-Z][a-z]{3,20}')]],
      password: ['', [Validators.required]],
      patientName: ['', [Validators.required, Validators.pattern('[A-Z][a-z]{3,20}')]],
      dateOfBirth: ['', [Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]],
      gender: ['', [Validators.pattern('[MF]')]],
      mobileNumber: ['', [Validators.pattern('\\d{6}')]],
      disease: ['', [Validators.required]],
      natureOfVisit: [''],
      preferredDate: ['', [Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]],
      preferredTime: ['', [Validators.pattern('^(1[0-2]|0?[1-9]):[0-5]\\d+:[0-5]\\d+ (AM|PM)$')]],
      
    });
  }
  get f() {
    return this.PatientRegistrationForm.controls;
  }

  onSubmit() {
    this.Submitted = true;

    if (this.PatientRegistrationForm.valid) {
      // Assuming you have an AuthService with a register method
      this.jwtClientService.registerPatient(this.PatientRegistrationForm.value).subscribe(
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

}
