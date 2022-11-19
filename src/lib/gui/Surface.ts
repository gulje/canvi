import { Size } from '@/core/Size.js';
import { SurfaceFormat } from './SurfaceFormat.js';

export interface SurfaceOptions {
  format?: SurfaceFormat;
  size: Size;
}

/**
 * The Surface class is an abstraction of randerable surfaces in Canvi.
 */
export class Surface {
  public format?: SurfaceFormat;
  public size: Size;

  public constructor(options: SurfaceOptions) {
    this.format = options.format;
    this.size = options.size;
  }
}
