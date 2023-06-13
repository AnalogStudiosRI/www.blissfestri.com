/* eslint-disable max-len */
const LINEUP = [{
  name: 'Jabbawaukee',
  bio: 'Jabbawaukee is a Southern New England based quartet playing psychedelic funk and jam rock!',
  picture: 'https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/348597984_2443540075804741_862726556603536021_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zSTp6xZ-BnIAX8jemax&_nc_ht=scontent-bos5-1.xx&oh=00_AfCVReR0KIONrPdt_L745KpIR6tZpIJ4Yicl2ajHGlTWAg&oe=6488471D',
  facebook: 'https://www.facebook.com/JABBAWAUKEE/',
  instagram: 'https://www.instagram.com/jabbawaukee_band/',
  website: 'https://www.jabbawaukee.com',
  spotify: 'https://open.spotify.com/artist/1CBlzYSiHvEO86x2UO85u4',
  youtube: 'https://www.youtube.com/channel/UCjNsiyNaoh7-Xp6rtCgq4BA',
  apple: 'https://music.apple.com/us/artist/jabbawaukee/1593104536',
  startTime: 1690682400000 // 10pm
}, {
  name: 'Analog',
  bio: 'Analog is a power duo consisting of guitar and drums.  Strong rock beats, smooth vocals, and loud guitar meld together to create Analog\'s unique sound.',
  picture: 'https://d34k5cjnk2rcze.cloudfront.net/images/artists/analog.jpg',
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
  picture: 'https://d1fdloi71mui9q.cloudfront.net/ukAnZ2ARmCZdMrfaBHIc_5kjKKBWg1aHgO62n',
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
  picture: 'https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/168369833_135222521916361_7088195225441111800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YwSCwZW-UDQAX-n6IjW&_nc_ht=scontent-bos5-1.xx&oh=00_AfDSa_gTO8rVRa5twMZNmnEJ5Ps9-Xqet6fz-EvebEpZlw&oe=64A9E90A',
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
  picture: 'https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/338289986_1903874899972494_8661821939696629366_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H9f9W4PeQTUAX-RXoM9&_nc_ht=scontent-bos5-1.xx&oh=00_AfDP3YqH0cX9IXL74YC_woL024vJO6IqMVCNpqb9B-wIRg&oe=64874727',
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
  picture: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
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