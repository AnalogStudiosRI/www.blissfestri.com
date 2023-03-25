import { expect } from '@esm-bundle/chai';
import './header.js';

describe('Components/Header', () => {
  let header;

  before(async () => {
    header = document.createElement('bf-header');
    document.body.appendChild(header);

    await header.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(header).not.equal(undefined);
      expect(header.querySelectorAll('header').length).equal(1);
    });

    it('should have the expected banner image with alt text', () => {
      const bannerImage = document.querySelectorAll('header img');

      expect(bannerImage.length).to.equal(1);
      expect(bannerImage[0].getAttribute('alt')).to.equal('Blissfest logo');
    });
  });

  after(() => {
    header.remove();
    header = null;
  });

});
