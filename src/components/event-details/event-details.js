export default class EventDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="bg-no-repeat h-60 event-details"
      >
        <img src="/assets/images/ri-map.webp" class="inline" style="max-width: 50%; position:absolute">
        <h1
          class="text-accent font-secondary text-2xl pl-40l"
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
          <span class="flex flex-nowrap justify-between">
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
          <span class="flex flex-nowrap justify-evenly pl-12 text-4xl">
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

        <h2 class="text-primary font-secondary text-2xl pb-2 pl-60 ml-2">
          <span>7 &dot; 29 &dot; 2023</span>
        </h2>

        <h2 class="text-accent font-secondary text-2xl pl-52 ml-2">
          <span>5:00pm to 11:00pm<span>
        </h2>

        <div class="pl-44 pt-4 mt-1">
          <div class="flex location">
            <div class="w-1/3">
              <img src="/assets/images/iyrs-logo.webp" alt="Iyrs logo">
            </div>
            <div class="pl-4 content">
              <h3 class="text-accent lg:text-2xl font-secondary">Restoration Hall</h3>
              <h4 class="text-primary italic text-md">449 Thames Street</h4>
              <h4 class="text-primary italic text-md">Newport&#44; RI</h4>
            </div>
          </div>

          <div class="flex pt-4 presenter">
            <div class="w-1/3">
              <img src="/assets/images/analog-studios-logo.webp" alt="Analog Studios logo">
            </div>
            <div class="pl-4 content">
              <h3 class="text-primary text-xl">Presented by</h3>
              <h4 class="text-accent font-secondary text-xl underline">
                <a href="https://www.analogstudios.net" title="Analog Studios website">Analog Studios</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('bf-event-details', EventDetails);