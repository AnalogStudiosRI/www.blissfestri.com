export default class SignupForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="bg-primary p-3 text-center m-4" id="signup_form">
        <img
          src="assets/images/Message_Bottle.png"
          alt="popped open bottle with music sheet"
          loading="lazy"
        />
        <h2
          class="text-secondary text-3xl font-primary text-secondary uppercase mt-4 mb-4 w-2/3 m-auto"
          >
            Stay in Touch!
          </h2>
        <p
          class="text-white mb-6 w-3/4 m-auto"
        >
            Subscribe to stay up to date on this summer's upcomming music festivities!
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          class="width-full flex flex-col gap-4"
        >
          <label class="text-white text-left w-full">
            Name (optional)
            <input
              type="text"
              class="w-full p-2 rounded-lg"
              name="name"
            />
          </label>
          <label class="text-white text-left w-full">
            Email Address
            <input
              type="email"
              name="email"
              class="w-full p-2 rounded-lg"
              required
            />
          </label>
          <button
            type="submit"
            class="bg-secondary p-2 rounded-3xl text-primary font-bold w-1/2 m-auto mt-4 font-primary"
          >
            Sign Me Up
          </button>
        </form>
        <div class="flex gap-x-4 justify-center mb-4 mt-8">
          <a
            href="https://facebook.com"
            aria-label="facbook page"
            target="_blank"
            rel="noopener"
          >
            <img
              src="assets/images/FB_Icon.png"
              alt="Facebook Page"
              width="40"
              loading="lazy"
            />
          </a>
          <a
            href="https://youtube.com"
            aria-label="youtube page"
            target="_blank"
            rel="noopener"
          >
            <img
              src="assets/images/YT_Icon.png"
              alt="YouTube Page"
              width="40"
              loading="lazy"
            />
          </a>
          <a
            href="https://instagram.com"
            aria-label="instagram page"
            target="_blank"
            rel="noopener"
          >
            <img
              src="assets/images/INSTA_Icon.png"
              alt="Instagram Page"
              width="40"
              loading="lazy"
            />
          </a>
        </div>
        <small class="text-white">©Analog Studios. All Rights Reserved.</small>
      </div>
    `;
  }
}

customElements.define('bf-signup_form', SignupForm);
