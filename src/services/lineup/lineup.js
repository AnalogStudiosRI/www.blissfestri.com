import lineup from './lineup.json' assert { type: 'json' };

console.log({ lineup });

function getLineup(reverse = false) {
  if (reverse) {
    return lineup.reverse();
  }

  return lineup;
}

export {
  getLineup
};