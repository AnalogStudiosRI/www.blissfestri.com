export default class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="text-center">
        <div class="bg-[url('/assets/images/tear-strip.webp')] transform rotate-180 h-20 bg-no-repeat bg-top">
        </div>
        <div class="bg-primary pb-4">
          <div class="flex gap-x-4 justify-center mb-4">
            <a
              href="https://www.facebook.com/blissfestri/"
              aria-label="Analog Studios Facebook page"
              target="_blank"
              class="ml-2 mr-2"
            >
              <img
                src="/assets/images/facebook-icon.png"
                alt="Analog Studios Facebook page"
                width="40"
                height="40"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCxs5mxoDpmmR0hRbwsxU7Sg/"
              aria-label="Analog Studios YouTube page"
              target="_blank"
              class="ml-2 mr-2"
            >
              <img
                src="/assets/images/youtube-icon.png"
                alt="Analog Studios YouTube page"
                width="40"
                height="40"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.instagram.com/dave.flamand/"
              aria-label="Dave Flamand Instagram page"
              target="_blank"
              class="ml-2 mr-2"
            >
              <img
                src="/assets/images/instagram-icon.png"
                alt="Dave Flamand Instagram page"
                width="40"
                height="40"
                loading="lazy"
              />
            </a>
          </div>

          <small
            class="text-white text-xs font-primary"
            aria-label="Copyright Notice"
          >
            Copyright &copy;

            <a
              href="https://www.analogstudios.net"
              title="Analog Studios website"
              aria-label="Analog Studios website"
            >
              Analog Studios
            </a>.

          All Rights Reserved.
        </small>

        <small
          class="block text-white font-primary"
        >
          <a
            href="/privacy-policy/"
            title="Blissfest Privacy Policy" class="underline"
          >
            Privacy Policy</a>

          <span> | </span>

          <a
            href="/terms-of-use/"
            title="Blissfest Terms of Use" class="underline"
          >
            Terms of Use</a>
        </small>
      </footer>
    `;
  }
}

customElements.define('bf-footer', Footer);