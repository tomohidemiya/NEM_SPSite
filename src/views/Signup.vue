<template>
  <div class="signup">
    <div>
      <QRCode :qrSrc="hash" />
    </div>
    <v-btn
      :disabled="disabledSubmit"
      @click="signup(addr)"
      >サインアップ</v-btn
    >
  </div>
</template>

<script>
import QRCode from "@/components/presantation/QRCode.vue";
import { v4 } from "uuid";

export default {
  name: "signup",
  data() {
    return {
      loading: false,
      addr: '',
      timerOn: false,
      timerObj: null,
    };
  },
  components: {
    QRCode,
  },

  methods: {
    signup: async function(addr) {
      this.loading = true;
      try {
        const account = await this.$nem.getAccountInfo(addr.replaceAll('-', ''));
        console.log(account)
        await this.$auth.signup(addr.replaceAll('-', ''), account.account.publicKey);

      } finally {
        this.loading = false;
      }
    },
    // start: function () {
    //   const self = this;

    //   const baseUrl = "https://snnode.supernode.me:7891";
    //   const addr = "NASBB7-5LTFBJ-2J7ZGU-EE276C-ZZUTMZ-6VEZPV-PBLP";

    //   const hex2msg = (payload) => {
    //     const hex = payload.toString();
    //     let msg = "";
    //     for (let i = 0; i < hex.length; i += 2)
    //       msg += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    //     return msg;
    //   };

    //   const getSender = function (signer) {
    //     return axios.get(
    //       baseUrl + "/account/get/from-public-key?publicKey=" + signer
    //     );
    //   };

    //   this.timerObj = setInterval(function () {
    //     axios
    //       .get(
    //         baseUrl +
    //           "/account/unconfirmedTransactions?address=" +
    //           addr.replaceAll("-", "")
    //       )
    //       .then(function (res) {
    //         const target = res.data.data.filter(function (item) {
    //           try {
    //             const message = hex2msg(item.transaction.message.payload);
    //             return decodeURIComponent(escape(message)) === self.hash;
    //           } catch (e) {
    //             return false;
    //           }
    //         });
    //         if (target.length > 0) {
    //           let pubKey = "";
    //           getSender(target[0].transaction.signer).then(function (
    //             senderRes
    //           ) {
    //             console.log(senderRes);
    //             self.$auth.signup(
    //               senderRes.data.account.address,
    //               target[0].transaction.signer
    //             );
    //           });

    //           self.stop();
    //         }
    //       });
    //   }, 1000);
    //   this.timerOn = true;
    // },
    // stop: function () {
    //   clearInterval(this.timerObj);
    //   this.timerOn = false;
    // },
  },

  computed: {
    disabledSubmit: function() {
      return this.addr.length < 40
    },
    hash: function () {
      const hash = {
        v: 2,
        type: 2,
        data: {
          addr: "NASBB75LTFBJ2J7ZGUEE276CZZUTMZ6VEZPVPBLP",
          amount: 0,
          msg: `signup: ${v4()}`,
        },
      };
      console.log(encodeURI(JSON.stringify(hash)));
      return encodeURI(JSON.stringify(hash));
    },
  },
};
</script>