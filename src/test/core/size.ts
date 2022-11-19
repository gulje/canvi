import { expect } from 'chai';
import { Size } from '@/core/Size.js';
import { AspectRatioMode } from '@/core/index.js';

describe('Size', function () {
  describe('', function () {
    it('Size#scale(s, IgnoreAspectRatio)', function () {
      const s = new Size(10, 12);
      s.scale(new Size(60, 60), AspectRatioMode.IgnoreAspectRatio);

      expect(`${s.width} ${s.height}`).to.equal('60 60');
    });

    it('Size#scale(s, KeepAspectRatio)', function () {
      const s = new Size(10, 12);
      s.scale(new Size(60, 60), AspectRatioMode.KeepAspectRatio);

      expect(`${s.width} ${s.height}`).to.equal('50 60');
    });

    it('Size#scale(s, KeepAspectRatioByExpanding)', function () {
      const s = new Size(10, 12);
      s.scale(new Size(60, 60), AspectRatioMode.KeepAspectRatioByExpanding);

      expect(`${s.width} ${s.height}`).to.equal('60 72');
    });
  });
});
