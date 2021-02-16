<template>
    <v-container id="links">
    <v-subheader>Link</v-subheader>
    <v-col cols="12" offset-md="6">
      <span :key="i" v-for="(social,i) in socials" >
        <SocialButton :icon="social.icon" :url="social.url"></SocialButton>
      </span>
      <!--
      <v-img
        src="@/assets/favicon.png"
        max-width="80"
        max-height="80"
      >
      </v-img>
      <v-img
        src="@/assets/hatenablog-logo.svg"
        max-width="100"
        max-height="100"
      >
      </v-img>
      -->
    </v-col>

    </v-container>
</template>

<script>
import SocialButton from '@/components/SocialButton'

export default {
  name: 'Links',
  data: () => ({
    socials:[{icon:"mdi-twitter",url:"https://mobile.twitter.com/enkanakoi"},
             {icon:"mdi-github",url:"https://github.com/senk8"}
             ],
  }),
  components:{
    SocialButton,
  },
  methods:{
  },
}
</script>

