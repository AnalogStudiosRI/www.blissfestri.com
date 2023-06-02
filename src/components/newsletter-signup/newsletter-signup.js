export default class NewsletterSignup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="wavy-edges font-primary bg-primary text-primary text-center p-1 m-4 xl:m-0 xl:p-0"
      >
        <img
          src="/assets/images/message-bottle.png"
          alt="popped open bottle with music sheet"
          class="inline-block w-32"
          width="226"
          height="190"
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
              Subscribe to stay up to date with the latest Blissfest news and updates!
          </p>
          <form
            name="newsletter-signup"
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
      </div>
    `;
  }
}

customElements.define('bf-newsletter-signup', NewsletterSignup);