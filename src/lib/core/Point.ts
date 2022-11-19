/**
 * The Point class defines a point in the plane using integer precision.
 */
export class Point {
  private _x: number;
  private _y: number;

  public constructor(xpos: number, ypos: number) {
    this._x = xpos;
    this._y = ypos;
  }

  public setX(newX: number) {
    this._x = newX;
  }

  public setY(newY: number) {
    this._y = newY;
  }
}
