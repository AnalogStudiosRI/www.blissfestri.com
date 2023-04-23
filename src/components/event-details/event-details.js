/* eslint-disable max-len */
export default class EventDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="inline-block event-details">


        <img src="/assets/images/ri-map.webp" class="block pt-2 w-350 sm:pt-0 sm-max-w-sm md:max-w-sm lg:max-w-md xl:max-w-md sm:absolute sm:z-(-1)">


        <h1
          class="font-secondary text-accent text-5xl mb-4 sm:text-6xl sm:pl-60 sm:ml-8 md:text-6xl md:pl-72 lg:pl-80 lg:ml-12 lg:text-7xl"
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
          <span class="flex flex-nowrap justify-evenly sm:text-6xl sm:pl-24 sm:mt-2 md:text-6xl md:pl-20 md:pt-2 lg:text-7">
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

        <h2
          class="text-primary font-secondary text-center text-5xl mb-1 sm:text-justify sm:text-4xl sm:pl-96 sm:ml-12 sm:pt-2 md:pt-4 md:text-5xl md:pl-80 md:ml-28 md:mt-1 lg:text-5xl lg:pl-96 lg:ml-40"
        >
          <span>7 &dot; 29 &dot; 2023</span>
        </h2>

        <h2 class="text-accent font-secondary text-center text-4xl sm:text-3xl sm:text-justify sm:pl-80 sm:ml-20 md:text-4xl md:pl-80 md:mt-2 md:ml-24 lg:text-5xl lg:pl-96 lg:ml-24">
          <span>5:00pm to 11:00pm</span>
        </h2>


        <div class="location pl-48 -mt-32 sm:pl-80 sm:pt-16 sm:mt-2 lg:mt-10 lg:ml-20">
          <img
            src="/assets/images/iyrs-logo.webp"
            alt="Iyrs logo"
            class="inline-block w-3/5 sm:inline-block sm:w-2/5 sm:align-top md:w-1/2 md:-mt-12 lg:w-2/5"
          >
          <div class="content ml-2 sm:inline-block md:-mt-12">
            <h3 class="text-accent font-secondary text-left text-1xl sm:text-2xl lg:text-4xl">Restoration Hall</h3>
            <h4 class="text-primary italic text-sm text-left sm:text-lg md:text-1xl lg:text-3xl">449 Thames Street</h4>
            <h4 class="text-primary italic text-sm text-left sm:text-lg md:text-1xl lg:text-3xl">Newport&#44; RI 02840</h4>
          </div>
        </div>

        <div class="presenter text-center pt-12 sm:pl-60 sm:ml-8 sm:-mt-8">
          <img
            src="/assets/images/analog-studios-logo.webp"
            alt="Analog Studios logo"
            class="inline-block w-2/5 sm:w-1/3 md:w-2/5 md:ml-6 lg:w-2/6 lg:ml-12"
          />
          <div class="content inline-block w-1/3 ml-4 pt-4 sm:ml-4 sm:text-left lg:ml-2">
            <h3 class="text-primary text-lg sm:text-2xl lg:text-3xl">Presented by</h3>
            <h4 class="text-accent font-secondary text-lg underline lg:text-3xl">
              <a href="https://www.analogstudios.net" title="Analog Studios website">Analog Studios</a>
            </h4>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('bf-event-details', EventDetails);