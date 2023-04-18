export default class EventDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="inline-block event-details">

        <img src="/assets/images/ri-map.webp" class="hidden sm:block max-w-sm md:max-w-sm lg:max-w-md xl:max-w-md" style="position:absolute; z-index:-1">

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

        <h2 class="text-primary font-secondary text-center text-5xl mb-1 sm:text-justify sm:text-4xl sm:pl-96 sm:ml-8 sm:pt-2 md:pt-4 md:text-5xl md:pl-80 md:ml-28 md:mt-1 lg:text-5xl lg:pl-96 lg:ml-40">
          <span>7 &dot; 29 &dot; 2023</span>
        </h2>

        <h2 class="text-accent font-secondary text-center text-4xl sm:text-3xl sm:text-justify sm:pl-80 sm:ml-16 md:text-4xl md:pl-80 md:mt-2 md:ml-24 lg:text-5xl lg:pl-96 lg:ml-24">
          <span>5:00pm to 11:00pm</span>
        </h2>

        <img src="/assets/images/ri-map.webp" class="block sm:hidden pt-2" style="width: 350px"/>

        <div class="location pl-48 -mt-32 sm:pl-80 sm:pt-16 sm:mt-2">
          <img src="/assets/images/iyrs-logo.webp" alt="Iyrs logo" class="inline-block w-3/5 sm:inline-block sm:w-2/5 sm:align-top md:w-1/4 lg:w-2/5">
          <div class="content ml-2 sm:inline-block">
            <h3 class="text-accent font-secondary text-left text-1xl sm:text-2xl lg:text-3xl">Restoration Hall</h3>
            <h4 class="text-primary italic text-sm text-left sm:text-lg">449 Thames Street</h4>
            <h4 class="text-primary italic text-sm text-left sm:text-lg">Newport&#44; RI</h4>
          </div>
        </div>

        <div class="text-center pt-12 sm:pl-60 sm:ml-8 sm:-mt-8">
          <img src="/assets/images/analog-studios-logo.webp" class="inline-block w-2/5 sm:w-1/3" alt="Analog Studios logo"/>
          <div class="content inline-block w-1/3 ml-4 pt-4 sm:ml-4 sm:text-left lg:ml-2">
            <h3 class="text-primary text-lg sm:text-2xl lg:text-2xl">Presented by</h3>
            <h4 class="text-accent font-secondary text-lg underline lg:text-1xl">
              <a href="https://www.analogstudios.net" title="Analog Studios website">Analog Studios</a>
            </h4>
          </div>
        </div>

        <!--
        <div class="sm:pt-4 sm:mt-3 md:pl-70 md:ml-12 md:pt-2 md:mt-2 lg:pl-8 lg:mt-8">
          <div class="location mr-auto ml-auto mt-4 w-5/6 sm:ml-72 sm:z-200 sm:mr-2 sm:mt-8 md:mt-0 md:ml-80 lg:mr-0">
            <img src="/assets/images/iyrs-logo.webp" alt="Iyrs logo" class="inline-block w-1/4 md:w-1/4 lg:w-2/5">
            <div class="content inline-block">
              <h3 class="text-accent font-secondary text-left sm:text-2xl md:text-3xl lg:text-3xl">Restoration Hall</h3>
              <h4 class="text-primary italic text-2xl text-left">449 Thames Street</h4>
              <h4 class="text-primary italic text-2xl text-left">Newport&#44; RI</h4>
            </div>
          </div>

          <div class="mr-auto ml-auto mt-4 w-3/6 sm:ml-72 md:ml-80">
            <img src="/assets/images/analog-studios-logo.webp" class="inline-block w-3/4 sm:w-1/3 mr-2 md:w-1/3 lg:w-3/6 lg:ml-8 lg:mt-4" alt="Analog Studios logo"/>
            <div class="content inline-block ml-4 lg:ml-2">
              <h3 class="text-primary text-lg lg:text-1xl">Presented by</h3>
              <h4 class="text-accent font-secondary text-xl underline lg:text-1xl">
                <a href="https://www.analogstudios.net" title="Analog Studios website">Analog Studios</a>
              </h4>
            </div>
          </div>
        </div>
        <-- 
      </div>
    `;
  }
}

customElements.define('bf-event-details', EventDetails);