<template>
  <v-container :id="id">
  <v-col>
  <v-subheader class="text-h3 my-4">{{ subtitle }}</v-subheader>
  </v-col>
  <v-col>
    <p class="text-center">{{ text }}</p>
  </v-col>
  <slot></slot>
  </v-container>
</template>

<script>
export default {
  name: "Section",
  props: {
    id:"",
    subtitle:"",
    text:"",
  },
}
</script>