<template>
  <canvas id="canvas" />
</template>

<script>
import * as qrcode from 'qrcode'

export default {
  name: 'QRCode',
  props: {
    qrSrc: String
  },
  mounted: function() {
    console.log(this.qrSrc);
    qrcode.toCanvas(this.$el, this.qrSrc, {width: 240}, function (error) {
      if (error) console.error(error)
    })
  }
};
</script>

<style lang="stylus" scoped>
</style>