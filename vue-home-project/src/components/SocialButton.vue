<template>
    <div class="SocialButton">
    <v-btn :href="url">
      <v-icon x-large color="green">{{ icon }}</v-icon>
    </v-btn> 
    </div>
</template>

<script>
export default {
  name: "SocialButton",
  props: ["url","icon"]
}
</script>
