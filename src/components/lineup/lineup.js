export default class Lineup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="lineup rounded-lg p-2 md:p-6 font-primary w-full bg-cover bg-no-repeat bg-[url('/assets/images/iyrs-campus-ariel.webp')]"
      >
        <div
          class="bg-white opacity-70 pt-4 rounded-lg"
        >
          <h2
            class="text-center text-5xl tracking-widest uppercase font-extrabold mb-8 scale-x-125 scale-y-150"
          >
            Lineup
          </h2>

          <ul class="font-extrabold text-center text-3xl uppercase md:w-3/4 md:ml-auto md:mr-auto">
            <li class="md:inline">Jabbawaukee</li>
            <li class="md:inline">
              <img src="/assets/images/star.webp" alt="Artist name separator" width="3%" class="hidden m-4 md:inline"/>
              Analog
            </li>
          </ul>

          <ul
            class="font-bold text-center text-2xl uppercase md:w-2/3 xl:w-1/2 md:ml-auto md:mr-auto"
          >
            <li class="md:inline">
              <img src="/assets/images/star.webp" alt="Artist name separator" width="3%" class="hidden m-2 md:inline"/>
              Bill Bartholomew
            </li>
            <li class="md:inline">
              <img src="/assets/images/star.webp" alt="Artist name separator" width="3%" class="hidden m-2 md:inline"/>
              The Z-Boys
            </li>
            <li class="md:inline">
              <img src="/assets/images/star.webp" alt="Artist name separator" width="3%" class="hidden m-2 md:inline"/>
              Allysen Callery
              <img src="/assets/images/star.webp" alt="Artist name separator" width="3%" class="hidden m-2 md:inline"/>
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