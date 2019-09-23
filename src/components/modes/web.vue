<template>
    <b-container  >
            <b-row v-for="re in $store.getters.webresults" >
                <b-col class="result p-2" cols="12" sm="12" md="10" lg="7" offset-lg="1">
                    <h5>{{re.title}}</h5>
                    <small>
                        <a :href="re.snip" target="_blank">
                        {{re.snip}}
                        </a>
                    </small><br>
                        <p>{{re.uri}}</p> 
                </b-col>
            </b-row>
        </b-container>
</template>
<script>
export default {

    props:{
        // res:Object
    },
    data(){
        return{
            

        }
    },
    watch:{
        modq(){
            this.fetch_data()
        }
    },
    methods:{
        fetch_data(){
      let query=this.$store.getters.query
      this.axios.get(`https://binding290.herokuapp.com/search/${query}`).then(response=>{
          this.res=response.data;
          this.hit1=false;
      }).catch((err)=>{
      this.hit1=false;
      })
    }
    },
    computed: {
  getquery() {
    //   if (this.$store.getters.isweb) {
          return this.$store.getters.query
    //   }
  }
}
    
}
</script>
<style scoped>
.result{
    border: 1px solid rgb(187, 186, 186);
    margin-top:15px;
    border-radius: 5px;
    padding-bottom: 0px !important;
}
</style>