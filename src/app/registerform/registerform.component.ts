import { Component } from '@angular/core';
import { FormGroup,FormControl,FormArray, Validators} from '@angular/forms';

interface State {
  name: string;
  code: string;
}



@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {

  States:State[]=[]

  ngOnInit() {
    this.States= [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ]
  }

  Register = new FormGroup({
    FirstName: new FormControl(null, Validators.required),
    LastName: new FormControl(null),
    Gender: new FormControl(null, Validators.required),
    PhoneNum: new FormControl(null, Validators.required),
    Mail: new FormControl(null),
    Address: new FormControl(null, Validators.required),
    Address2:new FormControl(null),
    State:new FormControl(null,Validators.required)
  })
  onSubmit() {
    console.log(this.Register.value)
  }
}
  // :string=""
  // :string=""
  // selectedCity:string=""  
  // :string=""
  // 
  // testFn(){
 


