<template>
  <bh-card
    shadow="light"
    class="repository-card">
    <repository-info :repository="$attrs" />
  </bh-card>
</template>

<script>
import RepositoryInfo from '@/components/repository/RepositoryInfoHome';

const components = {
  RepositoryInfo,
};

export default {
  name: 'RepositoryCard',
  components,
};
</script>

<style lang="scss" scoped>
@import '~bh/src/assets/scss/variables.scss';


.repository-card {
  margin: 1rem;
  max-width: 30%;
  min-width: 30%;

  @media screen and (max-width: $mobile-width) {
    max-width: 100%;
  }
}
</style>
