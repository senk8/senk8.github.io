<template>
<v-container id="Contact">
  <Fade>
    <div class="block">
    </div>
  </Fade>
</v-container>
</template>

<script>
import Fade from "@/components/Fade"

export default {
  name: 'Contact',
  components:{
    Fade
  },
}
</script>


<style scoped>
.block {
  height: 1000px;
  background-color: red;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>