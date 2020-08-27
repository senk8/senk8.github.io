<template>
    <div>
    <v-app-bar
      app
      color="light-green darken-1"
      dark
    >
        <v-tabs 
        centered 
        icons-and-text
        >
          <v-tab v-scroll-to="'#top'" href="#">
            Top
            <v-icon>mdi-home</v-icon>
          </v-tab>
          <v-tab v-scroll-to="'#aboutme'" href="#aboutme">
            About me
            <v-icon>mdi-account</v-icon>
          </v-tab>
          <v-tab v-scroll-to="'#skillset'" href="#skillset">
            Skill Set
            <v-icon>mdi-monitor</v-icon>
          </v-tab>
          <v-tab v-scroll-to="'#activities'" href="#activities">
            Activity
            <v-icon>mdi-account-multiple</v-icon>
          </v-tab>
          <v-tab v-scroll-to="'#contact'" href="#contact">
            Contact
            <v-icon>mdi-chat</v-icon>
          </v-tab>
          <!--
          <v-tab v-scroll-to="'#links'" href="#links">
            Links
            <v-icon>mdi-magnify</v-icon>
          </v-tab>
          -->
        </v-tabs>
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: "Header",
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
