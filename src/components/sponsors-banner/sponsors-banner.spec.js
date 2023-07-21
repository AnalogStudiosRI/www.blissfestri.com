import { expect } from '@esm-bundle/chai';
import './sponsors-banner.js';

describe('Components/Sponsors Banner', () => {
  let banner;

  before(async () => {
    banner = document.createElement('bf-sponsors-banner');
    document.body.appendChild(banner);

    await banner.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(banner).not.equal(undefined);
      expect(banner.querySelectorAll('div').length).equal(1);
    });

    it('should have the expected header content', () => {
      const heading = banner.querySelectorAll('div h1');

      expect(heading.length).equal(1);
      expect(heading[0].textContent.replace(/ /g, '').replace(/\n/g, '')).equal('OurSponsors');
    });

    it('should have the expected logo output content', () => {
      const sponsors = banner.querySelectorAll('div li');

      expect(sponsors.length).to.be.greaterThanOrEqual(1);

      sponsors.forEach(sponsor => {
        const link = sponsor.querySelectorAll('a');
        const img = sponsor.querySelectorAll('a img');

        expect(link.length).to.equal(1);
        expect(img.length).to.equal(1);

        expect(link[0].getAttribute('href')).to.not.be.equal(null);
        expect(link[0].getAttribute('title')).to.not.be.equal(null);

        expect(img[0].getAttribute('alt')).to.not.be.equal(null);
        expect(img[0].getAttribute('src')).to.not.be.equal(null);
      });
    });
  });

  after(() => {
    banner.remove();
    banner = null;
  });

});