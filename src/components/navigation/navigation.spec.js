import { expect } from '@esm-bundle/chai';
import './navigation.js';

describe('Components/Navigation', () => {
  let nav;

  before(async () => {
    nav = document.createElement('bf-navigation');

    document.body.appendChild(nav);

    await nav.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(nav).not.equal(undefined);
      expect(nav.querySelectorAll('nav').length).equal(1);
    });
  });

  describe('Nav Links', () => {
    let links = [];

    before(async () => {
      links = nav.querySelectorAll('nav a.nav-link');
    });

    it('should have the expected number of links in the nav', () => {
      expect(links.length).to.equal(4);
    });

    it('should have the expected links in the correct order', () => {
      const navLinks = Array.from(links).map(link => link.getAttribute('href'));

      expect(navLinks[0]).to.equal('/');
      expect(navLinks[1]).to.equal('/about/');
      // expect(navLinks[2]).to.equal('/lineup/');
      // expect(navLinks[3]).to.equal('/tickets/');
      // expect(navLinks[4]).to.equal('/faq/');
      expect(navLinks[2]).to.equal('/news/');
      expect(navLinks[3]).to.equal('/contact/');
    });

    it('should have the expected link labels in the correct order', () => {
      const navText = Array.from(links).map(link => link.innerText.trim());

      expect(navText[0]).to.equal('Home');
      expect(navText[1]).to.equal('About');
      // expect(navText[2]).to.equal('Lineup');
      // expect(navText[3]).to.equal('Tickets');
      // expect(navText[4]).to.equal('FAQ');
      expect(navText[2]).to.equal('News');
      expect(navText[3]).to.equal('Contact');
    });

    after(async () => {
      links = [];
    });
  });

  after(() => {
    nav.remove();
    nav = null;
  });

});