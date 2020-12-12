<template>
  <div class="col-md-4 col-sm-6 co-xs-12 gal-item">
    <div class="box">
      <a href="#" data-toggle="modal" data-target="#1">
        <img v-bind:src="mosaicImgSrc" />
      </a>
      <div class="modal fade" id="1" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div class="modal-body">
              <img v-bind:src="mosaicImgSrc" />
            </div>
            <div class="col-md-12 description">
              <h4>{{imgName}} by {{imgBy}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mosaic',
  props: {
    imgSrc: String,
    imgName: String,
    imgBy: String
  }
};
</script>

<style lang="stylus" scoped>
</style>