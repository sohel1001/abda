<template>
  <div><div class="container-fluid mycontainer"  v-for="vid in $store.getters.videoresults">
      <div class="box">
        <b-row><b-col cols="12" sm="12" md="">
        <div class="mt-4">
          <b-card img-left class="mb-3 myimage">
            <b-row><b-col cols="12" md="6">
                <div class="vidbox">
                  <LazyYoutubeVideo  :url="`https://www.youtube.com/watch?v=${vid.id.videoId}`" />
                </div>
                </b-col>
                <b-col cols="12" md="5">
                  <p class="time">{{vid.snippet.title}}</p>
                </b-col>
            </b-row>
          </b-card>
          </div>
          </b-col>
        </b-row></div>
    </div>
  </div>
</template>
<script>
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
export default {
  components:{
    LazyYoutubeVideo
  },
  data(){return{
  }}
}
</script>

<style>
.card-img-left {
    height: 100px;
}
.container-fluid, .mycontainer{
  max-width:766px !important;
}
.myimage{
  padding: 10px;
  border-radius: 15px;

}
.card.mb-3.myimage.flex-row{
  min-height: 112px;
height: auto;
margin-bottom: -1rem !important
}
.card-body{
  padding: 0 !important;
  margin-left: 15px;
}
.card-text{
  font-size: 20px !important;
  margin-top: -5px !important;
  color: #4b4848;
}
.time,.version{margin-bottom: -0.5rem;}
.btn.btn-secondary {
    position: absolute;
    right: 5px;
    margin-left: -50px;
    bottom: 40px
}
.time,.version,.dwnz{color: rgb(103, 103, 105)}
.dwnz{
  position: absolute;
    right: auto;
    right: 5px;
    bottom: -1px
}
.version{
  padding-top: 5px;
}
.vidbox{
  border-radius: 10px

}.y-video__inner {
    background: transparent;
    background: white;
}
.y-video__media.y-video__media--type--img {
    border-radius: 3px;
    background: transparent;
    width: 285px;
}
.y-video__embed, .y-video__media {
    position: absolute;
    top: 0;
    left: 0;
    border-width: 0;
    width: 285px;
}
.y-video {

    width: 285px;

}
.col-12 {
    padding: 1px !important;
}
</style>