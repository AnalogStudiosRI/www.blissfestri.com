export default class LineupPoster extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="lineup rounded-lg p-2 md:p-6 font-primary w-full bg-cover bg-no-repeat bg-[url('/assets/images/iyrs/iyrs-facade.webp')]"
      >
        <div
          class="bg-white opacity-70 pt-4 rounded-lg overflow-hidden"
        >
          <h2
            class="text-center underline text-6xl tracking-widest uppercase font-extrabold mb-8 scale-x-125 scale-y-150"
          >
            Lineup
          </h2>

          <ul class="font-extrabold font-secondary text-center text-5xl uppercase">
            <li class="md:inline">Jabbawaukee</li>
          </ul>

          <ul
            class="font-semibold font-secondary text-center text-3xl uppercase md:w-10/12 md:ml-auto md:mr-auto"
          >
            <li class="md:inline">
              Analog
            </li>
            <li class="md:inline">
              <img
                src="/assets/images/star.webp"
                alt="Artist name separator"
                width="85"
                height=85"
                class="hidden m-2 md:inline w-1/12 scale-50"
              />
              Bill Bartholomew
            </li>
            <li class="md:inline">
              <img
                src="/assets/images/star.webp"
                alt="Artist name separator"
                width="85"
                height=85"
                class="hidden m-2 md:inline w-1/12 scale-50"
              />
              The Z-Boys
            </li>
          </ul>

          <ul
            class="text-center font-secondary font-medium text-3xl uppercase md:w-10/12 md:ml-auto md:mr-auto"
          >
            <li class="md:inline">
              jesse the Tree
            </li>
            <li class="md:inline">
              <img
                src="/assets/images/star.webp"
                alt="Artist name separator"
                width="85"
                height=85"
                class="hidden m-2 md:inline w-1/12 scale-50"
              />
              Allysen Callery
              <img
                src="/assets/images/star.webp"
                alt="Artist name separator"
                width="85"
                height=85"
                class="hidden m-2 md:inline w-1/12 scale-50"
              />
            </li>
            <li class="md:inline">
              Nate Farrar
            </li>
          </ul>

          <p class="mt-8 italic text-center">
            Lineup is subject to change.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('bf-lineup-poster', LineupPoster);