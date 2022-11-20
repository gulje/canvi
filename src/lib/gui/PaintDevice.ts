import { Size } from '@/core/Size.js';
import { PaintEngine } from './PaintEngine.js';
import { Painter } from './Painter.js';

export interface PaintDeviceOptions {
  size: Size;
  paintEngine: typeof PaintEngine;
}

/**
 * The PaintDevice class is the base class of objects that can be painted on with Painter.
 */
export class PaintDevice {
  public size: Size;
  public paintEngine: PaintEngine;

  public constructor(options: PaintDeviceOptions) {
    this.paintEngine = new options.paintEngine(this, new Painter(this));
    this.size = options.size;
  }

  get width() {
    return this.size.width;
  }

  get height() {
    return this.size.height;
  }
}
