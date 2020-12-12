<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld/>
  </div>
</template>

<script>

import HelloWorld from '@/components/container/HelloWorld.vue'

export default {
  name: "home",
  components: {
    HelloWorld,
  }
};
</script>