<template>
  <div id="app">
    <section id="photos">
      <div v-for="(im, i) in $store.getters.imageresults">
        <img class="image"  :src="im.image" @click="onClick(i)">
        <vue-gallery-slideshow v-if="view" :images="getrawimages" :index="index" @close="index = null"></vue-gallery-slideshow>
      </div>
    </section>
  </div>
</template>
<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
export default {
  components: {
      VueGallerySlideshow
    },
    data(){
      return{
        view:false,
        selected:[],
        proxyimages:[],
        index:0
        }},
  computed:{
      getrawimages(){
        let setraw=[];
        for(let i=0;i<this.$store.getters.imageresults.length;i++){
          setraw.push(this.$store.getters.imageresults[i].image)
        }
        return setraw
      }
    },
  methods:{
    onClick(i) {
        this.index = i;
        this.view=true
      },
  },
}
</script>
<style>
.sqre.custom-control.custom-checkbox {
    position: absolute;
}
body {
  font-family: sans-serif;
}

.image {
  width: 100px;
  height: 100px;
  background-size: contain;
  cursor: pointer;
  border-radius: 5px;
}

#photos{
  /* Prevent vertical gaps */
  line-height: 0;
  -webkit-column-count: 5;
  -webkit-column-gap:   0px;
  -moz-column-count:    5;
  -moz-column-gap:      0px;
  column-count:         5;
  column-gap:           0px;
}
#photos .image{
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
}
@media (max-width: 1200px) {
  #photos {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
@media (max-width: 1000px) {
  #photos {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
@media (max-width: 800px) {
  #photos {
  -moz-column-count:    3;
  -webkit-column-count: 3;
  column-count:         3;
  }
}
@media (max-width: 400px) {
  #photos {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}
</style>
