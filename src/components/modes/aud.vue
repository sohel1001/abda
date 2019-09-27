<template>
  <div class="container-fluid mycontainer" >

<!-- for loop -->
<!-- v-for="aud in $store.getters.audioresults" -->
    <div class="box"  v-for="aud in $store.getters.audioresults"><b-row><b-col cols="12" sm="12" md="" v-on:click="playd(aud.uri)">
      <div class="mt-4">
        <b-card :img-src="'https://www.pagalworld.name'+aud.snip" img-alt='thumb' img-left class="mb-3 myimage">
        <b-card-text>
          <b>{{aud.title}}</b>
        </b-card-text>
        <b-btn>Get</b-btn>
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
          dummy:'https://www.pagalworld.name/img/default_mp3.png'

        }
    },
methods:{
    playd(lin){
      var newlink=lin.replace(`/`,'').replace(`/download.html`,'');
      this.axios.get(`http://binding290.herokuapp.com/dwn?link=${newlink}`).then((response)=>{

        this.$emit("playd",response.data)
      })
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