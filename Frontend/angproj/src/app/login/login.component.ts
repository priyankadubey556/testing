import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mail: string;
  psw: any;
  email: string;
  password: string;
  data:any;
  postList: any = [];

  constructor(public post: PostService, public route: Router) { }

  ngOnInit() {
  }

  login(userform){

    if(userform.valid == true)
    {
      if(this.CheckEmailAndPassword())
      {
        alert("Successful Login");
        this.route.navigate(['/dashboard'])
      }
     else{
      alert("Invalid Login");
         }
      }
    }
  
  CheckEmailAndPassword(): boolean {
    this.post.getPost().subscribe(res => {
      console.log(res)
      this.postList = res['users']['data']
      console.log(this.postList)
    })
    var u = this.postList;
    var found: boolean = false;
    for(var i =0; i<u.length; i++)
    {
     if(u[i].email==this.mail && u[i].password==this.psw)
     {
       found = true;
       break;
     }
    }
    return found;
  }
  }

  
