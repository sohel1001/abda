<template>
  <div class="container-fluid mycontainer">
    <div class="box" v-for="app in $store.getters.appresults"><b-row><b-col cols="12" sm="12" md="">
      <div class="mt-4">
        <b-card :img-src="app.icon" img-alt="Card image" img-left class="mb-3 myimage">
        <b-card-text>
          <b>{{app.name}}</b>
        </b-card-text>
        <!-- <p class="version">updated on</p> -->
        <p class="time">{{app.updated.slice(0,10)}}</p>
        <b-btn> <a :href="app.file.path" style="color:white" >Get</a></b-btn>
        <p class="dwnz">{{(app.file.filesize/1e+6).toFixed(2)}}MB</p>
        </b-card>
      </div></b-col>
    </b-row></div>
  </div>
</template>
<script>
export default {
}
</script>
<style>
.card-img-left {
    height: 70px;
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