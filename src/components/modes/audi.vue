<template>
<div>
	<aud @playd="playd"></aud>
<div class="mycontainer1">
  <div class="">
<!-- audio element -->
	<b-row no-gutters="">

	<b-col cols="12" sm="9" md="8" offset-xl="3" xl="4">
		<vue-plyr>
	<audio>
		<source :src="src" type="audio/mp3"/>
	</audio>
		</vue-plyr>

	</b-col>
	</b-row>

  </div>
</div>
	</div>
</template>
<script>
import aud from './aud'
export default {
	components:{
		aud
	},
	data(){
		return{
		src:""
	}},
	methods:{
		playd(event){
			this.src=event;
		}
	}
}
</script>

<style>
.mycontainer1{
	position: fixed;
	bottom: 1%;
	width: 100%
}
body{
}

</style>