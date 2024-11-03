// src/app/blog/blog.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddArticleFormComponent } from '../add-article-form/add-article-form.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, AddArticleFormComponent], 
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  articles: any[] = [
    {
      title: 'Introduction to Angular',
      imageUrl: 'https://via.placeholder.com/150',
      publicationDate: new Date('2023-09-15'),
      description: 'An introductory guide to the Angular framework and its core concepts.',
      score: 10
    },
    {
      title: 'Building Responsive Layouts with Bootstrap',
      imageUrl: 'https://via.placeholder.com/150',
      publicationDate: new Date('2023-10-10'),
      description: 'Learn how to create responsive web layouts using Bootstrap 5.',
      score: 8
    }
  ];
  
  searchTerm: string = '';
  showAddArticle: boolean = false;

  get filteredArticles() {
    return this.articles
      .filter(article => article.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .sort((a, b) => b.score - a.score);
  }
  filterArticles() {
    
  }
  

  upvote(article: any) {
    article.score += 1;
  }
  

  downvote(article: any) {
    if (article.score > 0) {
      article.score -= 1;
    }
  }
  

  
    addArticle(newArticle: any) {
      this.articles.push({
        ...newArticle,
        publicationDate: new Date(), 
        score: 0                     
      });
      this.showAddArticle = false;   
    }
     
  }

