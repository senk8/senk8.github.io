<template>
      <v-card flat>
        <v-card-text 
        class="text-center text-md-h4 text-h6"
        >
        {{ term }}<br/>
        {{ name }}
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
import TimeCard from "@/components/TimeCard"

export default {
  name: "TimeCard",
  props: {
    name:"",
    term:"",
    description:""
  },
}
</script>

<style scoped>

</style>