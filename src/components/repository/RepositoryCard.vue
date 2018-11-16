<template>
  <bh-card
    shadow="light"
    class="repository-card">
    <div class="bh-grid">
      <div class="bh-grid__item">
        <repository-info :repository="$attrs" />
      </div>
    </div>
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
  margin: 1rem 0;
  max-width: 30%;
  min-width: 30%;

  @media screen and (max-width: $mobile-width) {
    max-width: 100%;
  }
}
</style>
