<template>
  <div class="SkillCard">
    <v-card max-width="30%">
      <v-card-title>{{language}}</v-card-title>
      <v-card-text>
        <p>{{ descryption }}</p>
        <v-rating
          :value="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          readonly
        ></v-rating> 
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: ["language","rating","descryption"]
}
</script>
