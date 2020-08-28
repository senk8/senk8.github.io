<template>
  <SectionFrame :id="id" :subtitle="subtitle" :text="text">
  <v-timeline class="pa-12" :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="light-blue lighten-3"
      fill-dot
      left
    >
      <FadeIn>
      <TimeCard :name="activity[0].name" :term="activity[0].term" :description="activity[0].description" />
      </FadeIn>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-3"
      fill-dot
      right
    >
      <FadeIn>
      <TimeCard :name="activity[1].name" :term="activity[1].term" :description="activity[1].description" />
      </FadeIn>
    </v-timeline-item>

    <v-timeline-item
      color="teal lighten-3"
      fill-dot
      left
    >
      <FadeIn>
      <TimeCard :name="activity[2].name" :term="activity[2].term" :description="activity[2].description" />
      </FadeIn>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-3"
      fill-dot
      right
    >
      <TimeCard :name="activity[3].name" :term="activity[3].term" :description="activity[3].description" />
    </v-timeline-item>
    <v-timeline-item
      color="light-green lighten-3"
      fill-dot
      left
    >
      <FadeIn>
      <TimeCard :name="activity[4].name" :term="activity[4].term" :description="activity[4].description" />
      </FadeIn>
    </v-timeline-item>
  </v-timeline>
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
    text:`下記のような活動の他に競技プログラミングや、
          はてなブログ・Qiitaでの技術記事の執筆を行っています。`,
 
    activity:[
      {
        name:"GBC",
        term:"2017/09~",
        description:
          `学生団体で学部の課題解決活動を行っていしまた。
           現在は大学院生として学部生に助言をする立場です。`
      },
      {
        name:"株式会社CSDインターン",
        term:"2018/08",
        description:
          `画面設計やHTML/CSSによる画面作成を行いました。`
      },
      {
        name:"EAGLYS株式会社インターン",
        term:"2019/10~",
        description:
          `秘密計算システムの開発を行っています。`
      },
      {
        name:"第127回プログラミング研究発表会",
        term:"2020/01",
        description:
          `卒業研究の内容を学会発表しました。https://sigpro.ipsj.or.jp/pro2019-4/ より確認できます.`
      },
      {
        name:"株式会社いい生活サマーインターン",
        term:"2020/08",
        description:
          `Vue.jsを用いて不動産紹介ページをチーム開発しました。`
      },
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