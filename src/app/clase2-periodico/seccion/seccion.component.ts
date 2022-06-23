import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent {

  @Input() likes: number = 0;
  @Output() likeEvEmitter: EventEmitter<number> = new EventEmitter<number>();


  public like(): void {
    this.likeEvEmitter.emit(this.likes + 1);
  }

}
