export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header
        class="pb-20"
        style="background-image: url('/assets/images/tear-strip.webp'); background-repeat: repeat-x; background-position: bottom"
      >
        <div class="text-center bg-primary">
          <img
            class="inline-block w-1/2 pt-10 pb-10"
            src="/assets/images/blissfest-logo.webp"
            alt="Blissfest logo"
          >
        </div>
      </header>
    `;
  }
}

customElements.define('bf-header', Header);