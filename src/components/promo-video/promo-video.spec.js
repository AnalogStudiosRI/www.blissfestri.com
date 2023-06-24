import { expect } from '@esm-bundle/chai';
import './promo-video.js';

describe('Components/Promo Video', () => {
  let promo;

  before(async () => {
    promo = document.createElement('bf-promo-video');
    document.body.appendChild(promo);

    await promo.updateComplete;
  });

  describe('Default Behavior', () => {
    let frame;

    beforeEach(() => {
      frame = promo.querySelector('iframe');
    });

    it('should not be null', () => {
      expect(promo).not.equal(undefined);
      expect(frame).not.equal(undefined);
      expect(promo.querySelectorAll('iframe').length).equal(1);
    });

    it('should have the expected src attribute for the iframe', () => {
      expect(frame.getAttribute('src')).to.equal('https://www.youtube.com/embed/-zazqdr-g6A');
    });

    it('should have the loading attribute for the iframe', () => {
      expect(frame.getAttribute('loading')).to.equal('lazy');
    });

    it('should have the title attribute for the iframe', () => {
      expect(frame.getAttribute('title')).to.equal('Blissfest Promotional Video');
    });
  });

  after(() => {
    promo.remove();
    promo = null;
  });

});