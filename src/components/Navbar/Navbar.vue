<template>
    <v-card
        color="blue-grey lighten-4"
        flat
        tile
    >
    <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="title">
            <v-img
                src="/img/logo_core.png"
                class="logotype"
                height="30"
                width="30"
            />
            <span>GearAPPI</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-toolbar>
    </v-card>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style lang="scss" scoped>
.title{
    display: flex;
    padding-left: 5px !important;
    span{
        padding-left: 5px;
    }
}
</style>
