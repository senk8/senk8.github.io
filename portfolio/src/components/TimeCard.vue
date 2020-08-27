<template>
      <v-card flat>
        <v-card-title class="white--text light-green lighten-1">
          <h3 class="display-1 font-weight-light">[{{term}}] {{ name }}</h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
                {{ descryption }} 
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
    descryption:""
  },
}
</script>

<style scoped>
.card-desc{
    font-size: 10px;
    color:#a6f183;
}

</style>