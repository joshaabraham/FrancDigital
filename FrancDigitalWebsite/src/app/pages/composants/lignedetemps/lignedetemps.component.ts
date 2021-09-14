import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lignedetemps',
  templateUrl: './lignedetemps.component.html',
  styleUrls: ['./lignedetemps.component.css']
})
export class LignedetempsComponent implements OnInit {

  isLinear = false;
  firstFormGroup : FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

  reset(){
    
  }
}
