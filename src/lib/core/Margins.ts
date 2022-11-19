export interface MarginsOptions {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

/**
 * The Margins class defines the four margins of a rectangle.
 */
export class Margins {
  public left: number;
  public top: number;
  public right: number;
  public bottom: number;

  public constructor(options: MarginsOptions) {
    this.left = options.left;
    this.top = options.top;
    this.right = options.right;
    this.bottom = options.bottom;
  }
}
