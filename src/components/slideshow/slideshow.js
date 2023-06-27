export default class Slideshow extends HTMLElement {
  constructor() {
    super();

    this.currentIndex = 0;
    this.images = [
      '/assets/images/iyrs/iyrs-facade.webp',
      '/assets/images/iyrs/iyrs-front-doors-open.webp',
      '/assets/images/iyrs/iyrs-mezzanine-view.webp',
      '/assets/images/iyrs/iyrs-vip-room.webp',
      '/assets/images/iyrs/iyrs-harbor-view-wide.webp',
      '/assets/images/iyrs/iyrs-harbor-view-close-up.webp',
      '/assets/images/iyrs/iyrs-entrance-top-view.webp',
      '/assets/images/iyrs/iyrs-plaque.webp'
    ];
  }

  preloadImages() {
    let interval;
    let idx = 1; // offset by 1

    interval = setInterval(() => {
      const img = new Image();

      img.src = this.images[idx];

      if (idx === this.images.length - 1) {
        clearInterval(interval);
      } else {
        idx = idx += 1;
      }
    }, 2000);
  }

  setNextImage() {
    const img = this.querySelector('img');
    this.currentIndex = this.currentIndex += 1;

    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }

    img.setAttribute('src', this.images[this.currentIndex]);
    img.setAttribute('alt', `Slideshow image number ${this.currentIndex + 1}`);
  }

  cyclesImages() {
    // TODO better name animate-* class names
    const img = this.querySelector('img');
    const that = this;
    const TRANSITION_STATES = {
      SHOW: 'show',
      FADE_IN: 'fade-in',
      FADE_OUT: 'fade-out',
      SWAP: 'swap'
    };

    let startTime;
    let state = TRANSITION_STATES.SHOW;

    // state(s) - showing (5s), fadeOut (1s), swap, fadeIn (1)
    // 1) > 4000s - set state and class to fade out
    // 2) > 5250s - swap image
    // 3) > 5750s - fade in
    // 3) > 7500s - reset loop
    function cycleTransition(timestamp) {
      if (startTime === undefined) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;

      if (state === TRANSITION_STATES.SHOW && elapsed > 4000) {
        console.log('fade out!');
        state = TRANSITION_STATES.FADE_OUT;

        img.classList.add('animate-fade');
      } else if (state === TRANSITION_STATES.FADE_OUT && elapsed > 5250) {
        console.log('set next!');
        state = TRANSITION_STATES.SWAP;

        that.setNextImage();
      } else if (state === TRANSITION_STATES.SWAP && elapsed > 5750) {
        console.log('fade in!');
        state = TRANSITION_STATES.FADE_IN;

        img.classList.replace('animate-fade', 'animate-other');
      } else if (state === TRANSITION_STATES.FADE_IN && elapsed > 7500) {
        console.log('reset!!!!');
        img.classList.remove('animate-other');
        startTime = undefined;
        state = TRANSITION_STATES.SHOW;
      }

      window.requestAnimationFrame(cycleTransition);
    }

    window.requestAnimationFrame(cycleTransition);
  }

  connectedCallback() {
    this.innerHTML = `
      <picture>
        <img
          class="block w-full rounded-2xl"
          width="400"
          height="400"
          src="${this.images[this.currentIndex]}"
          alt="Slideshow image number ${this.currentIndex + 1}"
        />
      </picture>
    `;

    if (globalThis.window) {
      this.preloadImages();
      this.cyclesImages();
    }
  }
}

customElements.define('bf-slideshow', Slideshow);