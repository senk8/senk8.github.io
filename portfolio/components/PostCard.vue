<template>
    <v-card 
    flat 
    outlined 
    class="text-center">
      <v-card-text class="text-h5">
        {{ created_at.getFullYear() + "/" + (created_at.getMonth() + 1) +  "/" + created_at.getDate() }}
        <p><a :href="url" target="_blank">
        <font color="#007600">
        {{title}}
        </font>
        </a>
        </p>
      </v-card-text>

      <v-divider />

      <v-card-text>
        <v-chip 
        v-for="tag in tags" 
        :key="tag.name"
        class="ma-2"
        color="light-green"
        text-color="green"
        outlined
        >
           <div>
           {{tag.name}}
           </div>
        </v-chip>
      </v-card-text>

      <v-card-text>
        <v-icon>
          mdi-account-heart
        </v-icon>
        LGTM数:
        {{likes_count}}
      </v-card-text>

    </v-card>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    title:String,
    url:String,
    created_at:Date,
    likes_count:Number,
    tags:Array,
  }
}
</script>
