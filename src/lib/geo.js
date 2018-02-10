'use strict';

export function getRandomInRange(fromCoord, toCoord, fixedLen) {
  return (Math.random() * (toCoord - fromCoord) + fromCoord).toFixed(fixedLen) * 1;
}
