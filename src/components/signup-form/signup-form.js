export default class SignupForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        id="signup-form"
        class="font-primary bg-primary text-primary text-center p-1 m-4"
      >
        <img
          src="/assets/images/message-bottle.png"
          alt="popped open bottle with music sheet"
          class="inline-block w-32"
          loading="lazy"
        />
        <div class="mr-auto ml-auto md:w-3/5 xl:w-3/5">
          <h2
            class="font-bold text-secondary text-4xl uppercase mt-4 mb-4"
            >
              Stay in Touch!
            </h2>
          <p
            class="text-white mb-6 m-auto"
          >
              Subscribe to stay up to date for this summer's upcoming music festivities!
          </p>
          <form
            name="sign-up"
            method="POST"
            data-netlify="true"
            class="width-full flex flex-col gap-4"
          >
            <label class="text-white text-left w-full">
              Name (optional)
              <input
                type="text"
                class="w-full p-2 rounded-lg text-black"
                name="name"
              />
            </label>
            <label class="text-white text-left w-full">
              Email Address
              <input
                type="email"
                name="email"
                class="w-full p-2 rounded-lg text-black"
                required
              />
            </label>
            <button
              type="submit"
              class="bg-secondary p-2 rounded-3xl text-primary font-bold m-auto mt-4"
            >
              Sign Me Up
            </button>
          </form>
        </div>
        <div class="flex gap-x-4 justify-center mb-1 mt-20">
          <a
            href="https://www.facebook.com/analogstudiosri/"
            aria-label="Analog Studios Facebook page"
            target="_blank"
            class="ml-2 mr-2"
          >
            <img
              src="/assets/images/facebook-icon.png"
              alt="Analog Studios Facebook page"
              width="20"
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
              width="20"
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
              width="20"
              loading="lazy"
            />
          </a>
        </div>
        <small class="text-white text-xs">Copyright &copy; Analog Studios. All Rights Reserved.</small>
      </div>
    `;
  }
}

customElements.define('bf-signup-form', SignupForm);