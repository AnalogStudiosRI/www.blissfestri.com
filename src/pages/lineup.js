import '../components/lineup-card/lineup-card.js';
import { getLineup } from '../services/lineup-service.js';

function formatStartTime(timestamp) {
  const time = new Date(timestamp);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedHours = hours - 12;
  const formattedMinutes = parseInt(minutes, 10) < 10
    ? `0${minutes}`
    : minutes;

  return `${formattedHours}:${formattedMinutes} pm`;
}

export default class LineupPage extends HTMLElement {
  constructor() {
    super();
    this.lineup = getLineup({ sortByStartOrder: true });
  }

  connectedCallback() {
    const lineupContent = this.lineup.map((artist, idx) => {
      const { name, bio, picture, startTime, facebook, spotify, youtube, website, apple, instagram } = artist;
      const rotation = idx % 2 === 0 ? 'left' : 'right';

      return `
        <div class="mt-4 mb-8 md:pl-24">
          <span class="inline-block bg-primary align-top text-center mb-8 mr-8 lg:w-1/5">
            <span class="font-secondary text-secondary p-2 inline-block text-4xl text-center">${formatStartTime(startTime)}</span>
          </span>

          <bf-lineup-card
            class="inline-block mb-24 lg:w-3/4"
            rotation="${rotation}"
            name="${name}"
            bio="${bio}"
            picture="${picture}"
            facebook="${facebook}"
            spotify="${spotify}"
            youtube="${youtube}"
            website="${website}"
            instagram="${instagram}"
            apple="${apple}"
          ></bf-lineup-card>
        </div>
      `;
    }).join('');

    this.innerHTML = `
      <h1 class="text-center font-secondary text-5xl text-primary mb-8">Lineup</h1>
      <div class="block lg:w-5/6 lg:mr-auto lg:ml-auto">
        ${lineupContent}
      </div>
    `;
  }
}