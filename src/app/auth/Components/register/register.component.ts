import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../../Store/action';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private store: Store) {


  }

  ngOnInit(): void {
    this.init()
  }

  private init() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public onSubmit() {
    console.log('this.form.value :>> ', this.form.value);
    // this.store.dispatch(registerAction(this.form.value))
  }

}
