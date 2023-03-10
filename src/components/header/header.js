export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-primary">
        <h1 class="text-secondary font-secondary">Welcome to Blissfest!</h1>
      </header>
    `;
  }
}

customElements.define('bf-header', Header);