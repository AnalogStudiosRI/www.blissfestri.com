export default class TicketInfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="wavy-edges ticket-info font-primary bg-primary text-primary text-center p-4 m-4"
      >
        <a href="/tickets/">
          <img
            src="/assets/images/get-tickets.webp"
            class="mr-auto ml-auto"
            alt="Get tickets stub"
            height="101"
            width="200"
          />
        </a>
        <ul
          class="text-white mt-2 mb-6 font-primary list-disc text-left mr-auto ml-auto pl-4 lg:mt-4"
        >
          <li>General Admission - &dollar;25</li>
          <li>VIP Package - &dollar;35</li>
          <li>Food &amp; beverage vendors</li>
        </ul>
      </div>
    `;
  }
}

customElements.define('bf-ticket-info', TicketInfo);