import '../../styles/theme.css';
import './lineup-card.js';

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
    name: 'Analog',
    bio: 'The name of the band is analog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture: 'https://d34k5cjnk2rcze.cloudfront.net/images/artists/analog.jpg'
  }
};

export const Socials = Template.bind({});

Socials.args = {
  props: {
    name: 'Analog',
    bio: 'The name of the band is analog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture: 'https://d34k5cjnk2rcze.cloudfront.net/images/artists/analog.jpg',
    instagram: 'https://www.instagram.com/dave.flamand/',
    facebook: 'https://www.facebook.com',
    youtube: 'https://www.youtube.com'
  }
};

export const RotationRight = Template.bind({});

RotationRight.args = {
  props: {
    name: 'Analog',
    bio: 'The name of the band is analog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture: 'https://d34k5cjnk2rcze.cloudfront.net/images/artists/analog.jpg',
    rotation: 'right',
    instagram: 'https://www.instagram.com/dave.flamand/',
    facebook: 'https://www.facebook.com',
    youtube: 'https://www.youtube.com'
  }
};

export const RotationLeft = Template.bind({});

RotationLeft.args = {
  props: {
    name: 'Analog',
    bio: 'The name of the band is analog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture: 'https://d34k5cjnk2rcze.cloudfront.net/images/artists/analog.jpg',
    rotation: 'left',
    instagram: 'https://www.instagram.com/dave.flamand/',
    facebook: 'https://www.facebook.com',
    youtube: 'https://www.youtube.com'
  }
};