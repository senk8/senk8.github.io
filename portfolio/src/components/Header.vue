<template>
  <div>
    <div>
    <v-app-bar
      flat
      fixed
      color="light-green"
      dark
    >
        <v-app-bar-nav-icon :class="smartphone" @click.stop="showList()"/>
        
        <v-tabs 
        light-green
        icons-and-text
        centered
        >
          <div :class="pc">
          <v-tab v-for="info in tabInfo" :key="info.to_id" v-scroll-to="info.to_id" :href="info.url">
            {{ info.subtitle }}
            <v-icon>{{ info.icon }}</v-icon>
          </v-tab>
          </div>
        </v-tabs>

    </v-app-bar>
    </div>


    <h2 :class="pc">
      SenK's Portfolio
    </h2>

    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        hide-overlay
        class="white--text"
      >
        <v-list
          nav
          dense
        >
          <v-list-item>
            SenK's Portfolio
          </v-list-item>
          <v-divider/>
          <v-list-item-group
            active-class="light-green--text text--accent-4"
          >
           <v-list-item v-for="info in tabInfo" :key="info.to_id" v-scroll-to="info.to_id" :href="info.url">
              <v-list-item-icon>
                <v-icon>{{ info.icon }}</v-icon>
              </v-list-item-icon>
              {{ info.subtitle }}
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>  

   </div>
</template>

<script>
export default {
  name: "Header",
  data:()=>({
    smartphone:"d-flex d-sm-none",
    pc:"d-none d-sm-flex",
    drawer:false,
    tabInfo:[
    {
      subtitle:"Top",
      to_id:"#top",
      url:"#",
      icon:"mdi-home"
    },
    {
      subtitle:"About Me",
      to_id:"#aboutme",
      url:"#aboutme",
      icon:"mdi-account"
    },
    {
      subtitle:"Skill Set",
      to_id:"#skillset",
      url:"#skillset",
      icon:"mdi-monitor"
    },
    {
      subtitle:"Activities",
      to_id:"#activities",
      url:"#activities",
      icon:"mdi-account-multiple"
    },
    ],
  }),
  methods:{
    showList: function (){
      this.drawer=!this.drawer;
    },
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
