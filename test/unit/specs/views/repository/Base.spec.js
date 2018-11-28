/* eslint-disable import/first */
jest.mock('@/api/request');

import VueMoment from 'vue-moment';
import Buefy from 'buefy';
import Bh from 'bh';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Base from '@/views/repository/Base';


const localVue = createLocalVue();
localVue.use(VueMoment);
localVue.use(Buefy);
localVue.use(Bh);

describe('Base.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Base, {
      localVue,
      setData: {
        repository: {},
        errorCode: null,
        ready: false,
      },
      computed: {
        authenticated: true,
      },
    });
  });

  test('mounted', () => {

  });
});
