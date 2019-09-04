import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { PostService } from '../services/post.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  addPostForm: FormGroup;
      // users: any = [];
      email: any;
      email1: any;

  constructor(public _fb:FormBuilder, public post: PostService, public router: Router, public route: Router) {
    this.createForm();
   }
   createForm(){
    this.addPostForm = this._fb.group({
      firstName:['', [Validators.required, Validators.pattern("^[a-zA-Z ]*$"), Validators.maxLength(20), Validators.minLength(5)]],
      lastName:['', [Validators.required, Validators.pattern("^[a-zA-Z ]*$"), Validators.maxLength(20), Validators.minLength(5)]],
      email:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['',[Validators.required]],
      // confirmpassword:['',[Validators.required]]

    })
  }

  ngOnInit() {
  }
  
  saveForm() {
     this.post.addPost(this.addPostForm.value).subscribe(res => {
       if(res) {
         alert('Post created successfully')
         this.route.navigate([''])
       }
     })
   }
  }

  
  

