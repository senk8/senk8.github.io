<template>
  <SectionFrame :id="id" :subtitle="subtitle" :text="text">
  <v-sheet
    class="pa-12"
    color="grey lighten-3"
  >
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="light-blue lighten-3"
      fill-dot
      left
    >
      <FadeIn>
      <TimeCard :name="activity[0].name" :term="activity[0].term" :descryption="activity[0].descryption" />
      </FadeIn>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-3"
      fill-dot
      right
    >
      <FadeIn>
      <TimeCard :name="activity[1].name" :term="activity[1].term" :descryption="activity[1].descryption" />
      </FadeIn>
    </v-timeline-item>

    <v-timeline-item
      color="teal lighten-3"
      fill-dot
      left
    >
      <FadeIn>
      <TimeCard :name="activity[2].name" :term="activity[2].term" :descryption="activity[2].descryption" />
      </FadeIn>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-3"
      fill-dot
      right
    >
      <TimeCard :name="activity[3].name" :term="activity[3].term" :descryption="activity[3].descryption" />
    </v-timeline-item>
    <v-timeline-item
      color="light-green lighten-3"
      fill-dot
      left
    >
      <FadeIn>
      <TimeCard :name="activity[4].name" :term="activity[4].term" :descryption="activity[4].descryption" />
      </FadeIn>
    </v-timeline-item>
  </v-timeline>
  </v-sheet>
  </SectionFrame>
</template>

<script>
import SectionFrame from "@/components/SectionFrame"
import TimeCard from "@/components/TimeCard"
import FadeIn from "@/components/FadeIn"

export default {
  name: "Activities",
  data: () => ({
    id:"activities",
    subtitle:"Activities",
    text:"下記のような活動の他に競技プログラミングや、はてなブログ・Qiitaでの技術記事の執筆を行っています。",
    activity:[
      {name:"GBC",term:"2017/09~",descryption:"学生団体で学部の課題解決活動"},
      {name:"株式会社CSD",term:"2018/08",descryption:"画面設計、HTML/CSSによる画面作成"},
      {name:"EAGLYS株式会社",term:"2019/10~",descryption:"秘密算システムの開発"},
      {name:"第127回プログラミング研究発表会",term:"2020/01",descryption:"学会発表"},
      {name:"株式会社いい生活",term:"2020/08",descryption:"Vue.jsを用いたチーム開発"},
    ]
  }),
  components: {
    SectionFrame,
    TimeCard,
    FadeIn
  }
}
</script>

<style scoped>
.activity {
  height: 1000px;
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