class Slideshow extends HTMLElement {
  constructor() {
    super();

    this.currentIndex = 0;
    this.animateState = 'on';
    this.images = [
      '/assets/images/iyrs-campus-ariel.webp',
      '/assets/images/iyrs-logo.webp',
      '/assets/images/analog-studios-logo.webp'
    ];
    this.innerHTML = `
      <picture>
        <img
          class="h-96 min-w-fit mr-auto ml-auto"
          width="500"
          height="500"
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