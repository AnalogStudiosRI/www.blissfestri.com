function getSocialLinksList(name, socials) {
  const socialLinkItems = Object.entries(socials).filter(social => social[1]).map(social => {
    const [label, link] = social;
    const formattedTitle = `${name}'s ${label.charAt(0).toUpperCase()}${label.slice(1)} page`;

    return `
      <li>
        <a
          href="${link}"
          title="${formattedTitle}"
        >
          <img
            src="/assets/images/${label}-icon.png"
            alt="${formattedTitle}"
            width="40"
            height="40"
            loading="lazy"
          />
        </a>
      </li>
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
    const name = this.getAttribute('name');
    const bio = this.getAttribute('bio');
    const picture = this.getAttribute('picture');
    const socials = {
      apple: this.getAttribute('apple'),
      facebook: this.getAttribute('facebook'),
      instagram: this.getAttribute('instagram'),
      spotify: this.getAttribute('spotify'),
      youtube: this.getAttribute('youtube'),
      website: this.getAttribute('website')
    };
    const rotation = this.getAttribute('rotation');
    const rotationClass = rotation && this.ROTATION_CLASS_MAPPER[rotation]
      ? this.ROTATION_CLASS_MAPPER[rotation]
      : this.ROTATION_CLASS_MAPPER[this.DEFAULT_ROTATION];
    const rotationMargin = rotationClass === this.ROTATION_CLASS_MAPPER[this.DEFAULT_ROTATION]
      ? 'mt-0'
      : 'mt-4';

    this.innerHTML = `
      <article class="flex flex-row">
        <div class="w-1/3 md:w-1/5 lg:w-1/6">
          <div class="text-center ${rotationClass} ${rotationMargin}">
            <picture>
              <img
                class="bg-slate-50 ml-4 pb-8 pl-2 pr-2 pt-2 drop-shadow-lg lg:pb-12 lg:pl-4 lg:pr-4 lg:pt-4"
                src="${picture}"
                alt="Picture of ${name}"
              />
            </picture>
          </div>
        </div>

        <div class="w-1/2 ml-16 lg:w-2/5">
          <h2 class="text-4xl bold font-primary text-primary uppercase">${name}</h2>
          <p class="font-primary">${bio}</p>
          ${getSocialLinksList(name, socials)}
        </div>
      </article>
    `;
  }
}

customElements.define('bf-lineup-card', LineupCard);