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
      <Posts class="my-12" />
      <v-divider />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Top from '@/views/Top.vue'
import AboutMe from '@/views/AboutMe.vue'
import Activities from '@/views/Activities.vue'
import SkillSet from '@/views/SkillSet.vue'
import Posts from '@/views/Posts.vue'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components:{
    Top,
    AboutMe,
    SkillSet,
    Activities,
    Posts,
    Header,
    Footer,
  },
  data: () => ({
    name:'portfolio',
  }),

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.application{
 font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}
</style>