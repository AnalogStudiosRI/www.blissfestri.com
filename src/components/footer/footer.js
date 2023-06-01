export default class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer
        class="bg-[url('/assets/images/tear-strip-upside-down.webp')] pt-16 bg-repeat-x bg-top text-center"
      >
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
        >
          Copyright &copy; Analog Studios. All Rights Reserved.
        </small>
      </footer>
    `;
  }
}

customElements.define('bf-footer', Footer);