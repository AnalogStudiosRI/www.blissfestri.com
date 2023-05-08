class FAQCard extends HTMLElement {
  connectedCallback() {
    const content = this.getAttribute('content');
    const heading = this.getAttribute('heading');
    const label = this.getAttribute('label');

    this.innerHTML = `
      <h3 id="${label}" class="text-accent font-primary uppercase text-1xl font-extrabold mt-4">
        ${heading}
      </h3>
      <p class="text-primary font-primary">
        ${content}
      </p>
    `;
  }
}

customElements.define('bf-faq-card', FAQCard);