// src/app/app.component.ts
import { Component } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { AddArticleFormComponent } from './add-article-form/add-article-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BlogComponent, AddArticleFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogApp';

  // Method to handle the addition of a new article (optional)
  onArticleAdded(article: { title: string; description: string; imageUrl: string }) {
    console.log('New article added:', article);
    // Logic to add the article to a list or pass it to BlogComponent
  }
}
