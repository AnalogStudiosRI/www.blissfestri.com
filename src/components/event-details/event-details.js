export default class EventDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="bg-no-repeat min-h-screen font-secondary"
        style="background-image:url('/assets/images/ri-map.webp'); padding-left: 30%; width:60%;"
      >

        <h1
          class="text-accent text-6xl text-center"
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
          <span class="flex flex-nowrap pl-60 w-60 justify-evenly text-8xl">
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

        <h2 class="text-primary text-6xl m-2">
          7 &dot; 29 &dot; 2023
        </h2>

        <h2 
          class="text-primary text-6xl m-2"
        >
          5:00pm to 11:00pm
        </h2>

      </div>
    `;
  }
}

customElements.define('bf-event-details', EventDetails);