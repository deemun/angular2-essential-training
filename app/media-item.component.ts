import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
 @Input() mediaItem; //property which is [mediaItem] = name of the hash inputted.
 @Output() deleteyo = new EventEmitter(); //property called delete, exposing an event thats built into angular. 

  onDelete() {
    this.deleteyo.emit(this.mediaItem)
  }
}
