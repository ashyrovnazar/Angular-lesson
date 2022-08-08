import {Component} from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {
    inputValue = ''
    inputValue2 = 'Place'
    toggle = true

    onInput(event: Event) {
        this.inputValue = (<HTMLInputElement>event.target).value
    }

    onBlur(str: string) {
        this.inputValue = str
    }
}
