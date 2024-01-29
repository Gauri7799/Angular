import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {ReactiveFormsModule} from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule,ButtonsModule,BsDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[FormBuilder,Validators]
})
export class AppComponent {

  public State=['Maharashtra','Gujrat','Rajasthan'];


  LoginForm = new FormGroup(
    { 
      fname : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]),
      lname : new FormControl(''),
      Email : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      Phone : new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.maxLength(10),Validators.minLength(10)]),
      City : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]*$'),Validators.minLength(4)]),
      State : new FormControl(''),
      Zipcode : new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.maxLength(5),Validators.minLength(5)]),


    }
  );

   OnSubmit() 
  {
    console.log(this.LoginForm.value);
  }
}
