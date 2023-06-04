class LineupCard extends HTMLElement {
  connectedCallback() {
    // name
    // bio
    // picture
    // link (optional) - website
    // link (optional) - spotify
    // link (optional) - facebook
    // link (optional) - youtube
    // link (optional) - instagram
    // rotation (optional) - (center|left|right)
    const name = this.getAttribute('name');
    const bio = this.getAttribute('bio');
    const picture = this.getAttribute('picture');

    this.innerHTML = `
      <div class="flex flex-row flex-wrap w-full">
        <div class="flex-column flex-1">
          <div class="text-center">
            <img
              class="bg-slate-50 pb-4 pl-1 pr-1 pt-1 inline-block w-2/3 drop-shadow-lg lg:pb-16 lg:pl-4 lg:pr-4 lg:pt-4"
              src="${picture}"
              loading="lazy">
          </div>
        </div>

        <div class="flex-column flex-1 pl-4">
          <h2 class="text-4xl bold font-primary text-primary uppercase">${name}<h2>
          <p class="font-primary">${bio}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('bf-lineup-card', LineupCard);