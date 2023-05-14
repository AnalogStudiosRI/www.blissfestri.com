import { expect } from '@esm-bundle/chai';
import './faq-card.js';

describe('Components/FAQ Card', () => {
  const heading = 'Some Heading';
  const content = 'Lorum Ipsum';
  const label = 'target';
  let card;

  before(async () => {
    card = document.createElement('bf-faq-card');

    card.setAttribute('heading', heading);
    card.setAttribute('content', content);
    card.setAttribute('label', label);

    document.body.appendChild(card);

    await card.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(card).not.equal(undefined);
    });

    it('should have the expected heading content', () => {
      const header = card.querySelectorAll('h3');

      expect(header.length).to.equal(1);
      expect(header[0].textContent.replace(/ /g, '').replace(/\n/g, '')).to.equal(heading.replace(/ /g, ''));
    });

    it('should have the expected content content', () => {
      const paragraph = card.querySelectorAll('p');

      expect(paragraph.length).to.equal(1);
      expect(paragraph[0].textContent.replace(/ /g, '').replace(/\n/g, '')).to.equal(content.replace(/ /g, ''));
    });

    it('should have the expected label content', () => {
      const header = card.querySelector('h3');

      expect(header.getAttribute('id')).to.equal(label);
    });
  });

  after(() => {
    card.remove();
    card = null;
  });

});
