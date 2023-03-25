export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header
        class="pb-20 bg-repeat-x bg-bottom"
        style="background-image: url('/assets/images/tear-strip.webp');"
      >
        <div class="text-center bg-primary">
          <img
            class="inline-block w-1/2 pt-6 pb-5 md:pt-10 md:pb-10"
            src="/assets/images/blissfest-logo.webp"
            alt="Blissfest logo"
          />
        </div>
      </header>
    `;
  }
}

customElements.define('bf-header', Header);