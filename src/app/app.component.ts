import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-form';
  myForm!:FormGroup;
  constructor(
    public formBuilder:FormBuilder
   )
  {
    this.myForm =this.formBuilder.group({
      bookName:[' '],
      author:[' '],
      publication :[' '],
      price :[' '],
      genre:[' '],
      publishedDate :[' '],
      country :[' '],
      description :[' ']
      

    })
  }
  submit(){
    console.log(this.myForm);
    
  }
  
}
