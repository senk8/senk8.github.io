<template>
    <v-footer
    light
    padless
    >
    <v-card
      flat
      tile
      class="light-green white--text"
      min-width="100%"
    >
      <v-card-text class="text-center">
        <span class="mx-4" :key="i" v-for="(social,i) in socials" >
            <v-btn  icon :href="social.url">
                <v-icon color="white" x-large>{{ social.icon }}</v-icon>
            </v-btn>
        </span>
      </v-card-text>

      <v-card-text class="text-center white--text">
         <p>senk8421@gmail.com</p>
         <p><a href='https://qiita.com/SenK'>SenK - Qiita</a></p>
         <p><a href='https://zenn.dev/senk'>Senkの記事一覧 - Zenn</a></p>
         <p><a href='https://tenn.hateblo.jp/'>暗号勉強会 - はてなブログ</a></p>
         <p><a href='https://atcoder.jp/users/Tenn'>Tenn - AtCoder</a></p>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-text class="text-center white--text">
        &copy; 2020 Senk
      </v-card-text>

    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    socials:[{icon:"mdi-twitter",url:"https://mobile.twitter.com/enkanakoi"},
             {icon:"mdi-github",url:"https://github.com/senk8"}
             ],
  }),
  methods:{
  },
}
</script>

<style scoped>
a:link {
  text-decoration: none;
}

a:hover {
  color: white;
  text-decoration: none;
}
</style>