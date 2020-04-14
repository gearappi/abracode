<template>
  <v-app id="inspire">
    <navbar />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar';
export default {
  name: "App",

  components: {
    Navbar
  },

  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
@import "./assets/styles/index.scss";
</style>
