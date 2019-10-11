<template>
  <div class="container-fluid mycontainer" >
<!--start for loop -->
<!-- v-for="aud in $store.getters.audioresults" -->
    <div class="box"  v-for="aud in $store.getters.audioresults"><b-row><b-col cols="12" sm="12" md="" v-on:click="playd(aud.title,aud.artist)">
      <div class="mt-4">
        <b-card :img-src="aud.thumb" img-alt='thumb' img-left class="mb-3 myimage">
        <b-card-text>
          <b>{{aud.title}}</b><br>
          <small>{{aud.artist}}</small>
        </b-card-text>
        <b-btn>Play</b-btn>
        </b-card>
      </div></b-col>
    </b-row></div>
<!-- end for loop -->
  </div>
</template>
<script>
export default {
  data(){
      return{
      }
  },
methods:{
    playd(lin,artist){
      // var q=this.$store.getters.query
      // lin=lin.slice(0,50);
      // if(!lin.toLowerCase().includes(q.toLowerCase())){
      // lin=lin+' '+this.$store.getters.query
      // }
      // var newlink=lin.replace(`/`,'').replace(`/download.html`,'');
      // this.axios.get(`https://binding290.herokuapp.com/vids?q=${lin} by ${artist} lyrics`).then((response)=>{
        this.$emit("playd",`${lin} by ${artist} lyrics`)
      // })
    }
  }
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
</style>