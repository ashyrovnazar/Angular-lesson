import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = '';
  message = '';
  @Output() getAdded: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit() {
  }

  addPost() {
    if(this.title.trim() && this.message.trim()) {
      const post = {
        title: this.title,
        message: this.message
      };

      this.getAdded.emit(post);

      this.title = this.message = '';
    }
  }
}
