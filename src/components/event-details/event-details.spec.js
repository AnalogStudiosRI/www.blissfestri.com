import { expect } from '@esm-bundle/chai';
import './event-details.js';

function formatText(text) {
  return encodeURIComponent(text.replace(/\n/g, '').replace(/ /g, ''));
}

describe('Components/Event Details', () => {
  let header;

  before(async () => {
    header = document.createElement('bf-event-details');
    document.body.appendChild(header);

    await header.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(header).not.equal(undefined);
      expect(header.querySelectorAll('div.event-details').length).equal(1);
    });

    it('should have the expected primary heading text', () => {
      const headings = document.getElementsByTagName('h1');

      expect(headings.length).to.equal(1);
      expect(formatText(headings[0].textContent)).to.equal('Rhode%C2%A0Island\'sIndie%C2%A0MusicFestival');
    });

    it('should have the expected secondary heading text', () => {
      const headings = document.getElementsByTagName('h2');

      expect(headings.length).to.equal(2);
      expect(formatText(headings[0].textContent)).to.equal('7%CB%9929%CB%992023');
      expect(formatText(headings[1].textContent)).to.equal('5%3A00pmto11%3A00pm');
    });

    it('should have the expected location heading text and logo', () => {
      const container = document.querySelectorAll('div.location');
      const logo = container[0].querySelectorAll('img');

      expect(container.length).to.equal(1);
      expect(logo.length).to.equal(1);

      expect(formatText(container[0].textContent)).to.equal('RestorationHall449ThamesStreetNewport%2CRI02840');
      expect(logo[0].getAttribute('alt')).to.equal('Iyrs logo');
      expect(logo[0].getAttribute('src')).to.not.equal('');
    });

    it('should have the expected presenter text and logo', () => {
      const container = document.querySelectorAll('div.presenter');
      const logo = container[0].querySelectorAll('img');

      expect(container.length).to.equal(1);
      expect(logo.length).to.equal(1);
  
      expect(formatText(container[0].textContent)).to.equal('PresentedbyAnalogStudios');
      expect(logo[0].getAttribute('alt')).to.equal('Analog Studios logo');
      expect(logo[0].getAttribute('src')).to.not.equal('');
    });
  });

  after(() => {
    header.remove();
    header = null;
  });

});
