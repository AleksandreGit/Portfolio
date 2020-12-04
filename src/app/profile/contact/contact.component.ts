import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public formDatas: FormGroup;

  constructor(private builder: FormBuilder) {
    this.formDatas = this.builder.group({
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required,
      Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }
}
