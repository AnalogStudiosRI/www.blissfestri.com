class Slideshow extends HTMLElement {
  constructor() {
    super();

    this.currentIndex = 0;
    this.animateState = 'on';
    this.images = [
      '/assets/images/iyrs/iyrs-facade.webp',
      '/assets/images/iyrs/iyrs-front-doors-open.png',
      '/assets/images/iyrs/iyrs-mezzanine-view.png',
      '/assets/images/iyrs/iyrs-vip-room.png',
      '/assets/images/iyrs/iyrs-harbor-view-wide.png',
      '/assets/images/iyrs/iyrs-harbor-view-close-up.png',
      '/assets/images/iyrs/iyrs-entrance-top-view.png',
      '/assets/images/iyrs/iyrs-plaque.png'
    ];
    this.innerHTML = `
      <picture>
        <img
          class="block w-full"
          width="400"
          height="400"
          src="${this.images[this.currentIndex]}"
          alt="Slideshow image number ${this.currentIndex + 1}"
        />
      </picture>
    `;
  }

  cycleImage() {
    const img = this.querySelector('img');
    this.currentIndex = this.currentIndex += 1;

    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }

    img.setAttribute('src', this.images[this.currentIndex]);
    img.setAttribute('alt', `Slideshow image number ${this.currentIndex + 1}`);
  }

  connectedCallback() {
    if (globalThis.window) {
      setInterval(() => {
        this.animateState = 'off';
        // this.update();

        setTimeout(() => {
          this.cycleImage();
          this.animateState = 'on';
          // this.update();
        }, 500);
      }, 5000);
    }
  }
}

customElements.define('bf-slideshow', Slideshow);