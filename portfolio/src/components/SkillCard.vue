<template>
    <v-card 
    flat 
    outlined 
    class="text-center">
      <v-card-text class="text-h4">
      <v-icon>{{ icon_name }}</v-icon>
      {{language}}
      </v-card-text>
      <v-divider />
      <v-card-text>
        <p>{{ description }}</p>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    language:"",
    description:"",
    icon_name:"",
  }
}
</script>
