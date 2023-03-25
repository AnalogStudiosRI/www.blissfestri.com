export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-primary">
        <h1 class="text-secondary font-secondary text-center">Welcome to Blissfest!</h1>
      </header>
      <img src="/assets/images/top-banner.png" alt="" class="w-full" />
    `;
  }
}

customElements.define('bf-header', Header);
