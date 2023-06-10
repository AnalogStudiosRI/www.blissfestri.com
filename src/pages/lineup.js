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
    this.lineup = getLineup().reverse();
  }

  connectedCallback() {
    const lineupContent = this.lineup.map((artist, idx) => {
      const { name, bio, picture, startTime, facebook, spotify, youtube, website, apple, instagram } = artist;
      const rotation = idx % 2 === 0 ? 'left' : 'right';

      return `
        <div class="mt-4 mb-4">
          <span class="inline-block text-center mb-8">
            <span class="bg-primary text-5xl font-secondary text-secondary p-2">${formatStartTime(startTime)}</span>
          </span>
          <bf-lineup-card
            class="inline-block mb-24"
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
      <h1 class="text-center font-secondary text-5xl text-primary">Lineup</h1>
      <div class="block">
        ${lineupContent}
      </div>
    `;
  }
}