
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-article-form',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './add-article-form.component.html',
  styleUrls: ['./add-article-form.component.css']
})
export class AddArticleFormComponent {
  @Output() articleAdded = new EventEmitter<{ title: string; description: string; imageUrl: string }>();

  title: string = '';
  description: string = '';
  imageUrl: string = '';

  addArticle() {
    this.articleAdded.emit({
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
    });
   
    this.title = '';
    this.description = '';
    this.imageUrl = '';
  }
}
