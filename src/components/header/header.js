export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header
        class="pb-16 bg-repeat-x bg-bottom"
        style="background-image: url('/assets/images/tear-strip.webp');"
      >
        <div class="text-center bg-primary">
          <img
            class="inline-block w-2/3 pt-5 pb-5 lg:w-1/2"
            src="/assets/images/blissfest-logo.webp"
            alt="Blissfest logo"
          />
        </div>
      </header>
    `;
  }
}

customElements.define('bf-header', Header);