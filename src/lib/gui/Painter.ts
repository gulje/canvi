import { PaintDevice } from './PaintDevice.js';

/**
 * The Painter class performs low-level painting on widgets and other paint devices.
 */
export class Painter {
  public device: PaintDevice;

  public constructor(device: PaintDevice) {
    this.device = device;
  }
}
