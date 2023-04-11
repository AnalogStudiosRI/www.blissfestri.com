export default class EventDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="bg-no-repeat h-60 inline-block event-details"
      >
        <img src="/assets/images/ri-map.webp" class="sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-md" style="position:absolute">
        <h1
          class="text-accent font-secondary sm:text-6xl sm:pl-60 sm:ml-8 md:text-6xl md:pl-60 lg:pl-80 lg:ml-12 lg:text-7xl"
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
          <span class="flex flex-nowrap justify-evenly sm:text-6xl sm:pl-24 sm:mt-2 md:text-6xl md:pl-20 md:pt-2 lg:text-7xl">
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

        <h2 class="text-primary font-secondary sm:text-4xl sm:pl-96 sm:ml-8 sm:pt-2 md:pt-4 md:text-5xl md:pl-80 md:ml-36 md:mt-1 lg:text-5xl lg:pl-96 lg:ml-40">
          <span>7 &dot; 29 &dot; 2023</span>
        </h2>

        <h2 class="text-accent font-secondary sm:text-3xl sm:pl-80 sm:ml-16 sm:mt-2 md:text-4xl md:pl-80 md:mt-2 md:ml-28 lg:text-5xl lg:pl-96 lg:ml-24">
          <span>5:00pm to 11:00pm<span>
        </h2>

        <div class="sm:pl-80 sm:pt-20 sm:mt-3 md:pl-76 md:ml-12 md:pt-8 md:mt-4 lg:pl-96 lg:mt-8">
          <div class="flex location">
            <div class="position-relative z-10 sm:mr-2 sm:w-1/3 md:w-1/3 lg:w-2/5 lg:mr-0">
              <img src="/assets/images/iyrs-logo.webp" alt="Iyrs logo">
            </div>
            <div class="content">
              <h3 class="text-accent font-secondary sm:text-2xl md:text-3xl lg:text-3xl">Restoration Hall</h3>
              <h4 class="text-primary italic text-xl md:text-2xl lg:-text-lg">449 Thames Street</h4>
              <h4 class="text-primary italic text-xl md:text-2xl">Newport&#44; RI</h4>
            </div>
          </div>

          <div class="flex sm:pt-4 presenter">
            <div class="sm:w-1/3 mr-2 md:w-1/3 lg:w-2/5 lg:m2-4">
              <img src="/assets/images/analog-studios-logo.webp" alt="Analog Studios logo">
            </div>
            <div class="content">
              <h3 class="text-primary text-lg sm:text-2xl md:text-2xl">Presented by</h3>
              <h4 class="text-accent font-secondary text-xl underline md:text-3xl">
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