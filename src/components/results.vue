<template>
    <div class="container"> 
        <div>
  <b-nav tabs fill>
    <b-nav-item v-if="!$store.getters.isweb"  @click="setweb()"><img src="./../assets/svg/001-language.svg" height="20px" width="20px" alt="web"></b-nav-item>
    <b-nav-item v-if="$store.getters.isweb" active><img src="./../assets/svg/002-global.svg" height="20px" width="20px" alt="web"></b-nav-item>
    <b-nav-item v-if="!$store.getters.isimg" @click="setimage()"><img src="./../assets/svg/003-picture.svg" height="20px" width="20px" alt="web"></b-nav-item>
    <b-nav-item  v-if="$store.getters.isimg" active><img src="./../assets/svg/004-frame-landscape.svg" height="20px" width="20px" alt="web"></b-nav-item>
    <b-nav-item v-if="!$store.getters.isvid" @click="setvideo()"><img src="./../assets/svg/010-play-button-1.svg" height="20px" width="20px" alt="web"></b-nav-item>
    <b-nav-item v-if="$store.getters.isvid" active><img src="./../assets/svg/009-play-button.svg" height="20px" width="20px" alt="web"></b-nav-item>
    <b-nav-item v-if="!$store.getters.isaud" @click="setaudio()"><img src="./../assets/svg/006-music-player-1.svg" height="20px" width="20px" alt="web"></b-nav-item>
    <b-nav-item v-if="$store.getters.isaud" active><img src="./../assets/svg/005-music-player.svg" height="20px" width="20px" alt="web"></b-nav-item>
    <b-nav-item v-if="!$store.getters.isapp" @click="setapp()"><img src="./../assets/svg/008-android-1.svg" height="20px" width="20px" alt="web"></b-nav-item>
    <b-nav-item v-if="$store.getters.isapp" active><img src="./../assets/svg/007-android.svg" height="20px" width="20px" alt="web"></b-nav-item>
  </b-nav>
</div>


                    <!-- results -->


        <keep-alive>
        <courosel v-if="$store.getters.isimg"></courosel>
        <abweb v-if="$store.getters.isweb"></abweb>
        <apps v-if="$store.getters.isapp"></apps>
        <vid v-if="$store.getters.isvid"></vid>
        <audi v-if="$store.getters.isaud"></audi>
<!-- :res="res" -->
        </keep-alive>
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
        setweb(){  this.setmode(); this.$store.commit('modweb',"true");this.$emit("fetchweb")},
        setimage(){this.setmode(); this.$store.commit('modimg',"true");this.$emit("fetchimg")},
        setvideo(){this.setmode(); this.$store.commit('modvid',"true");this.$emit("fetchvid")},
        setaudio(){this.setmode(); this.$store.commit('modaud',"true");this.$emit("fetchaud")},
        setapp(){  this.setmode(); this.$store.commit('modapp',"true");this.$emit("fetchapp")},
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