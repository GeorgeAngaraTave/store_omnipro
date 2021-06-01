<template>
  <div class="container-main">
    <banner-header></banner-header>
    <router-view></router-view>
    <banner-footer></banner-footer>
  </div>
</template>

<script>
import header from './Header'
import footer from './Footer'
export default {
  components:{"banner-header":header,"banner-footer":footer},
  data() {
    return {};
  },
  watch: {},
  methods: {},
  computed: {},
};
</script>
<style scoped lang="scss">
.container-main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
