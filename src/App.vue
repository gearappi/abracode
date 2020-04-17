<template>
  <v-app id="inspire">
    <drawer :mvarian="miniVariant" />
    <v-content>
      <navbar @changeDrawer="changeDrawer" />
      <v-container fluid>
        <!-- PAGES BLOCKS  -->
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import Drawer from "./components/Drawer/Drawer";
export default {
  name: "App",

  components: {
    Navbar,
    Drawer
  },

  data() {
    return {
      miniVariant: true
    };
  },
  computed: {},
  methods: {
    changeDrawer: function() {
      this.miniVariant = !this.miniVariant;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/styles/index.scss";
.height100pr {
  height: 100%;
}
</style>
