function getSocialLinksList(name, socials) {
  const socialLinkItems = Object.entries(socials)
    .filter(social => social[1] && social[1] !== 'undefined' && social[1] !== '')
    .map(social => {
      const [label, link] = social;
      const formattedTitle = `${name}'s ${label.charAt(0).toUpperCase()}${label.slice(1)} page`;

      return `
        <li class="inline-block md:mr-4">
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
    : `<ul class="mt-4">
        ${socialLinkItems}
      </ul>`;
}

class VendorCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    const bio = this.getAttribute('bio');
    const picture = this.getAttribute('picture');
    const socials = {
      facebook: this.getAttribute('facebook'),
      instagram: this.getAttribute('instagram'),
      website: this.getAttribute('website')
    };

    this.innerHTML = `
      <h3 class="text-2xl md:text-4xl bold font-primary text-primary text-center uppercase">${name}</h3>
      <article class="mb-8">
        <div class="m-auto lg:w-1/2">
          <div class="text-center m-8">
            <picture>
              <img
                class="bg-slate-50 p-4 drop-shadow-lg"
                src="${picture}"
                alt="Picture of ${name}"
                width="500"
                height="500"
              />
            </picture>
          </div>
        </div>

        <div>
          ${getSocialLinksList(name, socials)}
          <span class="text-lg">${bio}</span>
        </div>
      </article>
    `;
  }
}

customElements.define('bf-vendor-card', VendorCard);