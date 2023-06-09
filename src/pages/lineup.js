import '../components/lineup-card/lineup-card.js';
import { getLineup } from '../services/lineup.js';

export default class LineupPage extends HTMLElement {
  constructor() {
    super();
    this.lineup = getLineup();
  }

  connectedCallback() {
    const lineupContent = this.lineup.map((artist, idx) => {
      const { name, bio, picture, facebook, spotify, youtube, website, apple, instagram } = artist;
      const rotation = idx % 2 === 0 ? 'left' : 'right';

      return `
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