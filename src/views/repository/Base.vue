<script>
import { mapGetters } from 'vuex';
import Repository from '@/models/repository';


export default {
  name: 'RepositoryBase',
  data() {
    return {
      repository: null,
      errorCode: null,
      ready: false,
    };
  },
  computed: {
    ...mapGetters([
      'authenticated',
    ]),
  },
  watch: {
    $route() {
      this.updateRepository();
    },
    authenticated() {
      this.updateRepository();
    },
  },
  mounted() {
    this.updateRepository();
  },
  provide() {
    return {
      updateRepository: this.updateRepository,
    };
  },
  methods: {
    async updateRepository(silent = false) {
      const { ownerNickname, slug } = this.$route.params;

      if (!ownerNickname || !slug) {
        this.repository = null;
        return this.repository;
      }

      if (!this.repository
          || this.repository.ownerNickname !== ownerNickname
          || this.repository.slug !== slug
          || !silent) {
        this.repository = new Repository({ owner__nickname: ownerNickname, slug });
      }

      this.repository.on('cache', this.onReady);
      this.repository.on('fetch', this.onReady);

      await this.repository.fetch();

      return this.repository;
    },
    onReady() {
      this.ready = true;
    },
  },
};
</script>
