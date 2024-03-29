import '../navigation/navigation.js';

export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header
        class="bg-[url('/assets/images/tear-strip.webp')] pb-16 bg-repeat-x bg-bottom"
      >
        <div class="text-center bg-primary">
          <img
            class="inline-block w-2/3 pt-4 pb-4 lg:w-1/2"
            src="/assets/images/blissfest-logo-sm.webp"
            width="500"
            height="123"
            srcset="/assets/images/blissfest-logo-sm.webp 500w,
                    /assets/images/blissfest-logo-md.webp 750w,
                    /assets/images/blissfest-logo-lg.webp 1000w,
                    /assets/images/blissfest-logo-xl.webp 1500w"
            alt="Blissfest logo"
          />
        </div>

        <!-- cover up underlying background color by shifting this up a bit -->
        <!-- https://github.com/AnalogStudiosRI/www.blissfestri.com/pull/90 -->
        <bf-navigation class="block -mt-2 pb-2"></bf-navigation>
      </header>
    `;
  }
}

customElements.define('bf-header', Header);