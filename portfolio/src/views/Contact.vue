<template>
<SectionFrame :id="id" :subtitle="subtitle" :text="text">
  <v-sheet
    class="pa-12"
    color="grey lighten-3"
  >
  <v-card color="grey lighten-3" flat>
    <v-col>
    </v-col>
    <v-col>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
    <v-text-field
      label="Affiliation"
      prepend-icon="mdi-map-marker"
    ></v-text-field>
    <v-text-field
      label="Your Name"
      prepend-icon="mdi-map-marker"
    ></v-text-field>
     <v-text-field
      label="E-mail"
      prepend-icon="mdi-map-marker"
    ></v-text-field>
    <v-text-field
      label="TEL"
      prepend-icon="mdi-map-marker"
    ></v-text-field>
    <v-col>
    <v-textarea
      name="input-7-1"
      filled
      v-model="message"
      label="Content"
      auto-grow
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>
    </v-col>
    <v-col class="text-center">
    <v-btn class="mr-4">submit</v-btn>
    <v-btn>clear</v-btn>
    </v-col>
    </v-form>
    </v-col>
  </v-card>
  </v-sheet>
</SectionFrame>
</template>

<script>
import FadeIn from "@/components/FadeIn"
import SectionFrame from "@/components/SectionFrame"

export default {
  name: 'Contact',
  data: () => ({
    id:"contact",
    subtitle:"Contact",
    text:"ご連絡がございましたら、下記フォームよりお願いいたします。",
  }),
  components:{
    FadeIn,
    SectionFrame
  },
}
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>