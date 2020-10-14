<template>
  <SectionFrame :id="id" :subtitle="subtitle" :text="text">
    <FadeIn>
      <v-row cols="12">
      <v-col 
      align-self="center"
      xs="12" 
      md="4" 
      offset-md="2" >
      <v-img
        src="@/assets/prof.jpg"
      ></v-img>
      </v-col>
      <v-col 
      md="6"
      xs="12">
      <v-card-text class="text-center text-md-h6 text-caption">
        <p v-for="prof in profile" :key="prof.label">
          {{prof.label}}:{{prof.text}}
        </p>
      </v-card-text>
      </v-col>
    </v-row>
    </FadeIn>
  </SectionFrame>
</template>


<script>
import SectionFrame from '@/components/SectionFrame'
import FadeIn from "@/components/FadeIn"

export default {
  name: 'AboutMe',
  data: () => ({
    id:"aboutme",
    subtitle:"About Me",
    profile: [
    {
      label:"Name",
      text:"SenK",
    },
    {
      label:"Degree",
      text:"法政大学大学院修士一年",
    },
    {
      label:"Labo",
      text:"尾花研究室",
    },
    { 
      label:"Major",
      text:"情報科学",
    },
    {
      label:"Theme",
      text:"マルチパーティ計算/秘密計算",
    },
    {
      label:"Link",
      text:"関連リンクはページ最下にあります。",
    }
    ]
  }),
  components:{
    SectionFrame,
    FadeIn
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>