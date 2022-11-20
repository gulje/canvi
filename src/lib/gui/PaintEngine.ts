import { PaintDevice } from './PaintDevice.js';
import { Painter } from './Painter.js';

/**
 * The PaintEngine class provides an abstract definition of how Painter draws to a given device.
 */
export class PaintEngine {
  public device: PaintDevice;
  public painter: Painter;

  public constructor(device: PaintDevice, painter: Painter) {
    this.device = device;
    this.painter = painter;
  }
}
