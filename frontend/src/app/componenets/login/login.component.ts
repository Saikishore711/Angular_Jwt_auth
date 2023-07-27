import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup
  ValidateEmail = (email: any) => {
    var validRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(email.match(validRegex)){
      return false;
    }else{
      return true;
    }
  }

  constructor(
    private formBuilder :FormBuilder,
    private http: HttpClient,
    private router:Router
  ){}
  ngOnInit(): void {
    this.form =this.formBuilder.group ({
      email:"",
      password :"",
    })
  }
  submit():void{
    let user = this.form.getRawValue()
    console.log(user)

    

    if(user.email== "" || user.password== "") {
      Swal.fire("Error", "Please enter all the fields", "error")
    }

    else if(this.ValidateEmail(user.email)){
      Swal.fire("Error", "Please enter a valid email", "error")
    }else{
      this.http.post("http://localhost:5000/api/login",user,{
        withCredentials:true
      })
      .subscribe(()=> this.router.navigate(['/']),(err)=>{
        Swal.fire("Error",err.error.message,"error")
      })
    

  }

   

  }
}
