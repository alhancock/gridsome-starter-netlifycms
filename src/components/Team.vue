<template>
  <div class="Team__Content">
		<h1>{{ Team.title }}</h1>

		<div class="row people" v-for="item in Team.items" :key="item.item">
			<div class="col-sm person">
				 <div class="name">{{item.name}}</div>
				 <div class="jobtitle">{{item.jobTitle}}</div>				 
				  <g-image immediate="true" :src="'/images/team/' + item.image" width="300" height="300" fit="contain"/>
			</div>		
		</div>

  </div>
</template>

<script>

	import Team from '~/data/Team.yml'
	
	export default {
		computed: {
			Team () {
				return Team
			}
		}
	} 
</script>

<style lang="sass" scoped>
.Team__Content
	text-align: center
	margin: 30px 0
	
	.person
		img
			width: 300px
		.jobtitle
			text-transform: uppercase
		
</style>