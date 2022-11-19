import { Margins } from './Margins.js';
import { Point } from './Point.js';
import { Size } from './Size.js';

/**
 * The Rect class defines a rectangle in the plane using integer precision.
 */
export class Rect {
  private _topLeft: Point;
  private _size: Size;

  public constructor(topLeft: Point, size: Size) {
    this._topLeft = topLeft;
    this._size = size;
  }

  /**
   * Returns the x-coordinate of the rectangle's left edge.
   *
   * Equivalent to {@link Rect#x Rect#x}
   */
  get left(): number {
    return this.x;
  }

  /**
   * Returns the y-coordinate of the rectangle's top edge.
   *
   * Equivalent to {@link Rect#y Rect#y}
   */
  get top(): number {
    return this.y;
  }

  /**
   * Returns the x-coordinate of the rectangle's right edge.
   */
  get right(): number {
    return this.left + this.width;
  }

  /**
   * Returns the y-coordinate of the rectangle's bottom edge.
   */
  get bottom(): number {
    return this.top + this.height;
  }

  /**
   * Returns the x-coordinate of the rectangle's left edge.
   *
   * Equivalent to {@link Rect#left Rect#left}
   */
  get x(): number {
    return this._topLeft.x;
  }

  /**
   * Returns the y-coordinate of the rectangle's top edge.
   *
   * Equivalent to {@link Rect#top Rect#top}
   */
  get y(): number {
    return this._topLeft.y;
  }

  /**
   * Sets the left edge of the rectangle to given `x` coordinate.
   *
   * This may change the width, but will never change the right edge of the rectangle.
   */
  public setLeft(x: number): Rect {
    this._topLeft.setX(x);
    return this;
  }

  /**
   * Sets the top edge of the rectangle to given `y` coordinate.
   *
   * This may change the height, but will never change the bottom edge of the rectangle.
   */
  public setTop(y: number): Rect {
    this._topLeft.setY(y);
    return this;
  }

  /**
   * Sets the right edge of the rectangle to given `x` coordinate.
   *
   * This may change the width, but will never change the left edge of the rectangle.
   */
  public setRight(x: number): Rect {
    this._size.setWidth(x);
    return this;
  }

  /**
   * Sets the bottom edge of the rectangle to given `y` coordinate.
   *
   * This may change the height, but will never change the top edge of the rectangle.
   */
  public setBottom(y: number): Rect {
    this._size.setHeight(y);
    return this;
  }

  /**
   * Sets the top-left edge of the rectangle to given `position`.
   *
   * This may change the size, but will never change the bottom-right corner of the rectangle.
   */
  public setTopLeft(position: Point): Rect {
    this._topLeft = position;
    return this;
  }

  /**
   * Sets the bottom-right edge of the rectangle to given `position`.
   *
   * This may change the size, but will never change the top-left corner of the rectangle.
   */
  public setBottomRight(point: Point): Rect {
    this.setBottom(point.y);
    this.setRight(point.x);
    return this;
  }

  /**
   * Sets the top-right edge of the rectangle to given `position`.
   *
   * This may change the size, but will never change the bottom-left corner of the rectangle.
   */
  public setTopRight(point: Point): Rect {
    this.setTop(point.y);
    this.setRight(point.x);
    return this;
  }

  /**
   * Sets the bottom-left edge of the rectangle to given `position`.
   *
   * This may change the size, but will never change the top-right corner of the rectangle.
   */
  public setBottomLeft(point: Point): Rect {
    this.setBottom(point.y);
    this.setLeft(point.x);
    return this;
  }

  public setSize(size: Size): Rect {
    this._size = size;

    return this;
  }

  /**
   * Returns the height of the rectangle.
   */
  get height(): number {
    return this._size.height;
  }

  /**
   * Returns the width of the rectangle.
   */
  get width(): number {
    return this._size.width;
  }

  get bottomLeft(): Point {
    return new Point(this.left, this.bottom);
  }

  get bottomRight(): Point {
    return new Point(this.right, this.bottom);
  }

  get topLeft(): Point {
    return new Point(this.left, this.top);
  }

  get topRight(): Point {
    return new Point(this.right, this.top);
  }

  get center(): Point {
    return new Point(
      Math.floor((this.width + this.left) / 2),
      Math.floor((this.height + this.top) / 2),
    );
  }

  /**
   * Moves the rectangle horizontally, leaving the rectangle's left edge at the given `x` coordinate.
   *
   * The rectangle's size is unchanged.
   */
  public moveLeft(x: number): Rect {
    this.setRight(this.right + (x - this.left));
    this.setLeft(x);
    return this;
  }

  /**
   * Moves the rectangle vertically, leaving the rectangle's top edge at the given `y` coordinate.
   *
   * The rectangle's size is unchanged.
   */
  public moveTop(y: number): Rect {
    this.setBottom(this.bottom + (y - this.top));
    this.setTop(y);
    return this;
  }

  /**
   * Moves the rectangle horizontally, leaving the rectangle's right edge at the given `x` coordinate.
   *
   * The rectangle's size is unchanged.
   */
  public moveRight(x: number): Rect {
    this.setLeft(this.left + (x - this.right));
    this.setRight(x);
    return this;
  }

  /**
   * Moves the rectangle vertically, leaving the rectangle's bottom edge at the given `y` coordinate.
   *
   * The rectangle's size is unchanged.
   */
  public moveBottom(y: number): Rect {
    this.setTop(this.top + (y - this.bottom));
    this.setBottom(y);
    return this;
  }

  /**
   * Moves the rectangle, leaving the top-left corner at the given position.
   *
   * The rectangle's size is unchanged.
   */
  public moveTopLeft(position: Point) {
    this.moveLeft(position.x);
    this.moveTop(position.y);
    return this;
  }

  /**
   * Moves the rectangle, leaving the top-left corner at the given `position`.
   *
   * The rectangle's size is unchanged.
   */
  public moveBottomRight(position: Point): Rect {
    this.moveRight(position.x);
    this.moveBottom(position.y);
    return this;
  }

  /**
   * Moves the rectangle, leaving the top-right corner at the given `position`.
   *
   * The rectangle's size is unchanged.
   */
  public moveTopRight(position: Point): Rect {
    this.moveRight(position.x);
    this.moveTop(position.y);
    return this;
  }

  /**
   * Moves the rectangle, leaving the bottom-left corner at the given `position`.
   *
   * The rectangle's size is unchanged.
   */
  public moveBottomLeft(position: Point): Rect {
    this.moveLeft(position.x);
    this.moveBottom(position.y);
    return this;
  }

  /**
   * Moves the rectangle, leaving the center at the given `position`.
   *
   * The rectangle's size is unchanged.
   */
  public moveCenter(position: Point): Rect {
    this.moveLeft(position.x - this.width / 2);
    this.moveTop(position.y - this.height / 2);

    return this;
  }

  /**
   * Returns a rectangle grown by the margins.
   */
  public marginsAdded(margins: Margins): Rect {
    return new Rect(
      new Point(this.left + margins.left, this.top + margins.top),
      new Size(this.right - margins.right, this.bottom - margins.bottom),
    );
  }
}
