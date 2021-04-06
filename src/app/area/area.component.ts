import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Coordinate} from '../coordinate';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent {
  @Input()
  src: string;

  @Input()
  coordinates: Coordinate[];

  @Output('onClick') onClick: EventEmitter<Coordinate> = new EventEmitter();
  context = {
    url: '1'
  };

  constructor() {
  }

  getCoordinateStyle(coordinate: Coordinate): object {
    return {
      top: `${coordinate.y}px`,
      left: `${coordinate.x}px`,
      height: `${coordinate.height}px`,
      width: `${coordinate.width}px`
    };
  }

  onAreaClick(coordinate): void {
    this.onClick.emit(coordinate);
  }

}
