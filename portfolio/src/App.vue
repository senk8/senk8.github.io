<template>
  <v-app>
    <v-main>
      <Header />
      <Top class="my-12"/>
      <v-divider />
      <AboutMe class="my-12"/>
      <v-divider />
      <SkillSet class="my-12"/>
      <v-divider />
      <Activities class="my-12" />
      <v-divider />
      <Contact class="my-12"/>
      <v-divider />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Top from '@/views/Top.vue'
import AboutMe from '@/views/AboutMe.vue'
import Activities from '@/views/Activities.vue'
import Contact from '@/views/Contact.vue'
import SkillSet from '@/views/SkillSet.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components:{
    Top,
    AboutMe,
    SkillSet,
    Activities,
    Contact,
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
