export default class Lineup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="p-6 font-primary w-full bg-cover bg-no-repeat bg-[url('/assets/images/iyrs-campus-ariel.webp')]"
      >
        <div
          class="bg-white opacity-70 pt-4"
        >
          <h2
            class="text-center text-5xl uppercase font-primary font-extrabold mb-8 scale-x-125 scale-y-150"
          >
            Lineup
          </h2>

          <ul class="font-extrabold text-center text-3xl uppercase md:w-3/4 md:ml-auto md:mr-auto">
            <li class="md:inline">Analog</li>
            <li class="md:inline">
              <img src="/assets/images/star.webp" alt="Artist name separator" width="3%" class="hidden m-4 md:inline"/>
              Bill Bartholomew
            </li>
          </ul>

          <ul
            class="font-bold text-center text-2xl uppercase md:w-2/3 md:ml-auto md:mr-auto"
          >
            <li class="md:inline">
              <img src="/assets/images/star.webp" alt="Artist name separator" width="4%" class="hidden m-2 md:inline"/>
              Z-Boys
            </li>
            <li class="md:inline">
              <img src="/assets/images/star.webp" alt="Artist name separator" width="4%" class="hidden m-2 md:inline"/>
              Allison Cowrey
              <img src="/assets/images/star.webp" alt="Artist name separator" width="4%" class="hidden m-2 md:inline"/>
            </li>
          </ul>

          <p class="mt-8 italic text-center">
            More artist announcements coming soon.  Lineup is schedule to change.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('bf-lineup', Lineup);