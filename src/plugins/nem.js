import Vue from "vue";
import * as axios from "axios";

let instance;
const nisBaseUrl = "https://snnode.supernode.me:7891";
const oaImageBaseUrl =
  "https://s3.amazonaws.com/open-apostille-nemgallary-production/";

export const getInstance = () => instance;

export const hex2msg = function(hex) {
  let msg = "";
  for (let i = 0; i < hex.length; i += 2)
    msg += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return msg;
};

export const useNem = () => {
  if (instance) return instance;

  instance = new Vue({
    methods: {
      async getAccountInfo(address) {
        return axios
          .get(`${nisBaseUrl}/account/get?address=${address}`)
          .then((res) => {
            return res.data.data;
          });
      },
      async getOwnedMosaics(address) {
        return axios
          .get(`${nisBaseUrl}/account/mosaic/owned?address=${address}`)
          .then((res) => {
            return res.data.data.filter(
              (item) =>
                item.quantity > 0 &&
                item.mosaicId.namespaceId !== "nem" &&
                item.mosaicId.name !== "xem"
            );
          });
      },

      async getMosaicDetail(namespace) {
        return axios
          .get(
            `${nisBaseUrl}/namespace/mosaic/definition/page?pageSize=50&namespace=${namespace}`
          )
          .then((res) => {
            res.data.data = res.data.data.map((item) => {
              item.imageUrl = item.mosaic.description.startsWith("oa:")
                ? oaImageBaseUrl + item.mosaic.description.slice(3) + ".jpg"
                : "";
              return item;
            });
            return res.data.data;
          });
      },
    },
  });

  return instance;
};

// Create a simple Vue plugin to expose the wrapper object throughout the application
export const NemPlugin = {
  install(Vue) {
    Vue.prototype.$nem = useNem();
  },
};
