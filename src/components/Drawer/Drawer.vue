<template>
  <v-navigation-drawer
    :mini-variant="mvarian"
    disable-resize-watcher
    app
    dark
    fixed
    mobile-break-point="300px"
  >
    <div class="topMargin" />
    <v-list dense nav class="py-3">
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  props: {
    mvarian: {
      type: Boolean,
      default: null
    }
  },
  data() {
    return {
      items: [
        { title: "Main", icon: "mdi-view-dashboard", link: "/" },
        { title: "Database", icon: "mdi-database", link: "/db" },
        { title: "Notification", icon: "mdi-bell", link: "/notification" },
        { title: "About", icon: "mdi-help-box", link: "/about" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.topMargin {
  margin-top: 35px !important;
}
</style>
