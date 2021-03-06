import qs from 'query-string';

import request from './request';
import utils from './utils';


export default {
  async getNewSchema() {
    const { data } = await request.$http.options('/repository/new/');
    return data.actions.POST;
  },
  new(name, slug, language, categories, description = '', isPrivate = false,
    useLanguageModelFeaturizer = true, useCompetingIntents = false) {
    return request.$http.post(
      '/repository/new/',
      {
        name,
        slug,
        language,
        categories,
        description,
        is_private: isPrivate,
        use_language_model_featurizer: useLanguageModelFeaturizer,
        use_competing_intents: useCompetingIntents,
      },
    );
  },
  getAll() {
    return new utils.List('/repositories/');
  },
  search(query) {
    const queryString = qs.stringify(query);
    return new utils.List(`/v2/repositories/?${queryString}`);
  },
  get(ownerNickname, slug) {
    return request.$http.get(`/repository/${ownerNickname}/${slug}/`);
  },
  train(ownerNickname, slug) {
    return request.$http.get(`/repository/${ownerNickname}/${slug}/train/`);
  },
  analyze(ownerNickname, slug, language, text) {
    return request.$http.post(
      `/repository/${ownerNickname}/${slug}/analyze/`,
      {
        language,
        text,
      },
    );
  },
  async getEditSchema(ownerNickname, slug) {
    const { data } = await request.$http.options(`/repository/${ownerNickname}/${slug}/`);
    return data.actions.PUT;
  },
  edit(ownerNickname, slug, name, newSlug, language, categories, description, isPrivate,
    useLanguageModelFeaturizer, useCompetingIntents) {
    return request.$http.patch(
      `/repository/${ownerNickname}/${slug}/`,
      {
        name,
        slug: newSlug,
        language,
        categories,
        description,
        is_private: isPrivate,
        use_language_model_featurizer: useLanguageModelFeaturizer,
        use_competing_intents: useCompetingIntents,
      },
    );
  },
  getLanguagesStatus(ownerNickname, slug) {
    return request.$http.get(
      `/repository/${ownerNickname}/${slug}/languagesstatus/`,
    );
  },
  vote(ownerNickname, slug, value) {
    return request.$http.post(
      `/repository/${ownerNickname}/${slug}/vote/`,
      {
        vote: value,
      },
    );
  },
  voteUp(ownerNickname, slug) {
    return this.vote(ownerNickname, slug, 1);
  },
  voteDown(ownerNickname, slug) {
    return this.vote(ownerNickname, slug, -1);
  },
  updateAuthorizationRole(repositoryUuid, userNickname, role) {
    return request.$http.patch(
      `/authorization-role/${repositoryUuid}/${userNickname}/`,
      { role },
    );
  },
  getAuthorizationList(repositoryUuid) {
    const queryString = qs.stringify({ repository: repositoryUuid });
    return new utils.List(`/authorizations/?${queryString}`);
  },
  async getRequestAuthorizationSchema() {
    const { data } = await request.$http.options('/request-authorization/');
    return data.actions.POST;
  },
  requestAuthorization(repositoryUuid, text) {
    return request.$http.post(
      '/request-authorization/',
      {
        repository: repositoryUuid,
        text,
      },
    );
  },
  getAuthorizationRequestsList(repositoryUuid) {
    const queryString = qs.stringify({
      repository_uuid: repositoryUuid,
    });
    return new utils.List(`/authorization-requests/?${queryString}`);
  },
  approveRequestAuthorization(id) {
    return request.$http.put(`/review-authorization-request/${id}/`);
  },
  rejectRequestAuthorization(id) {
    return request.$http.delete(`/review-authorization-request/${id}/`);
  },
};
