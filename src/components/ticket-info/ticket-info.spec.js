import { expect } from '@esm-bundle/chai';
import './ticket-info.js';

describe('Components/Ticket Info', () => {
  let info;

  before(async () => {
    info = document.createElement('bf-ticket-info');
    document.body.appendChild(info);

    await info.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(info).not.equal(undefined);
      expect(info.querySelectorAll('div.ticket-info').length).equal(1);
    });

    it('should have a get tickets link that links to the tickets page', () => {
      const link = document.querySelectorAll('a');

      expect(link.length).to.equal(1);
      expect(link[0].getAttribute('href')).to.equal('/tickets/');
    });

    it('should have a list with list items of content', () => {
      const list = document.querySelectorAll('ul');
      const subList = document.querySelectorAll('ul li');

      expect(list.length).to.equal(1);
      expect(subList.length).to.be.greaterThan(1);
    });
  });

  after(() => {
    info.remove();
    info = null;
  });

});