<template>
  <SectionFrame :id="id" :subtitle="subtitle" :text="text">

    <v-row>
    <v-col cols="12" md="6" v-for="post in posts" :key="post.title" >
    <PostCard :title="post.title" :created_at="post.created_at" :url="post.url" :likes_count="post.likes_count" />
    </v-col>
    </v-row>

  </SectionFrame>
</template>

<script>
import SectionFrame from "@/components/SectionFrame"
import PostCard from "@/components/PostCard"

export default {
  name: "Posts",
  data: () => ({
    id:"post",
    subtitle:"Posts",
    text:`はてなブログ・Qiitaでの最新記事です。`,
    posts: [
        {
            title:"hoge",
            url:"hosei",
            created_at:"11/4",
            likes_count:12
        },
        {
            title:"foo",
            url:"hosei",
            created_at:"11/2",
            likes_count:14
        },
    ]
  }),
  components: {
    SectionFrame,
    PostCard,
  }
}
</script>