export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header style="background-color: var(--color-primary)">
        <h1 style="color: var(--color-secondary); font-family: var(--font-secondary)">Welcome to Blissfest!</h1>
      </header>
    `;
  }
}

customElements.define('bf-header', Header);