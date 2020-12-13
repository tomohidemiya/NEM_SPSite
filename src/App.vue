<template>
  <v-app>

    <v-app-bar color="primary" dark app clipped-left>
      <v-toolbar-title>
        <router-link to="/" class="toolbar__top v-toolbar__content">NEM Authn Prototype</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to='/'>Home</v-btn>
      <v-btn text v-if="!$auth.isAuthenticated" @click="login">Log in</v-btn>
      <v-btn text v-if="$auth.isAuthenticated" @click="logout">Log out</v-btn>
      <v-btn text to="/signup">SignUp</v-btn>
      <v-btn text href="/enterprise" target="_blank">About</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <loading v-show="loading" />
        <router-view v-show="!loading" />
      </v-container>
      <v-footer app>
        <div style="margin: 0 auto;">ツイベガ君 & みやとも</div>
      </v-footer>
    </v-main>
  </v-app>

</template>

<script>

import Loading from './components/container/Loading.vue';

export default {
  data(){
    return{
      drawer: null,
      loading: false,
      mosaicImgUrls: [],
    }
  },

  watch: {
    '$auth.user': {
      immediate: true,
      handler: async function (val) {
        if (val && this.$auth.isAuthenticated) {
          this.loading = true;
          const gotMosaics = [];
          const promises = [];
          try {
            const namespaces = await this.$nem.getOwnedMosaics(this.$auth.user.nickname);
            for (const ns of namespaces) {
              if (gotMosaics.includes(ns.mosaicId.namespaceId)) {
                gotMosaics.push(ns.mosaicId.namespaceId);
                promises.push(this.$nem.getMosaicDetail(ns.mosaicId.namespaceId));
              }
            }
            const mosaics = await Promise.all(promises);
            this.mosaicImgUrls = mosaics.filter(i => i.imageUrl).map(i => i.imageUrl);

          } catch(e) {
            throw new Error(e)
          } finally {
            this.loading = false;
          }
        }
      }
    },
    mosaicImgUrls: {
      immediate: true,
      handler: async function () {
        console.log(this.mosaicImgUrls)
      }
    }
  },

  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin + '/' + window.location.pathname.split('/')[1]
      });
    }
  },
  components: {
    Loading,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.toolbar__top.v-toolbar__content {
  color: #fff;
  text-decoration: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
