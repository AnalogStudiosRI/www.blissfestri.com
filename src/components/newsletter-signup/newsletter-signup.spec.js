import { expect } from '@esm-bundle/chai';
import './newsletter-signup.js';

describe('Components/Newsletter Signup', () => {
  let form;

  before(async () => {
    form = document.createElement('bf-newsletter-signup');
    document.body.appendChild(form);

    await form.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(form).not.equal(undefined);
      expect(form.querySelectorAll('form').length).equal(1);
    });

    it('should have the expected text', () => {
      const image = document.getElementsByTagName('img')[0];
      const heading = document.getElementsByTagName('h2')[0];
      const tagLine = document.getElementsByTagName('p')[0];
      const button = document.getElementsByTagName('button')[0];
      const labels = document.getElementsByTagName('label');

      expect(image.alt).to.equal('popped open bottle with music sheet');
      expect(heading.textContent.trim()).to.equal('Stay in Touch!');
      expect(tagLine.textContent.trim()).to.equal(
        'Subscribe to stay up to date with the latest Blissfest news and updates!'
      );
      expect(labels[0].textContent.trim()).to.equal('Name (optional)');
      expect(labels[1].textContent.trim()).to.equal('Email Address');
      expect(button.textContent.trim()).to.equal('Sign Me Up');
    });
  });

  after(() => {
    form.remove();
    form = null;
  });

});
