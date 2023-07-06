import { expect } from '@esm-bundle/chai';
import './slideshow.js';

describe('Components/Slideshow', () => {
  let slideshow;

  before(async () => {
    slideshow = document.createElement('bf-slideshow');
    document.body.appendChild(slideshow);

    await slideshow.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(slideshow).not.equal(undefined);
      expect(slideshow.querySelectorAll('picture').length).equal(1);
    });

    it('should have only one image tag', () => {
      const image = slideshow.querySelectorAll('img');

      expect(image.length).to.equal(1);
    });

    it('should have only one image tag', () => {
      const image = slideshow.querySelector('img');

      expect(image.getAttribute('src')).to.not.equal(undefined);
      expect(image.getAttribute('alt')).to.equal('Slideshow image number 1');
    });

    // TODO test events
  });

  after(() => {
    slideshow.remove();
    slideshow = null;
  });

});