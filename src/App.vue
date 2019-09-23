<template>
  <div id="app">

      <!-- header -->

    <div class="align-middle">
      <ab-header v-bind:hit1="hit1"  v-on:receive_query="fetch_data"></ab-header>
    </div>
    

      <!-- content -->

    <div class="results">
      <!-- <results v-bind:res="res"></results> -->
      <results v-bind:query="query"></results>
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
      query:"",
      res:[],
      hit1:false,
    }
  },
  methods:{
    fetch_data(query){
      this.query=query
      this.hit1=true;
      // this.axios.get(`https://binding290.herokuapp.com/search/${query}`).then(response=>{
      //     this.res=response.data;
      //     this.hit1=false;
      // }).catch((err)=>{
      // this.hit1=false;
      // })
    }
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