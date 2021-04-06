export class Coordinate {
  x = 0;
  y = 0;
  width = 100;
  height = 100;
  name: string;
  url: string;

  constructor(init?: Partial<Coordinate>) {
    Object.assign(this, init);
  }
}
