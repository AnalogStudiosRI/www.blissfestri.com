export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>Welcome to Blissfest!</h1>
      </header>
    `;
  }
}

customElements.define('bf-header', Header);