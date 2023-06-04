import { expect } from '@esm-bundle/chai';
import './footer.js';

describe('Components/Footer', () => {
  let footer;

  before(async () => {
    footer = document.createElement('bf-footer');
    document.body.appendChild(footer);

    await footer.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(footer).not.equal(undefined);
      expect(footer.querySelectorAll('footer').length).equal(1);
    });

    it('should have the expected number of links on the page', () => {
      const links = document.querySelectorAll('a');

      expect(links.length).to.equal(6);
    });

    describe('Social Icon Links', () => {
      it('should have the expected Facebook social link icon', () => {
        const facebookLink = document.querySelectorAll('a[aria-label="Analog Studios Facebook page"]');
        const facebookImage = facebookLink[0].querySelectorAll('img');

        expect(facebookLink.length).to.equal(1);
        expect(facebookImage.length).to.equal(1);
      });

      it('should have the expected YouTube social link icon', () => {
        const youtubeLink = document.querySelectorAll('a[aria-label="Analog Studios YouTube page"]');
        const youtubeImage = youtubeLink[0].querySelectorAll('img');

        expect(youtubeLink.length).to.equal(1);
        expect(youtubeImage.length).to.equal(1);
      });

      it('should have the expected Instagram social link icon', () => {
        const instagramLink = document.querySelectorAll('a[aria-label="Dave Flamand Instagram page"]');
        const instagramImage = instagramLink[0].querySelectorAll('img');

        expect(instagramLink.length).to.equal(1);
        expect(instagramImage.length).to.equal(1);
      });
    });

    describe('Copyright and Disclaimers', () => {
      it('should have the expected copyright notice', () => {
        const copyright = document.querySelectorAll('[aria-label="Copyright Notice"]');

        expect(copyright.length).to.equal(1);
        expect(copyright[0].textContent.replace(/ /g, '').replace(/\n/g, '')).to.equal('Copyright©AnalogStudios.AllRightsReserved.');
      });

      it('should have the expected privacy policy page link', () => {
        const privacyLink = document.querySelectorAll('[href="/privacy-policy/"]');

        expect(privacyLink.length).to.equal(1);
        expect(privacyLink[0].textContent.replace(/ /g, '').replace(/\n/g, '')).to.equal('PrivacyPolicy');
      });

      it('should have the expected terms of use link', () => {
        const termsLink = document.querySelectorAll('[href="/terms-of-use/"]');

        expect(termsLink.length).to.equal(1);
        expect(termsLink[0].textContent.replace(/ /g, '').replace(/\n/g, '')).to.equal('TermsofUse');
      });
    });
  });

  after(() => {
    footer.remove();
    footer = null;
  });

});