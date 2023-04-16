export default class EventDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="text-center">
        <h1
          class="font-secondary text-accent text-6xl mb-4"
        >
          <span class="flex flex-nowrap justify-between">
            <span>R</span>
            <span>h</span>
            <span>o</span>
            <span>d</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>I</span>
            <span>s</span>
            <span>l</span>
            <span>a</span>
            <span>n</span>
            <span>d</span>
            <span>&apos;</span>
            <span>s</span>
          </span>
          <span class="flex flex-nowrap justify-between md:mt-2">
            <span>I</span>
            <span>n</span>
            <span>d</span>
            <span>i</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>u</span>
            <span>s</span>
            <span>i</span>
            <span>c</span>
          </span>
          <span class="flex flex-nowrap justify-evenly">
            <span>F</span>
            <span>e</span>
            <span>s</span>
            <span>t</span>
            <span>i</span>
            <span>v</span>
            <span>a</span>
            <span>l</span>
          </span>
        </h1>

        <h2 class="text-primary font-secondary text-5xl mb-1">
          <span>7 &dot; 29 &dot; 2023</span>
        </h2>

        <h2 class="text-accent font-secondary text-4xl">
          <span>5:00pm to 11:00pm</span>
        </h2>

        <div class="location mr-auto ml-auto w-2/3 mt-4">
          <img src="/assets/images/iyrs-logo.webp" alt="Iyrs logo" class="inline-block">
          <div class="content inline-block">
            <h3 class="text-accent font-secondary text-left">Restoration Hall</h3>
            <h4 class="text-primary italic text-2xl text-left">449 Thames Street</h4>
            <h4 class="text-primary italic text-2xl text-left">Newport&#44; RI</h4>
          </div>
        </div>

        <img src="/assets/images/ri-map.webp" class="block"/>

        <div class="mr-auto ml-auto mt-4 w-3/4">
          <img src="/assets/images/analog-studios-logo.webp" class="inline-block" alt="Analog Studios logo"/>
          <div class="content inline-block ml-4">
            <h3 class="text-primary text-lg">Presented by</h3>
            <h4 class="text-accent font-secondary text-xl underline">
              <a href="https://www.analogstudios.net" title="Analog Studios website">Analog Studios</a>
            </h4>
          </div>
        </div>

      </div>
    `;
  }
}

customElements.define('bf-event-details', EventDetails);