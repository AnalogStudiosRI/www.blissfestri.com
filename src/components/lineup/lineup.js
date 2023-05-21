export default class Lineup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="p-6 font-primary w-full bg-no-repeat bg-[url('https://raw.githubusercontent.com/AnalogStudiosRI/www.blissfestri.com/e27230cdf8bac89f9f7503897128ed17830fb129/src/assets/images/iyrs-campus-ariel.webp')]"
        style="background-size: 100%;"
      >
        <div
          class="bg-white opacity-70"
        >
          <h2
            class="text-center text-5xl uppercase font-primary font-extrabold mb-8 scale-x-125 scale-y-150"
          >
            Lineup
          </h2>
          <ul class="font-extrabold text-3xl uppercase">
            <li class="text-center">Analog</li>
            <li class="text-center">Bill Bartholomew</li>
          </ul>

          <ul class="font-bold text-2xl uppercase">
            <li class="text-center">Z-Boys</li>
            <li class="text-center">Allison Cowrey</li>
          </ul>

          <p class="mt-8 italic text-center">More artist announcements coming soon.  Lineup is schedule to change.</p>
        </div>
      </div>
    `;
  }
}

customElements.define('bf-lineup', Lineup);