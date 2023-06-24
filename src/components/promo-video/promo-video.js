export default class PromoVideo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube.com/embed/-zazqdr-g6A"
        loading="lazy"
      ></iframe>
    `;
  }
}

customElements.define('bf-promo-video', PromoVideo);