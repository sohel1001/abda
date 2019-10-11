<template>
    <div class="container"> 
        <div>
  <b-nav tabs fill>
    <b-nav-item v-if="!$store.getters.isweb"  @click="setweb()"><img src="./../assets/svg/001-language.svg" height="20px" width="20px" alt="web tab"></b-nav-item>
    <b-nav-item v-if="$store.getters.isweb" active><img src="./../assets/svg/002-global.svg" height="20px" width="20px" alt="web tab"></b-nav-item>
    <b-nav-item v-if="!$store.getters.isimg" @click="setimage()"><img src="./../assets/svg/003-picture.svg" height="20px" width="20px" alt="image tab"></b-nav-item>
    <b-nav-item  v-if="$store.getters.isimg" active><img src="./../assets/svg/004-frame-landscape.svg" height="20px" width="20px" alt="image tab"></b-nav-item>
    <b-nav-item v-if="!$store.getters.isvid" @click="setvideo()"><img src="./../assets/svg/010-play-button-1.svg" height="20px" width="20px" alt="video tab"></b-nav-item>
    <b-nav-item v-if="$store.getters.isvid" active><img src="./../assets/svg/009-play-button.svg" height="20px" width="20px" alt="video tab"></b-nav-item>
    <b-nav-item v-if="!$store.getters.isaud" @click="setaudio()"><img src="./../assets/svg/006-music-player-1.svg" height="20px" width="20px" alt="music tab"></b-nav-item>
    <b-nav-item v-if="$store.getters.isaud" active><img src="./../assets/svg/005-music-player.svg" height="20px" width="20px" alt="music tab"></b-nav-item>
    <b-nav-item v-if="!$store.getters.isapp" @click="setapp()"><img src="./../assets/svg/008-android-1.svg" height="20px" width="20px" alt="app tab"></b-nav-item>
    <b-nav-item v-if="$store.getters.isapp" active><img src="./../assets/svg/007-android.svg" height="20px" width="20px" alt="app tab"></b-nav-item>
  </b-nav>
</div>
                    <!-- results -->
        <keep-alive>
        <abweb v-if="$store.getters.isweb"></abweb>
        <courosel v-if="$store.getters.isimg"></courosel>
        <vid v-if="$store.getters.isvid"></vid>
        <audi v-if="$store.getters.isaud"></audi>
        <apps v-if="$store.getters.isapp"></apps>
        </keep-alive>



<!-- next page button -->

        <center>
            <b-row v-if="$store.getters.webresults && $store.getters.isweb || $store.getters.imageresults &&$store.getters.isimg">
                <b-col cols="12" sm="12" md="10" lg="7" offset-lg="1">
            <div class="pnbtn" @click="setpn()"><img src="./../assets/svg/011-expand-button.svg" height="20px" width="20px" alt="More results"></div>
                </b-col></b-row>
            </center>
{{scrollq}}
        <!-- this is result box where all results will show -->
    </div>
</template>
<script>
import web from './modes/web'
import courosel from './modes/courosel'
import apps from './modes/apps'
import vid from './modes/vid'
import audi from './modes/audi'
export default {
    components:{
        "abweb":web,
        courosel,
        apps,
        vid,
        audi
    },
    props:{
        query:String
    },
    data(){
        return{
            webquery:'',
            imagequery:'',
            videoquery:'',
            audioquery:'',
            appquery:'',
            scrollq:''
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
        setweb(){  this.setmode(); this.$store.commit('modweb',"true");if(this.$store.getters.query.length>0){this.$emit("fetchweb")}},
        setimage(){this.setmode(); this.$store.commit('modimg',"true");if(this.$store.getters.query.length>0){this.$emit("fetchimg")}},
        setvideo(){this.setmode(); this.$store.commit('modvid',"true");if(this.$store.getters.query.length>0){this.$emit("fetchvid")}},
        setaudio(){this.setmode(); this.$store.commit('modaud',"true");if(this.$store.getters.query.length>0){this.$emit("fetchaud")}},
        setapp(){  this.setmode(); this.$store.commit('modapp',"true");if(this.$store.getters.query.length>0){this.$emit("fetchapp")}},

        setpn(){
      if(this.$store.getters.isweb && this.$store.getters.webpl){this.$store.commit('webpl',0); this.$store.commit('webpn'); this.$emit("fetchweb")}
      else if(this.$store.getters.isimg && this.$store.getters.webpl){this.$store.commit('imgpl',0); this.$store.commit('imgpn'); this.$emit("fetchimg")}
      else if(this.$store.getters.isvid){this.$store.commit('vidpn'); this.$emit("fetchvid")}
    },


    // handleScroll (event) {
    // console.log(pageYOffset);
    // if(pageYOffset%600==0){
    //     this.setpn()
    // }
    
    // // Any code to be executed when the window is scrolled
    // }

    },
    created () {
    // window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    // window.removeEventListener('scroll', this.handleScroll);
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
.pnbtn{
    border:1px solid gray;
    /* position:absolute; */
    width: 30px;
    height: 30px;
    margin-top: 10px;
    border-radius: 50px;
    cursor: pointer;
}
.pnbtn:hover{
    border: 1px solid rgb(83, 82, 82)
}
</style>