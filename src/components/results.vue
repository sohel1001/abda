<template>
    <div class="container"> 
        <!-- this is result box where all results will show -->
        <b-container  >
            <b-row v-for="re in res">
                <b-col class="result p-2" cols="12" sm="12" md="10" lg="7" offset-lg="1" >
                    <h5>{{re.title}}</h5>
                    <small>
                        <a href="#">
                        {{re.snip}}
                        </a>
                    </small><br>
                        <p>{{re.uri}}</p> 
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    props:{
        res:Object,
    },
    data(){
        return{
        }
    },
    methods:{
        getdata(){
        }
    }
}
</script>
<style>

.result{
    border: 1px solid rgb(187, 186, 186);
    margin-top:15px;
    border-radius: 5px;
    padding-bottom: 0px !important;
}
    
</style>