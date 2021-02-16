<template>
  <SectionFrame :id="id" :subtitle="subtitle" :text="text">
    <FadeIn>
    <v-row >
    <v-col cols="12" md="6" xs="12" v-for="post in posts" :key="post.title" >
    <PostCard :title="post.title" :created_at="post.created_at" :url="post.url" :likes_count="post.likes_count" :tags="post.tags"/>
    </v-col>
    </v-row>
    </FadeIn>
  </SectionFrame>
</template>

<script>
import SectionFrame from "@/components/SectionFrame"
import FadeIn from "@/components/FadeIn"
import PostCard from "@/components/PostCard"

export default {
  name: "Posts",
  data: () => ({
    id:"posts",
    subtitle:"Posts",
    text:`Qiitaでの最新記事10件を紹介しています。他のサービスでの投稿はページ下部のリンクよりご覧ください。`,
    posts: null
  }),
  components: {
    FadeIn,
    SectionFrame,
    PostCard,
  },
  mounted: function(){
    this.$axios.get( 'https://qiita.com/api/v2/users/SenK/items?page=1&per_page=10')
    .then( ( response ) => {
        response.data.forEach( elm => 
          {elm.created_at=new Date(elm.created_at)}
        );
        this.posts=response.data;
    })
    .catch( ( response ) => {
        console.error( response );
    });
  }
}
</script>



<style scoped>
.posts {
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