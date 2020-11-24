import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  checkoutForm;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
  }


  onSubmit(customerData: string): void{
    this.checkoutForm.reset();
  }

}
