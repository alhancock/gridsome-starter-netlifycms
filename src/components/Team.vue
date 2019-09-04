<template>
  <div class="Team__Content">
		<h1>{{ Team.title }}</h1>

		<div class="people" v-for="item in Team.items" :key="item.item">
			<div class="person">
				 <div class="name">{{item.name}}</div>
				 <div class="jobtitle">{{item.jobTitle}}</div>				 
				  <g-image immediate="true" :src="'/images/team/' + item.image" width="300" height="300" fit="contain"/>
			</div>		
		</div>

<!-- 
		<ul>
			 <li v-for="item in Team.items" :key="item.item">
				 {{item.item}}			
      		</li>

		</ul>		 -->
		
    <!-- <ul class="Hero__Content__Icons">
      <li v-for="item in Team.items" :key="item.name">
        <a :href="item.link">
          <g-image immediate="true" :alt="item.name" :src="'/images/' + item.name + '.svg'" />
        </a>
      </li>
    </ul> -->
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
		
</style>