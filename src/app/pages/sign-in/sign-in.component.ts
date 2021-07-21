import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    const {email, password} = f.form.value;

    this.auth.signIn(email, password)
    .then((res) => {
      this.router.navigateByUrl('home');
      this.toastr.success("Signin Successful");
    })
    .catch((err) =>{
      console.log(err.message);

      this.toastr.error("Signin Failed!");
      
    })

  }

}
