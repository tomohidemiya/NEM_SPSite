<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :data="data" />
  </div>
</template>

<script>

import HelloWorld from '@/components/container/HelloWorld.vue'

export default {
  name: "home",
  props: {
    data: {
      type: Array,
    }
  },
  components: {
    HelloWorld,
  }
};
</script>