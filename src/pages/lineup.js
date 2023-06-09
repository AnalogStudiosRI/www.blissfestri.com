import '../components/lineup-card/lineup-card.js';
import { getLineup } from '../services/lineup.js';

function formatStartTime(timestamp) {
  const time = new Date(timestamp);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedHours = hours - 12;
  const formattedMinutes = parseInt(minutes, 10) < 10
    ? `0${minutes}`
    : minutes;

  return `${formattedHours}: ${formattedMinutes}`;
}
export default class LineupPage extends HTMLElement {
  constructor() {
    super();
    this.lineup = getLineup();
  }

  connectedCallback() {
    const lineupContent = this.lineup.map((artist, idx) => {
      const { name, bio, picture, startTime, facebook, spotify, youtube, website, apple, instagram } = artist;
      const rotation = idx % 2 === 0 ? 'left' : 'right';

      return `
        <div>
          <span>${formatStartTime(startTime)}</span>
          <bf-lineup-card
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
      <h1 class="text-center">Lineup</h1>
      <div>
        ${lineupContent}
      </div>
    `;
  }
}