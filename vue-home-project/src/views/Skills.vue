<template>
  <v-container id="Skills">
  <v-subheader>Skills</v-subheader>
  <div v-for="(skill,index) in skills" :key="index">
    <Fade>
    <SkillCard :descryption="skill.descryption" :language="skill.language" :rating="skill.rating"></SkillCard>
    </Fade>
  </div>
  </v-container>
</template>

<script>
import SkillCard from '@/components/SkillCard'
import Fade from '@/components/Fade'

export default {
  name: 'Skills',
  data: () => ({
    skills:[{language:"Python",rating:4,descryption:"研究、バックエンドに使用"},
            {language:"Cython",rating:4,descryption:"C++をPythonにラッピングするために使用"},
            {language:"C++",rating:5,descryption:"競技プログラミング、実務用アルゴリズムの実装"},
            {language:"Scala",rating:3,descryption:"趣味言語1"},
            {language:"Haskell",rating:2,descryption:"趣味言語2"},
            {language:"Vue.js",rating:2,descryption:"短期インターン、ポートフォリオサイトの作成"},
            {language:"HTML/CSS",rating:3,descryption:"短期インターン、ポートフォリオサイトの作成"},
            {language:"JavaScript",rating:2,descryption:"短期インターン、研究等で使用"},
            {language:"Docker",rating:3,descryption:"長期インターン、個人使用"},
            {language:"Git",rating:4,descryption:"OSS活動、チーム開発での使用"},
    ]
  }),
  components:{
    SkillCard,
    Fade
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