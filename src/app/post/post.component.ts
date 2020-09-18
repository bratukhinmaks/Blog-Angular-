import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @ContentChild('info', {static: true}) info: ElementRef;
  @Input() post: Post;
  constructor() { }
  ngOnInit() {
    console.log(this.info.nativeElement);
  }

}
