/* eslint-disable class-methods-use-this */
import ShortRepository from '@/models/short-repository';
import BaseCollection from './base';


class RepositoriesList extends BaseCollection {
  options() {
    return {
      model: ShortRepository,
    };
  }

  routes() {
    return {
      fetch: 'v2/repositories/',
    };
  }
}

export default RepositoriesList;
