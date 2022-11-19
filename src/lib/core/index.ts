/**
 * @see {@link Size#scale Size#scale}()
 */
export enum AspectRatioMode {
  /** The size is scaled freely. The aspect ratio is not preserved. */
  IgnoreAspectRatio,
  /** The size is scaled to a rectangle as large as possible inside a given rectangle, preserving the aspect ratio. */
  KeepAspectRatio,
  /** The size is scaled to a rectangle as small as possible outside a given rectangle, preserving the aspect ratio. */
  KeepAspectRatioByExpanding,
}

export { Size } from './Size.js';
