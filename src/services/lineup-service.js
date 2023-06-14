/* eslint-disable max-len */
const LINEUP = [{
  name: 'Jabbawaukee',
  bio: 'Jabbawaukee is a Southern New England based quartet playing psychedelic funk and jam rock!',
  picture: '/assets/images/lineup/jabbawaukee.webp',
  facebook: 'https://www.facebook.com/JABBAWAUKEE/',
  instagram: 'https://www.instagram.com/jabbawaukee_band/',
  website: 'https://www.jabbawaukee.com',
  spotify: 'https://open.spotify.com/artist/1CBlzYSiHvEO86x2UO85u4',
  youtube: 'https://www.youtube.com/channel/UCjNsiyNaoh7-Xp6rtCgq4BA',
  apple: 'https://music.apple.com/us/artist/jabbawaukee/1593104536',
  startTime: 1690682400000 // 10pm
}, {
  name: 'Analog',
  bio: 'Analog is a power trio consisting of guitar, bass and drums.  Strong rock beats, smooth vocals, and loud guitar meld together to create Analog\'s unique sound.',
  picture: '/assets/images/lineup/analog.webp',
  facebook: '',
  instagram: 'https://www.instagram.com/analog.newport/',
  website: 'https://www.analogstudios.net/artists/1',
  spotify: '',
  youtube: 'https://www.youtube.com/channel/UCxs5mxoDpmmR0hRbwsxU7Sg',
  apple: '',
  startTime: 1690678800000 // 9pm
}, {
  name: 'Bill Bartholomew',
  bio: 'Singer-songwriter + podcaster.',
  picture: '/assets/images/lineup/bill-bartholomew.webp',
  facebook: 'https://www.facebook.com/billbartholomewmusic/',
  instagram: 'https://www.instagram.com/billbartholomew/',
  website: 'https://www.analogstudios.net/artists/1',
  spotify: 'https://open.spotify.com/artist/2lTJtrORdzzAfWQulZrkdD',
  youtube: 'https://www.youtube.com/channel/UCEWfrWiFc_6FdOjkdr21wBw',
  apple: 'https://music.apple.com/us/artist/bill-bartholomew/279548573',
  startTime: 1690675200000 // 8pm
}, {
  name: 'The Z-Boys',
  bio: 'The Z-Boys is a power trio playing surf rock, soul and funk for your listening and dancing pleasure.',
  picture: '/assets/images/lineup/the-z-boys.webp',
  facebook: 'https://www.facebook.com/zboystonight/',
  instagram: 'https://www.instagram.com/zboystonight/',
  website: 'https://zboystonight.com',
  spotify: 'https://open.spotify.com/artist/69UMUUtRn8kOqOkF6EqEFl',
  youtube: 'https://www.youtube.com/zboystonight',
  apple: 'https://music.apple.com/us/artist/the-z-boys/1192510207',
  startTime: 1690671600000 // 7pm
}, {
  name: 'Allysen Callery',
  bio: 'Allysen Callery is a self taught singer songwriter from Bristol, Rhode Island, whose delicate, mesmerizing sound has been compared to classic British folk artists like Sandy Denny and Nick Drake.',
  picture: '/assets/images/lineup/allysen-callery.webp',
  facebook: 'https://www.facebook.com/allysencallerymusic/',
  instagram: 'https://www.instagram.com/allysencallery/',
  website: 'https://allysencallerymusic.com',
  spotify: 'https://open.spotify.com/artist/2p3yVqXhK2pSO47sxuNXmj',
  youtube: 'https://www.youtube.com/channel/UC_jVd3HqohIpCfWeffwU0Qw',
  apple: 'https://music.apple.com/us/artist/allysen-callery/274514462',
  startTime: 1690668900000 // 6:15pm
}, {
  name: 'Nate Farrar',
  bio: '',
  picture: '/assets/images/lineup/nate-farrar.webp',
  facebook: '',
  instagram: 'https://www.instagram.com/splinter_hippie',
  website: '',
  spotify: 'https://open.spotify.com/artist/627JjqozdCkghNVTuxDQc2',
  youtube: '',
  apple: 'https://music.apple.com/us/artist/nate-farrar/211003726',
  startTime: 1690666200000 // 5:30pm
}];

function getLineup(options = {}) {
  const { sortByStartOrder } = options;

  if (sortByStartOrder) {
    return [...LINEUP].sort((a, b) => a.startTime < b.startTime ? -1 : 1);
  }

  return LINEUP;
}

export { getLineup };