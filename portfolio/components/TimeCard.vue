<template>
      <v-card flat>
        <v-card-text 
        class="text-center text-md-h4 text-h6"
        >
        <p class="text-md-h6">{{ term }}</p>
        <p class="test-md-h4">{{ company }}</p>
        <p class="text-md-h5">{{ position }}</p>
        </v-card-text>

        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="text-center text-md-h6 text-caption"
            >
                {{ description }} 
            </v-col>
          </v-row>
        </v-container>
      </v-card>
</template>

<script>

export default {
  name: "TimeCard",
  props: {
    company:"",
    position:"",
    term:"",
    description:""
  },
}
</script>

<style scoped>

</style>