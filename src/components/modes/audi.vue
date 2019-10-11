<template>
  <div>
    <aud @playd="playd"></aud>
    <div class="mycontainer1">
      <div class>
        <!-- audio element -->
        <b-row no-gutters>
          <b-col cols="12" sm="9" md="8" offset-xl="3" xl="4">
            <vue-plyr v-if="issrc">
              <audio>
                <source :src="src" />
              </audio>
            </vue-plyr>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import aud from "./aud";
export default {
  components: {
    aud
  },
  data() {
    return {
      src: null,
      issrc: false
    };
  },
  methods: {
    async playd(event) {
      await this.axios
        .get(`https://glacial-wave-06498.herokuapp.com/link?q=${event}`)
        .then(response => {
          this.issrc = false;
          this.src = response.data;
        });
      this.issrc = true;
      setTimeout(function() {
        document.querySelector(".plyr__controls__item").click();
      }, 1000);
    }
  }
};
</script>

<style>
.mycontainer1 {
  position: fixed;
  bottom: 1%;
  width: 100%;
}
</style>