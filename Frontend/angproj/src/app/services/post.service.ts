import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // public url: string = 'http://jsonplaceholder.typicode.com/posts'
  public url: string = 'http://localhost:3020/api/';
  constructor(public http: HttpClient) { 
  }

  getPost() {
    console.log(this.url)
    return this.http.get(this.url+'users');
  }
  
  addPost(post) {
    return this.http.post(this.url+'users'+'/add', post)
  }

  editPost(id) {
    return this.http.get(this.url+'users'+'/edit'+`${id}`);
  }

  updatePost(data, id) {
    return this.http.put(this.url+'users'+'/edit'+`${id}`, data);
  }  

  deletePost(id) {
    return this.http.delete(this.url+'users'+'/delete'+`/${id}`);
  }
}
