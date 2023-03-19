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

    it('should have the expected heading content', () => {
      const heading = document.getElementsByTagName('h1')[0];
      const edge = document.getElementsByTagName('img')[0];

      expect(heading.textContent).to.equal('Welcome to Blissfest!');
      expect(edge).not.equal(undefined);
    });
  });

  after(() => {
    header.remove();
    header = null;
  });

});
