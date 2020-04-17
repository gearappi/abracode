<template>
  <v-card color="blue-grey lighten-4" flat tile>
    <v-toolbar dense>
      <v-app-bar-nav-icon @click.stop="handleDrawer" />
      <router-link to="/">
        <v-toolbar-title class="title">
          <v-img
            src="/img/logo_core.png"
            class="logotype"
            height="30"
            width="30"
          />
          <span>GearAPPI</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer />

      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>

export default {
  name: "Navbar",
  methods: {
    handleDrawer: function() {
      this.$emit("changeDrawer");
    },
    logout: function () {
      localStorage.removeItem("jwt");
      localStorage.removeItem("is_user");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.title {
  display: flex;
  padding-left: 5px !important;
  span {
    padding-left: 5px;
    color: #202020;
  }
}
</style>
