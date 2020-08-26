<template>
  <v-container id="Profile">
    <v-subheader>Profile</v-subheader>
    <v-col>
    <v-card max-width="30%">
      <v-card-title>Kaichi Sato</v-card-title>
      <v-card-text>
        <p class="h" v-for="profile in profiles">{{ profile }}</p>
    </v-card-text>
    </v-card>
    </v-col>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    profiles:["法政大学大学院修士一年","尾花研究室","マルチパーティ計算/プライバシー保護データマイニング"],
  }),
  methods:{
    linkByClick(i){
      if(i===0){

      }else if(i===1){

      }
    },
  },
}
</script>

<style scoped>
.block {
  height: 1000px;
  background-color: red;
}
</style>