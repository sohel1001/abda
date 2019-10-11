<template>
  <div id="app">
    <transition name="fade">
      <div v-if="$store.getters.loading">
        <b-progress :max="max">
          <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
        </b-progress>
        <!-- <b-spinner type="grow" label="Loading..."></b-spinner> -->
      </div>
    </transition>
    <!-- header -->
    <div class="align-middle">
      <ab-header
        @fetchweb="checkwebq()"
        @fetchimg="checkimgq()"
        @fetchapp="checkappq()"
        @fetchvid="checkvidq()"
        @fetchaud="checkaudq()"
      ></ab-header>
    </div>
    <!-- content -->
    <div class="results">
      <results
        @fetchweb="checkwebq()"
        @fetchimg="checkimgq()"
        @fetchapp="checkappq()"
        @fetchvid="checkvidq()"
        @fetchaud="checkaudq()"
      ></results>
    </div>
    <!-- footer -->
    <div class=".footer">
      <ab-footer></ab-footer>
    </div>
  </div>
</template>
<script>
import results from "./components/results";
import footer from "./components/footer";
import header from "./components/header";
export default {
  components: {
    "ab-header": header,
    "ab-footer": footer,
    results
  },
  data() {
    return {
      q: "",
      imgq: "",
      webq: "",
      vidq: "",
      audq: "",
      appq: "",
      value: 33.333333333,
      max: 35,
      cancelSource: null,
      infoText: null
    };
  },
  methods: {
    checkwebq() {
      if (
        this.webq !== this.$store.getters.query ||
        this.$store.getters.webresults.length === 0 ||
        this.$store.getters.webpn !== 0
      ) {
        this.webq = this.$store.getters.query;
        this.fetchweb();
      }
    },
    checkimgq() {
      if (
        this.imgq !== this.$store.getters.query ||
        this.$store.getters.imageresults.length === 0 ||
        this.$store.getters.imgpn !== 0
      ) {
        this.imgq = this.$store.getters.query;
        this.fetchimg();
      }
    },
    checkvidq() {
      if (
        this.vidq !== this.$store.getters.query ||
        this.$store.getters.videoresults.length === 0
      ) {
        this.vidq = this.$store.getters.query;
        this.fetchvideo();
      }
    },
    checkaudq() {
      if (
        this.audq !== this.$store.getters.query ||
        this.$store.getters.audioresults.length === 0
      ) {
        this.audq = this.$store.getters.query;
        this.fetchaudio();
      }
    },
    checkappq() {
      if (
        this.appq !== this.$store.getters.query ||
        this.$store.getters.appresults.length === 0
      ) {
        this.appq = this.$store.getters.query;
        this.fetchapp();
      }
    },
    // fetch web results
    fetchweb() {
      this.$store.commit("modload", true);
      this.cancelSearch();
      this.cancelSource = this.axios.CancelToken.source();
      this.axios
        .get(
          `https://binding290.herokuapp.com/search?q=${this.$store.getters.query}&pn=${this.$store.getters.webpn}`,
          {
            cancelToken: this.cancelSource.token
          }
        )
        .then(response => {
          this.$store.commit("saveweb", response.data);
          this.cancelSource = null;
        })
        .catch(() => {
          this.$store.commit("modload", false);
          this.toast("b-toaster-top-center");
        });
    },
    // fetch image results
    fetchimg() {
      this.cancelSearch();
      this.cancelSource = this.axios.CancelToken.source();
      this.$store.commit("modload", true);
      this.axios
        .get(
          `https://binding290.herokuapp.com/images?q=${this.$store.getters.query}&pn=${this.$store.getters.imgpn}`,
          {
            cancelToken: this.cancelSource.token
          }
        )
        .then(response => {
          this.$store.commit("saveimg", response.data);
          this.cancelSource = null;
        })
        .catch(() => {
          this.$store.commit("modload", false);
          this.toast("b-toaster-top-center");
        });
    },
    // fetch video results
    fetchvideo() {
      this.cancelSearch();
      this.cancelSource = this.axios.CancelToken.source();
      this.$store.commit("modload", true);
      this.axios
        .get(
          `https://binding290.herokuapp.com/vids?q=${this.$store.getters.query}`,
          {
            cancelToken: this.cancelSource.token
          }
        )
        .then(response => {
          this.$store.commit("savevid", response.data);
          this.cancelSource = null;
        })
        .catch(() => {
          this.$store.commit("modload", false);
          this.toast("b-toaster-top-center");
        });
    },
    // fetch audio results
    fetchaudio() {
      this.cancelSearch();
      this.cancelSource = this.axios.CancelToken.source();
      this.$store.commit("modload", true);
      this.axios
        .get(
          `https://binding290.herokuapp.com/aud?q=${this.$store.getters.query}`,
          {
            cancelToken: this.cancelSource.token
          }
        )
        .then(response => {
          this.$store.commit("saveaud", response.data);
          this.cancelSource = null;
        })
        .catch(() => {
          this.$store.commit("modload", false);
          this.toast("b-toaster-top-center");
        });
    },
    // fetch apps results
    fetchapp() {
      this.cancelSearch();
      this.cancelSource = this.axios.CancelToken.source();
      this.$store.commit("modload", true);
      this.axios
        .get(
          `https://binding290.herokuapp.com/apps?q=${this.$store.getters.query}`,
          {
            cancelToken: this.cancelSource.token
          }
        )
        .then(response => {
          this.$store.commit("saveapp", response.data.list);
          this.cancelSource = null;
        })
        .catch(() => {
          this.$store.commit("modload", false);
          this.toast("b-toaster-top-center");
        });
    },
    cancelSearch() {
      if (this.cancelSource) {
        this.cancelSource.cancel("Start new search, stop active search");
        // console.log('cancel request done');
      }
    },
    toast(toaster, append = false) {
      if (!this.$store.getters.loading) {
        this.$bvToast.toast(`Sorry for inconvenience`, {
          title: `error !`,
          toaster: toaster,
          solid: true,
          appendToast: append
        });
      }
    }
  }
};
</script>
<style>
.progress {
  height: 2px !important;
  transition: 3s all ease;
}
.progress span {
  display: none;
}
.container-fluid {
  height: 100%;
}
#app {
  overflow-x: hidden;
}
.panel {
  position: fixed;
  right: -1%;
  top: 40%;
}
/* transions and animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.results {
  margin-top: 5px;
}
</style>