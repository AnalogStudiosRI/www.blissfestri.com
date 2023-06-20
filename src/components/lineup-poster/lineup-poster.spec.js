import { expect } from '@esm-bundle/chai';
import './lineup-poster.js';

describe('Components/Lineup Poster', () => {
  let lineup;

  before(async () => {
    lineup = document.createElement('bf-lineup-poster');
    document.body.appendChild(lineup);

    await lineup.updateComplete;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(lineup).not.equal(undefined);
      expect(lineup.querySelectorAll('div.lineup').length).equal(1);
    });

    it('should have the expected heading text', () => {
      const header = document.querySelectorAll('h2');

      expect(header.length).to.equal(1);
      expect(header[0].textContent.replace(/ /g, '').replace(/\n/g, '')).to.equal('Lineup');
    });

    it('should have the expected number of lineup lists', () => {
      const lists = document.querySelectorAll('ul');

      expect(lists.length).to.equal(3);
    });

    it('should have the expected content in each list of items', () => {
      const lists = document.querySelectorAll('ul');

      lists.forEach(list => {
        const subList = list.querySelectorAll('li');

        subList.forEach(item => {
          expect(item.textContent).to.not.be.undefined;
        });
      });
    });
  });

  after(() => {
    lineup.remove();
    lineup = null;
  });

});