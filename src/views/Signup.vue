<template>
  <div class="signup">
    <div>
      <QRCode :qrSrc="hash" />
    </div>
    <v-btn
      @click="
        $auth.signup('1234567890123456789012345678901234567890', '3810Moh!de')
      "
      >サインアップ</v-btn
    >
  </div>
</template>

<script>
import QRCode from "@/components/presantation/QRCode.vue";
import { v4 } from "uuid";

export default {
  name: "signup",
  components: {
    QRCode,
  },
  computed: {
    hash: function () {
      const hash = {
        v: 2,
        type: 2,
        data: {
          addr: 'NASBB7-5LTFBJ-2J7ZGU-EE276C-ZZUTMZ-6VEZPV-PBLP',
          amount: 0,
          msg: `signup: ${v4()}`,
        },
      };
      console.log(encodeURI(JSON.stringify(hash)))
      return encodeURI(JSON.stringify(hash));
    },
  },
};
</script>