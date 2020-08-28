<template>
  <SectionFrame :id="id" :subtitle="subtitle" :text="text">
    <FadeIn>
      <v-row cols="12">
      <v-col 
      align-self="center"
      cols="4" 
      offset="2" >
      <v-img
        src="@/assets/prof.jpg"
      ></v-img>
      </v-col>
      <v-col cols="6" md="6">
      <v-card-text class="text-caption">
        <p class="text-h6">
          名前:{{name}}
        </p>
        <p>
          大学:{{university}}
        </p>
        <p>
          専攻:{{major}}
        </p>
        <p>
          ラボ:{{labo}}
        </p>
        <p>
          研究:{{theme}}
        </p>
        <p>
          関連リンクはページ最下にあります。          
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
    text:"",
    name:"佐藤開智",
    university:"法政大学大学院修士一年",
    labo:"尾花研究室",
    major:"情報科学",
    theme:"マルチパーティ計算/秘密計算",
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