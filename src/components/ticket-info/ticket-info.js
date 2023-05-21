export default class TicketInfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="ticket-info font-primary bg-primary text-primary text-center p-4 m-4"
      >
        <div class="w-1/2 mr-auto ml-auto">
          <a href="/tickets/">
            <img
              src="/assets/images/get-tickets.webp"
              class="w-1/2 md:w-1/3 lg:w-1/4 mr-auto ml-auto"
              alt="Get tickets stub"
              height="101"
              width="200"
            />
          </a>
          <ul
            class="text-white mt-2 mb-6 font-primary list-disc text-left mr-auto ml-auto pl-4 md:pl-24 lg:w-1/2 lg:pl-8 lg:mt-4"
          >
            <li>General Admission - &dollar;25</li>
            <li>VIP Package - &dollar;35</li>
            <li>Food &amp; beverage vendors</li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('bf-ticket-info', TicketInfo);