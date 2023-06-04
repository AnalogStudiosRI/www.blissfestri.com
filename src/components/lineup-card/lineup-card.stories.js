import '../../styles/theme.css';
import './lineup-card.js';

export default {
  title: 'Components/Lineup Card'
};

const Template = () => `
  <bf-lineup-card
    name="Analog"
    bio="The name of the band is analog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    picture="https://d34k5cjnk2rcze.cloudfront.net/images/artists/analog.jpg"
  >
  </bf-lineup-card>
`;

export const Primary = Template.bind({});