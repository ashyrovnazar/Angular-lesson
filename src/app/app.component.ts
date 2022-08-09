import { Component } from '@angular/core';

export interface Post {
  title: string;
  message: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: Post[] = [
    {
      title: 'Урок 1', message: 'Вводная часть по Ангулар', id: 1
    },
    {
      title: 'Урок 2', message: 'Установка зависимостей', id: 2
    }
  ];

  addPost(post: Post) {
    this.posts.unshift(post)
  }
}
