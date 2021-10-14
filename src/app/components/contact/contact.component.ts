import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm!: FormGroup;
  submitted = false;
  success = false; 


  constructor(private formBuilder: FormBuilder) { 
    //tehdään formista group sekä asetetaan validiointisäännöt
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      message: ['', Validators.required]
    })
  }

  onContactSubmit() {
    this.submitted = true;

    //jos validointi ei täyty, palautetaan tyhjä--koodia ei enää suoriteta eteenpäin
    if (this.messageForm.invalid) {
      return;
    }

    this.success= true;
  }

  ngOnInit(): void {
  }

}
