<template>
    <b-container  >
            <b-row v-for="re in $store.getters.webresults" >
                <b-col class="result p-2" cols="12" sm="12" md="10" lg="7" offset-lg="1" style="padding: .5rem !important;">
                        <a :href="re.snip" target="_blank" style="text-decoration:none">
                    <h5>{{re.title}}</h5>
                    <small>
                        <!-- <img :src="re.snip+'/favicon.ico'" alt=""> -->
                        {{re.snip}}
                    </small><br>
                        <p>{{re.uri}}</p>
                        </a>
                </b-col>
            </b-row>
        </b-container>
</template>
<script>
export default {
    data(){
        return{}},
    watch:{
        modq(){
            this.fetch_data()
        }},
    methods:{
        fetch_data(){
        let query=this.$store.getters.query
        this.axios.get(`https://binding290.herokuapp.com/search/${query}`).then(response=>{
            this.res=response.data;
            this.hit1=false;
        }).catch(()=>{
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
p {
    font-size: .9rem;
    margin-bottom: 0.3rem;
    color:rgb(32, 31, 31)
}
h5, .h5 {
    font-size: 1.1rem;
    margin-bottom: auto;
    color:rgb(32, 31, 31);
    letter-spacing: 0.02rem

}
.result.p-2.col-sm-12.col-md-10.col-lg-7.offset-lg-1.col-12 {
    margin-top:0.3rem;
}

</style>