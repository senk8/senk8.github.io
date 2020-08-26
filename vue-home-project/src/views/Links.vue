<template>
    <v-container id="Links">
    <v-subheader>Link</v-subheader>
    <v-col>
      <span :key="i" v-for="(social,i) in socials" >
        <SocialButton :icon="social.icon" :url="social.url"></SocialButton>
      </span>
    </v-col>
    <v-divider></v-divider>

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

