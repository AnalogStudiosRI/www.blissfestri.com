export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header
        class="bg-primary text-center"
      >
        <img
          class="inline-block w-1/2 p-8"
          src="/assets/images/blissfest-logo.png"
          alt="Blissfest logo"
        >
      </header>
    `;
  }
}

customElements.define('bf-header', Header);