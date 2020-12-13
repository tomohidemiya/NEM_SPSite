<template>
  <div class="hello">
    <h1>Welcome to NEM Authn</h1>
    <p>
      このサイトはNEMで認証を行うNEM Authnのプロトタイプサイトです。
    </p>
    <h3>Summary</h3>
    <div>
      NEM AuthnはNEMの請求書によるうんぬんかんぬん。ピーヒャララ
    </div>
    
    <div v-if="data.length > 0" style="margin-top: 16px">
      <h3>Authticated Result</h3>

      <v-row>
        <v-col
          v-for="(datum, i) in data" :key="i" 
          class="d-flex child-flex"
          cols="6" sm="6" md="6" lg="3" xl="3" 
        >
          <v-img
            :src="datum.imageUrl"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>



      <!-- <span v-for="datum in data" :key="datum.imgSrc" >
        <Mosaic :imgSrc="datum.imageUrl" :imgName="datum.name" :imgBy="datum.namespaceId" />
      </span> -->
    </div>

    <h3>Contact</h3>
    <ul>
      <li><a href="https://twitter.com/tuibegakun" target="_blank" rel="noopener">ツイベガ君</a></li>
      <li><a href="https://twitter.com/miyatomo_38" target="_blank" rel="noopener">みやとも</a></li>
    </ul>
  </div>
</template>

<script>
// import Mosaic from '@/components/presantation/Mosaic.vue'

export default {
  name: 'HelloWorld',
  props: {
    data: {
      type: Array,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
