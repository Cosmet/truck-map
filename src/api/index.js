'use strict';
import people from '../data/people.json';
import interests from '../data/interests.json';

const Api = {
  getAllPeople() {
    return new Promise((resolve, reject) => {
      if (people.length > 0) {
        resolve(people);
      }
      else {
        reject(new Error('Failed to fetch people from database.'));
      }
    });
  },
  getInterests(ids) {
    return new Promise((resolve, reject) => {
      const fetchedInterests = ids.map(id => interests[id - 1]);
      if (interests.length > 0) {
        resolve(fetchedInterests);
      }
      else {
        reject(new Error('Failed to fetch interests from database.'));
      }
    });
  },
};

export default Api;
