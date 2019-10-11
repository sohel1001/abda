import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query:'',
    webresults:"",
    imageresults:"",
    videoresults:"",
    audioresults:"",
    appresults:"",
    loading:false,
    isweb:true,
    isimg:false,
    isvid:false,
    isaud:false,
    isapp:false,
    webpn:0,
    imgpn:0,
    vidpn:0,
    webpl:1,
    imgpl:1,
    vidpl:1,
  },
  mutations: {
    setquery(state,q){state.query=q;state.webresults=""
      state.imageresults="";
      state.videoresults="";
      state.audioresults="";
      state.appresults="";
      state.webpn=0;
      state.imgpn=0;
      state.vidpn=0;},
    modweb(state,q){state.isweb=q},
    modimg(state,q){state.isimg=q},
    modvid(state,q){state.isvid=q},
    modaud(state,q){state.isaud=q},
    modapp(state,q){state.isapp=q},
    modload(state,q){state.loading=q},
    modlink(state,q){state.audioresults[q.index].dwnl=q.uri},

    // save results

    saveweb(state,q){state.loading=false;if(state.webpn!==0){state.webresults=state.webresults.concat(q);state.webpl=1}else{state.webresults=q} },
    saveimg(state,q){state.loading=false; if(state.imgpn!==0){state.imageresults=state.imageresults.concat(q);state.imgpl=1}else{state.imageresults=q}},
    savevid(state,q){state.loading=false; if(state.vidpn!==0){state.videoresults=state.videoresults.concat(q)}else{state.videoresults=q}},
    saveaud(state,q){state.loading=false; state.audioresults=q},
    saveapp(state,q){state.loading=false; state.appresults  =q},


    webpn(state){state.webpn++},
    imgpn(state){state.imgpn=+1},
    vidpn(state){state.vidpn=+1},
    webpl(state,q){state.webpl=q},
    imgpl(state,q){state.imgpl=q},
    vidpl(state,q){state.vidpl=q},
  },
  getters: {
    query: state => {return state.query},
    isweb: state=>{return state.isweb},
    isimg: state=>{return state.isimg},
    isvid: state=>{return state.isvid},
    isaud: state=>{return state.isaud},
    isapp: state=>{return state.isapp},
    loading: state=>{return state.loading},

// supply results
webresults   : state=>{return state.webresults  },
imageresults : state=>{return state.imageresults},
videoresults : state=>{return state.videoresults},
audioresults : state=>{return state.audioresults},
appresults   : state=>{return state.appresults  },

// supply webpn
webpn(state){return state.webpn},
imgpn(state){return state.imgpn},
vidpn(state){return state.vidpn},

// page limit
  webpl(state){return state.webpl},
  imgpl(state){return state.imgpl},
  vidpl(state){return state.vidpl},
// logo visibility

isres: state=>{if(
  state.webresults ||
  state.imageresults ||
  state.videoresults ||
  state.audioresults ||
  state.appresults ){return false}
  else{return true}
    }
  },
  actions: {}
})
