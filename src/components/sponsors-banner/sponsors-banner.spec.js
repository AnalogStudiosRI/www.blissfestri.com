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
  });

  after(() => {
    banner.remove();
    banner = null;
  });

});