<template>
  <v-app>

    <v-app-bar color="primary" dark app clipped-left>
      <v-toolbar-title>
        <router-link to="/" class="toolbar__top v-toolbar__content">NEM Authn Prototype</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-if="!$auth.isAuthenticated" @click="login">Log in</v-btn>
      <v-btn text v-if="$auth.isAuthenticated" @click="logout">Log out</v-btn>
      <v-btn text to="/signup">SignUp</v-btn>
      <v-btn text href="/enterprise" target="_blank">About</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
      <v-footer app>
        <div>ツイベガ君 & みやとも</div>
      </v-footer>
    </v-main>


  </v-app>

</template>

<script>
export default {
  data(){
    return{
      drawer: null
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
