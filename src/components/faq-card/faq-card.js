class FAQCard extends HTMLElement {
  connectedCallback() {
    const content = this.getAttribute('content');
    const heading = this.getAttribute('heading');
    const label = this.getAttribute('label');

    this.innerHTML = `
      <div class="mt-16 mb-16">
        <h3 id="${label}" class="text-accent font-primary uppercase text-2xl font-extrabold mt-4 text-left">
          ${heading}
        </h3>
        <p class="text-primary font-primary font-bold text-left">
          ${content}
        </p>
      </div>
    `;
  }
}

customElements.define('bf-faq-card', FAQCard);