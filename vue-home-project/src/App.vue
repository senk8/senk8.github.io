<template>
  <v-app>
    <v-main>
      <NavBar />
      <Home />
      <Profile />
      <Skills />
      <Activity />
      <Contact />
      <Links />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Activity from '@/views/Activity.vue'
import Contact from '@/views/Contact.vue'
import Skills from '@/views/Skills.vue'
import Links from '@/views/Links.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components:{
    Home,
    Profile,
    Skills,
    Activity,
    Contact,
    Links,
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>
