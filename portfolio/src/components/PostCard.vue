<template>
    <v-card 
    flat 
    outlined 
    class="text-center">
      <v-card-text class="text-h4">
      {{ title }}
      </v-card-text>
      <v-divider />
      <v-card-text>
        <p>{{ created_at }}</p>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    title:String,
    url:String,
    created_at:String,
    likes_count:Number,
  }
}
</script>
