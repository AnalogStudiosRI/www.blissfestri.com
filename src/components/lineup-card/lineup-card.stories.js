import '../../styles/theme.css';
import './lineup-card.js';
import { MOCK_ARTIST } from './mock-artist.js';

export default {
  title: 'Components/Lineup Card'
};

const Template = ({ props }) => {
  const { name, bio, picture, rotation, instagram, facebook, youtube } = props;
  const rotationAttr = rotation ? `rotation="${rotation}"` : '';
  const instagramAttr = instagram ? `instagram="${instagram}"` : '';
  const facebookAttr = facebook ? `facebook="${facebook}"` : '';
  const youtubeAttr = youtube ? `youtube="${youtube}"` : '';

  return `
    <bf-lineup-card
      name="${name}"
      bio="${bio}"
      picture="${picture}"
      ${rotationAttr}
      ${instagramAttr}
      ${facebookAttr}
      ${youtubeAttr}
    >
    </bf-lineup-card>
  `;
};

export const Primary = Template.bind({});

Primary.args = {
  props: {
    name: MOCK_ARTIST.name,
    bio: MOCK_ARTIST.bio,
    picture: MOCK_ARTIST.picture
  }
};

export const Socials = Template.bind({});

Socials.args = {
  props: {
    ...MOCK_ARTIST
  }
};

export const RotationRight = Template.bind({});

RotationRight.args = {
  props: {
    ...MOCK_ARTIST,
    rotation: 'right'
  }
};

export const RotationLeft = Template.bind({});

RotationLeft.args = {
  props: {
    ...MOCK_ARTIST,
    rotation: 'left'
  }
};