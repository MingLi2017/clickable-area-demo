import {Component} from '@angular/core';
import {Coordinate} from './coordinate';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image = 'https://images4.alphacoders.com/601/601832.jpg';
  coordinates: Coordinate[] = [
    {
      name: 'Tim',
      x: 230,
      y: 230,
      width: 100,
      height: 270,
      url: 'https://cjmart.jp/en/upload/save_image/0134_190824_mp4otl_y_3.jpg'
    },
    {
      name: 'Bob',
      x: 350,
      y: 300,
      width: 100,
      height: 200,
      url: 'https://cjmart.jp/en/upload/save_image/0126_190824_mp4otl_y_3.jpg'
    },
    {
      name: 'Stugart',
      x: 460,
      y: 270,
      width: 100,
      height: 230,
      url: 'https://cjmart.jp/en/upload/save_image/0130_190824_mp4otl_y_3.jpg'
    }
  ];

  showImage: boolean;

  getClick(coordinate: Coordinate): void {
    console.log(`Clicked on ${coordinate.name}`);
  }
}
