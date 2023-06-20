import '../../styles/theme.css';
import './lineup-card.js';
import { getLineup } from '../../services/lineup-service.js';

const MOCK_ARTIST = getLineup()[0];

export default {
  title: 'Components/Lineup Card'
};

const Template = ({ props }) => {
  const { name, bio, picture, rotation, instagram, facebook, youtube, apple, website, spotify } = props;
  const rotationAttr = rotation ? `rotation="${rotation}"` : '';
  const instagramAttr = instagram ? `instagram="${instagram}"` : '';
  const facebookAttr = facebook ? `facebook="${facebook}"` : '';
  const youtubeAttr = youtube ? `youtube="${youtube}"` : '';
  const appleAttr = youtube ? `apple="${apple}"` : '';
  const websiteAttr = youtube ? `website="${website}"` : '';
  const spotifyAttr = youtube ? `spotify="${spotify}"` : '';

  return `
    <bf-lineup-card
      name="${name}"
      bio="${bio}"
      picture="${picture}"
      ${rotationAttr}
      ${instagramAttr}
      ${facebookAttr}
      ${youtubeAttr}
      ${appleAttr}
      ${websiteAttr}
      ${spotifyAttr}
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