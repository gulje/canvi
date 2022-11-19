import { Size } from '@/core/Size.js';

export interface SurfaceFormatOptions {
  alpha?: number;
  size: Size;
}

/**
 * The SurfaceFormat class presents the format of a {@link Surface}.
 */
export class SurfaceFormat {
  public alpha: number;
  public size: Size;

  public constructor(options: SurfaceFormatOptions) {
    this.alpha = options.alpha || 0;
    this.size = options.size;
  }

  public hasAlpha(): boolean {
    return this.alpha > 0;
  }
}
