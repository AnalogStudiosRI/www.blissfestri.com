export default class SponsorsBanner extends HTMLElement {
  constructor() {
    super();
    this.sponsors = [{
      name: 'Lovewell Farms',
      logo: '/assets/images/lovewell-farms-logo.png',
      link: 'https://lovewellfarms.com'
    }];
  }

  connectedCallback() {
    const sponsorsListHtml = this.sponsors.map((sponsor) => {
      const { name, logo, link } = sponsor;

      return `
        <li class="text-center">
          <a href="${link}" title="${name} website">
            <img class="inline-block" src="${logo}" alt="${name} logo"/>
          </a>
        </li>
      `;
    }).join('');

    this.innerHTML = `
      <div>
        <h1
          class="text-center text-5xl text-accent font-secondary underline"
        >
          Our Sponsors
        </h1>

        <ul class="m-4 flex justify-center flex-wrap">
          ${sponsorsListHtml}
        </ul>
      </div>
    `;
  }
}

customElements.define('bf-sponsors-banner', SponsorsBanner);