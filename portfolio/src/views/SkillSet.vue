<template>
  <SectionFrame :id="id" :subtitle="subtitle" :text="text">
  <v-sheet
    class="pa-12"
    color="grey lighten-3"
  >
  <v-row>
  <v-col cols="12" md="6" v-for="(skill,index) in skills" :key="index">
    <FadeIn>
    <SkillCard :description="skill.description" :language="skill.language" :rating="skill.rating"></SkillCard>
    </FadeIn>
  </v-col>
  </v-row>
  </v-sheet>
  </SectionFrame>
</template>

<script>
import SectionFrame from '@/components/SectionFrame'
import SkillCard from '@/components/SkillCard'
import FadeIn from '@/components/FadeIn'

export default {
  name: 'SkillSet',
  data: () => ({
    id:"skillset",
    subtitle:"Skill Set",
    text:"コンピュータにまつわるスキルを紹介します。",
    skills:[{language:"Python",rating:4,description:"研究、バックエンドに使用"},
            {language:"Cython",rating:4,description:"C++をPythonにラッピングするために使用"},
            {language:"C++",rating:5,description:"競技プログラミング、実務用アルゴリズムの実装"},
            {language:"Scala",rating:3,description:"趣味言語1"},
            {language:"Haskell",rating:2,description:"趣味言語2"},
            {language:"Vue.js",rating:2,description:"短期インターン、ポートフォリオサイトの作成"},
            {language:"HTML/CSS",rating:3,description:"短期インターン、ポートフォリオサイトの作成"},
            {language:"JavaScript",rating:2,description:"短期インターン、研究等で使用"},
            {language:"Docker",rating:3,description:"長期インターン、個人使用"},
            {language:"Git",rating:4,description:"OSS活動、チーム開発での使用"},
            {language:"応用情報技術者",rating:4,description:"資格、基本情報技術者もあり"},
            {language:"３級色彩コーディネーター",rating:3,description:"資格、過去にデザイナーに興味があったため"},
    ]
  }),
  components:{
    SectionFrame,
    SkillCard,
    FadeIn
  },
}
</script>

<style scoped>
.block {
  height: 1000px;
  background-color: red;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>