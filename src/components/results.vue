<template>
    <div class="container"> 
        <div>
  <b-nav tabs fill>
    <b-nav-item v-if="!$store.getters.isweb"  @click="setweb()">w</b-nav-item>
    <b-nav-item v-if="$store.getters.isweb" active>w</b-nav-item>
    <b-nav-item v-if="!$store.getters.isimg" @click="setimage()">i</b-nav-item>
    <b-nav-item  v-if="$store.getters.isimg" active>i</b-nav-item>
    <b-nav-item v-if="!$store.getters.isvid" @click="setvideo()">v</b-nav-item>
    <b-nav-item v-if="$store.getters.isvid" active>v</b-nav-item>
    <b-nav-item v-if="!$store.getters.isaud" @click="setaudio()">a</b-nav-item>
    <b-nav-item v-if="$store.getters.isaud" active>a</b-nav-item>
    <b-nav-item v-if="!$store.getters.isapp" @click="setapp()">A</b-nav-item>
    <b-nav-item v-if="$store.getters.isapp" active>A</b-nav-item>
  </b-nav>
</div>


                    <!-- results -->


        <keep-alive>
        <courosel v-if="$store.getters.isimg"></courosel>
        <abweb v-if="$store.getters.isweb"></abweb>
<!-- :res="res" -->
        </keep-alive>
        <!-- this is result box where all results will show -->
    </div>
</template>
<script>
import web from './modes/web'
import courosel from './modes/courosel'
export default {
    components:{
        "abweb":web,
        courosel
    },
    props:{
        // res:Object,
        query:String
    },
    data(){
        return{
            webquery:'',
            imagequery:'',
            videoquery:'',
            audioquery:'',
            appquery:''
        }
    },
    methods:{
        setmode(){
            this.$store.commit('modweb',false);
            this.$store.commit('modimg',false);
            this.$store.commit('modvid',false);
            this.$store.commit('modaud',false);
            this.$store.commit('modapp',false);
            // return true
        },
        setweb(){  this.setmode(); this.$store.commit('modweb',"true")},
        setimage(){this.setmode(); this.$store.commit('modimg',"true")},
        setvideo(){this.setmode(); this.$store.commit('modvid',"true")},
        setaudio(){this.setmode(); this.$store.commit('modaud',"true")},
        setapp(){  this.setmode(); this.$store.commit('modapp',"true")},
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