// TODO could  make this as its own component, e.g. `<bf-social-icon>` (see footer component)
function getSocialLinksList(socials) {
  const socialLinkItems = Object.entries(socials).filter(social => social[1]).map(social => {
    const [label, link] = social;
    const formattedTitle = `${name}'s ${label.charAt(0).toUpperCase()}${label.slice(1)} page`;

    return `
      <a
        href="${link}"
        aria-label="${formattedTitle}"
        title="${name}'s ${formattedTitle} page"
      >
        <img
          src="/assets/images/${label}-icon.png"
          alt="${formattedTitle}"
          width="40"
          height="40"
          loading="lazy"
        />
      </a>
    `;
  }).join('');

  return socialLinkItems === ''
    ? ''
    : `<ul class="flex gap-x-4 mt-4 mb-4">
        ${socialLinkItems}
      </ul>`;
}

class LineupCard extends HTMLElement {
  constructor() {
    super();
    this.DEFAULT_ROTATION = 'center';
    this.ROTATION_CLASS_MAPPER = {
      center: 'rotate-0',
      left: '-rotate-12',
      right: 'rotate-12'
    };
  }

  connectedCallback() {
    // link (optional) - website
    // link (optional) - spotify
    const name = this.getAttribute('name');
    const bio = this.getAttribute('bio');
    const picture = this.getAttribute('picture');
    const socials = {
      // website: this.getAttribute('website'),
      // spotify: this.getAttribute('spotify'),
      facebook: this.getAttribute('facebook'),
      youtube: this.getAttribute('youtube'),
      instagram: this.getAttribute('instagram')
    };
    const rotation = this.getAttribute('rotation');
    const rotationClass = rotation && this.ROTATION_CLASS_MAPPER[rotation]
      ? this.ROTATION_CLASS_MAPPER[rotation]
      : this.ROTATION_CLASS_MAPPER[this.DEFAULT_ROTATION];
    const rotationMargin = rotationClass === this.ROTATION_CLASS_MAPPER[this.DEFAULT_ROTATION]
      ? 'mt-0'
      : 'mt-4';

    this.innerHTML = `
      <div class="flex flex-row flex-wrap w-full">
        <div class="flex-column flex-1">
          <div class="text-center ${rotationClass} ${rotationMargin}">
            <img
              class="bg-slate-50 pb-4 pl-1 pr-1 pt-1 inline-block w-2/3 drop-shadow-lg lg:pb-16 lg:pl-4 lg:pr-4 lg:pt-4"
              src="${picture}"
              loading="lazy">
          </div>
        </div>

        <div class="flex-column flex-1 pl-4">
          <h2 class="text-4xl bold font-primary text-primary uppercase">${name}<h2>
          <p class="font-primary">${bio}</p>
          ${getSocialLinksList(socials)}
        </div>
      </div>
    `;
  }
}

customElements.define('bf-lineup-card', LineupCard);