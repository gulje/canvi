import { AspectRatioMode } from './index.js';

/**
 * @description A size is specified by a width and a height.
 * It can be set in the constructor.
 */
export class Size {
  private _width: number;
  private _height: number;

  /**
   * Constructs a size with the given width and height.
   * @param {number} x
   * @param {number} y
   */
  constructor(x: number, y: number) {
    this._width = x;
    this._height = y;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  /**
   * Sets the width to the given `width`.
   * @param {number} width
   * @returns {Size}
   */
  public setWidth(width: number): Size {
    this._width = width;
    return this;
  }

  /**
   * Sets the height to the given `height`.
   * @param {number} height
   * @returns {Size}
   */
  public setHeight(height: number): Size {
    this._height = height;
    return this;
  }

  /**
   * Returns a size holding the minimum width and height of this size and the given otherSize.
   * @param {Size} otherSize
   * @returns {Size}
   */
  public boundedTo(otherSize: Size): Size {
    return new Size(
      Math.min(this.width, otherSize.width),
      Math.min(this.height, otherSize.height),
    );
  }

  /**
   * @param {Size} otherSize
   * @returns {Size}
   */
  public expandedTo(otherSize: Size): Size {
    return new Size(
      Math.max(this.width, otherSize.width),
      Math.max(this.height, otherSize.height),
    );
  }

  /**
   * Swaps the width and height values.
   * @returns {void}
   */
  public transpose(): void {
    const _temp = this.width;
    this._width = this.height;
    this._height = _temp;
  }

  /**
   * Returns a Size with width and height swapped.
   * @returns {Size}
   */
  public transposed(): Size {
    return new Size(this.height, this.width);
  }

  /**
   * Scales the size to a rectangle with the given `s.width` and `s.height`, according to the specified `mode`.
   * - If `mode` is {@link AspectRatioMode#IgnoreAspectRatio}, the size is set to `(s.width, s.height)`.
   * - If `mode` is {@link AspectRatioMode#KeepAspectRatio}, the current size is scaled to a rectangle as large as possible inside `(s.width, s.height)`, preserving the aspect ratio.
   * - If `mode` is {@link AspectRatioMode#KeepAspectRatioByExpanding} the current size is scaled to a rectangle as small as possible outside `(s.width, s.height)`, preserving the aspect ratio.
   * @param {Size} s
   * @param {AspectRatioMode} mode
   */
  public scale(s: Size, mode: AspectRatioMode) {
    const scaled = this.scaled(s, mode);

    this._width = scaled.width;
    this._height = scaled.height;
  }

  /**
   * This is an overloaded function.
   *
   * Returns a size scaled to a rectangle with the given size `s`, according to the specified `mode`.
   * @param {Size} s
   * @param {mode} mode
   */
  public scaled(s: Size, mode: AspectRatioMode): Size {
    if (
      mode === AspectRatioMode.IgnoreAspectRatio ||
      this.width === 0 ||
      this.height === 0
    ) {
      return s;
    } else {
      let useHeight: boolean;

      const rw = Math.floor((s.height * this.width) / this.height);

      if (mode === AspectRatioMode.KeepAspectRatio) {
        useHeight = rw <= s.width;
      } else {
        // mode === AspectRatioMode.KeepAspectRatioByExpanding
        useHeight = rw >= s.width;
      }

      if (useHeight) {
        return new Size(rw, s.height);
      } else {
        return new Size(
          s.width,
          Math.floor((s.width * this.height) / this.width),
        );
      }
    }
  }
}
