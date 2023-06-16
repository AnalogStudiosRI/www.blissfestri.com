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
  startTime: 1690683300000 // 10:15pm
}, {
  name: 'Analog',
  bio: 'Analog is a Newport, RI based power trio consisting of guitar, bass and drums.  Strong rock beats, smooth vocals, and loud guitar meld together to create Analog\'s unique sound.',
  picture: '/assets/images/lineup/analog.webp',
  facebook: '',
  instagram: 'https://www.instagram.com/analog.newport/',
  website: 'https://www.analogstudios.net/artists/1',
  spotify: '',
  youtube: 'https://www.youtube.com/channel/UCxs5mxoDpmmR0hRbwsxU7Sg',
  apple: '',
  startTime: 1690680300000 // 9:25pm
}, {
  name: 'Bill Bartholomew',
  bio: 'Bill Bartholomew is an indie artist and podcaster. His music has been featured on VICE, Showtime, MTV and many other platforms.',
  picture: '/assets/images/lineup/bill-bartholomew.webp',
  facebook: 'https://www.facebook.com/billbartholomewmusic/',
  instagram: 'https://www.instagram.com/billbartholomew/',
  website: 'https://www.analogstudios.net/artists/1',
  spotify: 'https://open.spotify.com/artist/2lTJtrORdzzAfWQulZrkdD',
  youtube: 'https://www.youtube.com/channel/UCEWfrWiFc_6FdOjkdr21wBw',
  apple: 'https://music.apple.com/us/artist/bill-bartholomew/279548573',
  startTime: 1690677300000 // 8:35pm
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
  startTime: 1690674300000 // 7:45pm
}, {
  name: 'jesse the Tree',
  bio: ' Rhode Island emcee and beatsmith jesse the Tree brings influences ranging from a more traditionally organic and melodic corner of the music world to sounds closer to his own output of hip hop and contemporary underground.   ',
  picture: '/assets/images/lineup/jesse-the-tree.webp',
  facebook: 'https://www.facebook.com/jessethetree/',
  instagram: 'https://www.instagram.com/jessethetree/',
  website: 'https://www.strangefamousrecords.com/artists/jesse-the-tree/',
  spotify: 'https://open.spotify.com/artist/4mp2W09kX6MXfCl4R9uYae',
  youtube: 'https://www.youtube.com/channel/UCazcvHOtjQ7FFyNE3iJuiUA',
  apple: 'https://music.apple.com/us/artist/jesse-the-tree/1310806252',
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
  bio: 'With a debut album giving a nod to Mississippi Delta Blues, Nate Farrar\'s music ranges in mood from forlorn to foot-stomping.',
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