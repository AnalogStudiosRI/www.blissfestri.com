export default class EventDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="bg-no-repeat h-60 event-details"
        style="height: 900px; width: 900px; background-image:url('/assets/images/ri-map.webp'); padding-left: min(460px);"
      >

        <h1
          class="text-accent text-6xl text-center font-secondary"
        >
          <span class="flex flex-nowrap justify-between pt-4 pb-4">
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
          <span class="flex flex-nowrap justify-between text-8xl">
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
          <span class="flex flex-nowrap pl-72 w-60 justify-evenly text-8xl pt-4 pb-4">
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

        <h2 class="text-primary text-6xl pb-2 pl-44 font-secondary">
          <span>7 &dot; 29 &dot; 2023</span>
        </h2>

        <h2 class="text-accent text-4xl m-2 pl-44 font-secondary">
          <span>5:00pm to 11:00pm<span>
        </h2>

        <div class="pl-32 pt-40">
          <div class="flex location">
            <div class="w-2/5">
              <img src="/assets/images/iyrs-logo.webp" alt="Iyrs logo">
            </div>
            <div class="pl-4 content">
              <h3 class="text-accent text-2xl font-secondary">Restoration Hall</h3>
              <h4 class="text-primary italic text-xl">449 Thames Street</h4>
              <h4 class="text-primary italic text-xl">Newport&#44; RI 02840</h4>
            </div>
          </div>

          <div class="flex pt-8 presenter">
            <div class="w-2/5">
              <img src="/assets/images/analog-studios-logo.webp" alt="Analog Studios logo">
            </div>
            <div class="pl-4 content">
              <h3 class="text-primary pt-4 text-xl">Presented by</h3>
              <h4 class="text-primary text-xl underline">
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