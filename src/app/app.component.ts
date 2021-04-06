import {Component} from '@angular/core';
import {Coordinate} from './coordinate';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image = '../assets/minions.jpg';
  coordinates: Coordinate[] = [
    {
      name: 'Tim',
      x: 230,
      y: 230,
      width: 100,
      height: 270,
      url: '../assets/tim.jpg'
    },
    {
      name: 'Bob',
      x: 350,
      y: 300,
      width: 100,
      height: 200,
      url: '../assets/bob.jpg'
    },
    {
      name: 'Stugart',
      x: 460,
      y: 270,
      width: 100,
      height: 230,
      url: '../assets/stuart.jpg'
    }
  ];

  showImage: boolean;

  getClick(coordinate: Coordinate): void {
    console.log(`Clicked on ${coordinate.name}`);
  }
}
