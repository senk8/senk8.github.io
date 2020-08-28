<template>
  <SectionFrame :id="id" :subtitle="subtitle" :text="text">
  <v-sheet
    class="pa-12"
    color="white"
  >
  <v-row>
  <v-col cols="12" md="6" v-for="(skill,index) in skills" :key="index">
    <FadeIn>
    <SkillCard :description="skill.description" :language="skill.language" :icon_name="skill.icon_name"></SkillCard>
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
    skills:[{language:"Python",icon_name:"mdi-language-python",description:"研究、バックエンドに使用"},
            {language:"Cython",icon_name:"mdi-language-python",description:"C++をPythonにラッピングするために使用"},
            {language:"C++",icon_name:"mdi-language-cpp",description:"競技プログラミング、実務用アルゴリズムの実装"},
            {language:"Scala",icon_name:"mdi-language-java",description:"趣味言語1,アイコンはありませんでした。"},
            {language:"Haskell",icon_name:"mdi-language-haskell",description:"趣味言語2"},
            {language:"Vue.js",icon_name:"mdi-vuejs",description:"短期インターン、ポートフォリオサイトの作成"},
            {language:"HTML/CSS",icon_name:"mdi-language-html5",description:"短期インターン、ポートフォリオサイトの作成"},
            {language:"JavaScript",icon_name:"mdi-language-javascript",description:"短期インターン、研究等で使用"},
            {language:"Docker",icon_name:"mdi-docker",description:"長期インターン、個人使用"},
            {language:"Git",icon_name:"mdi-git",description:"OSS活動、チーム開発での使用"},
            {language:"応用情報技術者",icon_name:"mdi-school",description:"資格、基本情報技術者もあり"},
            {language:"３級色彩コーディネーター",icon_name:"mdi-material-design",description:"資格、過去にデザイナーに興味があったため"},
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>