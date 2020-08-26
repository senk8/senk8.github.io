<template>
    <div>
    <v-app-bar
      app
      color="light-green darken-1"
      dark
    >
        <v-toolbar-title class="title">Senk's Portfolio Page !!!!!!!!!</v-toolbar-title>
        <v-tabs>
          <v-spacer />
          <v-tab v-scroll-to="'#Top'" href="#Top">Top</v-tab>
          <v-tab v-scroll-to="'#Profile'" href="#Profile">Profile</v-tab>
          <v-tab v-scroll-to="'#Skills'" href="#Skills">Skills</v-tab>
          <v-tab v-scroll-to="'#Activity'" href="#Activity">Activity</v-tab>
          <v-tab v-scroll-to="'#Contact'" href="#Contact">Contact</v-tab>
          <v-tab v-scroll-to="'#Links'" href="#Links">Links</v-tab>
        </v-tabs>
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  methods:{
  },
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Josefin+Sans:ital@1&family=Kosugi+Maru&family=Satisfy&display=swap');

.title{
    font-family: 'Satisfy', cursive;
    font-size: 5px;
}
</style>
