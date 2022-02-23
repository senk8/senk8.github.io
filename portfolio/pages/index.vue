<template>
  <v-row>
    <div id="top" class="title">
      <v-col class="white--text text-center">
      <h1 class="welcome">Welcome to SenK's Portfolio!! </h1>
      </v-col>
    </div>
    <v-divider />

    <v-container>

        <!-- Aboutme -->
        <SectionFrame :id="sections.aboutme.id" :subtitle="sections.aboutme.subtitle" :text="sections.aboutme.text">
            <FadeIn> 
                <v-row cols="12">
                    <v-col 
                    align-self="center"
                    xs="12" 
                    md="4" 
                    offset-md="2" >
                    <v-img
                        src="img/prof.jpg"
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
        <v-divider />

        <!-- SkillSet -->
        <SectionFrame :id="sections.skillset.id" :subtitle="sections.skillset.subtitle" :text="sections.skillset.text">
            <v-sheet
            class="pa-12"
            color="white"
            >
                <v-row>
                    <v-col cols="12" md="6" v-for="(skill,index) in skillset" :key="index">
                        <FadeIn>
                            <SkillCard :description="skill.description" :language="skill.language" :icon_name="skill.icon_name"></SkillCard>
                        </FadeIn>
                    </v-col>
                </v-row>
            </v-sheet>
        </SectionFrame>
        <v-divider />

        <!-- Activities -->
        <SectionFrame :id="sections.activities.id" :subtitle="sections.activities.subtitle" :text="sections.activities.text">
            <v-timeline 
                class="pa-12" 
                :dense="$vuetify.breakpoint.smAndDown" 
                align-top
                v-for="(act,i) in activities" 
                :key="i"
            >
                <v-timeline-item
                :color="act.color"
                fill-dot
                :left="i%2==0"
                :right="i%2==1"
                >
                    <FadeIn>
                        <TimeCard :company="act.company" :position="act.position" :term="act.term" :description="act.description" />
                    </FadeIn>
                </v-timeline-item>
            </v-timeline>
        </SectionFrame>
        <v-divider />

        <!-- Posts -->
        <SectionFrame :id="sections.posts.id" :subtitle="sections.posts.subtitle" :text="sections.posts.text">
            <FadeIn> 
                <v-row >
                    <v-col cols="12" md="6" xs="12" v-for="post in posts" :key="post.title" >
                        <PostCard :title="post.title" :created_at="post.created_at" :url="post.url" :likes_count="post.likes_count" :tags="post.tags"/>
                    </v-col>
                </v-row>
            </FadeIn> 
        </SectionFrame>

    </v-container>
  </v-row>
</template>

<script>


export default {
    name: 'TopPage',
    data: () => ({
    }),
    async asyncData({ $axios }) {
	    const sections = await $axios.$get("/json/sections.json");
	    const profile = await $axios.$get("/json/profile.json");
	    const activities = await $axios.$get("/json/activities.json");
	    const skillset = await $axios.$get("/json/skillset.json");
	    const posts = await $axios.$get("https://qiita.com/api/v2/users/SenK/items?page=1&per_page=10");
        posts.forEach( post =>
            {post.created_at = new Date(post.created_at)}
        );
	    return {
		    posts: posts,
            sections: sections,
            profile: profile,
            activities: activities,
            skillset: skillset,
	    };
    }
}
</script>


<style scoped>
.title{
  width: 100%;
  height: 15%;
  background: #DCE35B;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #45B649, #DCE35B);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #45B649, #DCE35B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.welcome{
  margin:10% 0 10% 0;
}
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