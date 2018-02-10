'use strict';
import people from '../data/people.json';
import interests from '../data/interests.json';

const Api = {
  getAllPeople() {
    return people;
  },
  getInterests(ids) {
    return ids.map(id => interests[id - 1])
  }
};

export default Api;
