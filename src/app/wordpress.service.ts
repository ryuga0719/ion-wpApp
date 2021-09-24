import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(public http: HttpClient) { }

  getPosts() {
    const url: string = 'http://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/';
    return this.http.get<{ posts: IPost[] }>(url);
  }

  getArticle(id: number) {
    const url: string = 'http://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/';
    return this.http.get<IPost>(url + id);
  }
}
