export class Point {
  readonly x = 0;
  readonly y = 0;
  z;
  constructor(z: number) {
    this.z = z;
  }
  print(): void {
    console.log(`This is ${this.x} ${this.y} ${this.z}`);
  }
}
