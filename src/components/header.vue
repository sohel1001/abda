<template>
  <b-container fluid>
    <!-- logo -->
    <b-row align-h="center" class="mb-4">
      <b-col cols="3" sm="4" lg="5" xl="4">
        <!-- <h1 v-if="!result">ab</h1> -->
      <!-- <h1 class="display-4">a</h1><span class="mt-3 "><h1 class="display-4">b</h1></span>  -->
      </b-col>
    </b-row>

    <!-- search bar -->

    <b-row no-gutters>
      <b-col cols="1" sm="1" md="1" offset-sm="1" lg="1"  class="pr-5 logo">
          <img src="../assets/logoto.png"  height="30px" alt="abda">
      </b-col>

          <!-- input bar -->

      <b-col cols="7" sm="8" md="6" lg="5" xl="5" @keyup.enter="send_query()">
          <!-- <b-form-input placeholder="Type to Search..." v-model="query" @keyup.enter="send_query()"  datalist="#mylist" max=5 autofocus ></b-form-input>
            <ul id="mylist">
                <li v-for="suggest in suggests">{{suggest}}</li>
            </ul>
             -->
             <vue-bootstrap-typeahead @keyup.enter="send_query()" max=5 autofocus
  v-model="query"
  :data="suggests"
/>
      </b-col>

          <!-- button  -->

      <b-col cols="2" sm="1">
          <b-btn variant="outline-secondary" @click="send_query()">O.</b-btn>
      </b-col>
    </b-row>
    <b-row >
      <b-col cols="7" sm="8" md="6" lg="5" xl="5" offset="5" class="mt-3" >
        <div v-if="$store.getters.loading">
            <b-spinner type="grow" label="Loading..."></b-spinner>
        </div>
      </b-col>
    </b-row>


  </b-container>
</template>

<script>                         //script section
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
export default {
  components:{VueBootstrapTypeahead},
  data(){
    return{
      result:true,
      query:'',
      res:'',
      suggests:[],
    }
  },
  watch:{
    query(){
      this.getSug()
    }
  },

      // methods

  methods:{
    // query goes towards app

    send_query(){
      this.$store.commit('setquery',this.query)
      if(this.$store.getters.isweb){this.$emit("fetchweb",this.query)}
      else if(this.$store.getters.isimg){this.$emit("fetchimg",this.query)}
      else if(this.$store.getters.isvid){this.$emit("fetchvid",this.query)}
      else if(this.$store.getters.isaud){this.$emit("fetchaud",this.query)}
      else if(this.$store.getters.isapp){this.$emit("fetchapp",this.query)}
    },


    






































    // here suggetions will fetch

    getSug(){
      if(this.query.length!==0){
        this.axios
        .get(`https://sug18.herokuapp.com/suggest/${this.query}`).then((response)=>{
          this.suggests=this.suggests.concat(response.data);
          this.suggests = [...new Set(this.suggests)];
            }).catch(()=>{})
                }
        }
  },
}
</script>
<style scoped>
input::-webkit-calendar-picker-indicator {
	display: none;
}
@media all and (min-width: 1024px){
  pr-5 logo col-sm-1 col-md-1 col-lg-1 offset-sm-1 col-1{
    margin-left: 50rem;
    background: black
  }
}
</style>