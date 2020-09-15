import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {

  article;

  constructor(private newsService : NewsService) {}

  ngOnInit()
  {
    this.article = this.newsService.currentArticle;
  }

}
