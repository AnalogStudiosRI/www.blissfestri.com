export default class SignupForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="bg-primary p-6 text-center" style="max-width:300px;">
        <img src="" alt="popped open bottle with music sheet" />
        <h2
          class="text-secondary text-3xl font-primary text-secondary uppercase mt-4 mb-4 w-2/3 m-auto"
          >
            Stay in Touch!
          </h2>
        <p
          class="text-white mb-6"
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
            class="bg-secondary p-4 rounded-3xl text-black font-bold w-2/3 m-auto mt-4"
          >
            Sign Me Up
          </button>
        </form>
        <p class="mt-8">Social bar TK</p>
        <small class="text-white">©Analog Studios, All Rights Reserved.</small>
      </div>
    `;
  }
}

customElements.define('bf-signup_form', SignupForm);
