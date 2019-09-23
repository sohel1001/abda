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
  },
  mutations: {
    setquery(state,q){state.query=q},
    modweb(state,q){state.isweb=q},
    modimg(state,q){state.isimg=q},
    modvid(state,q){state.isvid=q},
    modaud(state,q){state.isaud=q},
    modapp(state,q){state.isapp=q},
    modload(state,q){state.loading=q},

// save results
saveweb(state,q){state.loading=false;  state.webresults=q},
saveimg(state,q){state.loading=false;  state.imageresults=q},
savevid(state,q){state.loading=false;  state.videoresults=q},
saveaud(state,q){state.loading=false;  state.audioresults=q},
saveapp(state,q){state.loading=false;  state.appresults  =q},


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
webresults   : state=>{return state.webresults},
imageresults : state=>{return state.imageresults},
videoresults : state=>{return state.videoresults},
audioresults : state=>{return state.audioresults},
appresults   : state=>{return state.appresults},






  },
  actions: {

  }
})
