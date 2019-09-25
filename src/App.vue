<template>
  <div id="app">

      <!-- header -->

    <div class="align-middle">

      <ab-header @fetchweb="checkwebq()" @fetchimg="checkimgq()" @fetchapp="checkappq()" @fetchvid="checkvidq()"></ab-header>

    </div>

      <!-- content -->

    <div class="results" >

      <results @fetchweb="checkwebq()" @fetchimg="checkimgq()" @fetchapp="checkappq()" @fetchvid="checkvidq()"></results>

    </div>

      <!-- footer -->

<div class=".footer">

<ab-footer></ab-footer>

</div>
  </div>
</template>
<script>
import results from './components/results'
import footer from './components/footer'
import header from './components/header'
export default {
  components:{
    "ab-header":header,
    "ab-footer":footer,
    results
  },
  data(){
    return{
      q:'',
      imgq:'',
      webq:'',
      vidq:'',
      audq:'',
      appq:'',
    }
  },

  methods:{


  checkwebq(){ if(this.webq!==this.$store.getters.query || this.$store.getters.webresults.length===0){this.webq=this.$store.getters.query;this.fetchweb()}},
  checkimgq(){ if(this.imgq!==this.$store.getters.query || this.$store.getters.imageresults.length===0){this.imgq=this.$store.getters.query;this.fetchimg()}},
  checkvidq(){ if(this.vidq!==this.$store.getters.query || this.$store.getters.videoresults.length===0){this.vidq=this.$store.getters.query;this.fetchvideo()}},
  checkaudq(){ if(this.audq!==this.$store.getters.query || this.$store.getters.audioresults.length===0){this.audq=this.$store.getters.query;this.fetchaudio()}},
  checkappq(){ if(this.appq!==this.$store.getters.query || this.$store.getters.appresults.length===0){this.appq=this.$store.getters.query;this.fetchapp()}},














              // fetch web results

    fetchweb(){
      this.$store.commit('modload',true);
      this.axios.get(`https://binding290.herokuapp.com/search?q=${this.$store.getters.query}&pn=0`).then(response=>{
          this.$store.commit('saveweb',response.data);
      }).catch(()=>{
        this.$store.commit('modload',false);
      })
    },


// fetch image results


    fetchimg(){
       this.$store.commit('modload',true);
      this.axios.get(`https://binding290.herokuapp.com/images?q=${this.$store.getters.query}&pn=0`).then(response=>{
          this.$store.commit('saveimg',response.data);
      }).catch(()=>{
        this.$store.commit('modload',false);
      })
    },



// fetch video results

    fetchvideo(){
      this.$store.commit('modload',true);
      this.axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAq4ALvqOE08oCXDMyHy9XdbvpNsuuZrpA&q=${this.$store.getters.query}&maxResults=25`).then(response=>{
          this.$store.commit('savevid',response.data.items);
      }).catch(()=>{
        this.$store.commit('modload',false);
      })
    },

// fetch audio results


    fetchaudio(){},


// fetch apps results


    fetchapp(){
      this.$store.commit('modload',true);
      this.axios.get(`http://ws75.aptoide.com/api/7/apps/search?query=${this.$store.getters.query}`).then(response=>{
          this.$store.commit('saveapp',response.data.datalist.list);
      }).catch(()=>{
        this.$store.commit('modload',false);
      })
    },









  }
}
</script>
<style>
.container-fluid{
  height: 100%;
}
#app{
  overflow-x: hidden;
}
.panel{
  position: fixed;
  right: -1%;
  top:40%;
}
</style>