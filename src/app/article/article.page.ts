import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IPost } from '../interfaces/post';
import { WordpressService } from '../wordpress.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  ID: number;
  post: IPost = {
      ID: null,
      title: null,
      content: null,
      date: null
    };
  constructor(
    public route: ActivatedRoute,
    public wordpress: WordpressService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ID = parseInt(params.get('articleId'), 10);
    })
  }

  ionViewDidEnter() {
    this.wordpress.getArticle(this.ID)
    .subscribe(data => {
      this.post = data;
    });
  }

}
