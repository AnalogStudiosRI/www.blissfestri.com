import { getLineup } from '../../services/lineup-service.js';

function formatSubListItem(item, idx) {
  const { name } = item;

  return idx === 0
    ? `<li class="md:inline">${name}</li>`
    : `
      <li class="md:inline">
        <img
          src="/assets/images/star.webp"
          alt="Artist name separator"
          width="85"
          height=85"
          class="hidden m-2 md:inline w-1/12 scale-50"
        />
        ${name}
      </li>
    `;
}

export default class LineupPoster extends HTMLElement {
  constructor() {
    super();
    this.lineup = getLineup({ sortByStartOrder: true }).reverse();
  }

  connectedCallback() {
    const headliner = this.lineup.find(item => item.isHeadliner);
    const coHeadliners = this.lineup.filter(item => item.isCoHeadliner);
    const openers = this.lineup.filter(item => item.isOpener);
    const coHeadlinersList = coHeadliners.map(formatSubListItem).join('');
    const openersList = openers.map(formatSubListItem).join('');

    this.innerHTML = `
      <div
        class="lineup rounded-lg p-2 md:p-6 font-primary w-full bg-cover bg-no-repeat bg-[url('/assets/images/iyrs/iyrs-facade.webp')]"
      >
        <div
          class="bg-white opacity-70 pt-4 rounded-lg overflow-hidden"
        >
          <h2
            class="text-center underline text-6xl tracking-widest uppercase font-extrabold mb-8 scale-x-125 scale-y-150"
          >
            Lineup
          </h2>

          <ul class="font-extrabold font-secondary text-center text-5xl uppercase">
            <li>${headliner.name}</li>
          </ul>

          <ul
            class="font-semibold font-secondary text-center text-3xl uppercase md:w-10/12 md:ml-auto md:mr-auto"
          >
            ${coHeadlinersList}
          </ul>

          <ul
            class="text-center font-secondary font-medium text-3xl uppercase md:w-10/12 md:ml-auto md:mr-auto"
          >
            ${openersList}
          </ul>

          <p class="mt-8 italic text-center">
            Lineup is subject to change.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('bf-lineup-poster', LineupPoster);