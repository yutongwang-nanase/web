<template>
	<TopCom />
	<va-avatar class="mr-6">
		A
	</va-avatar>

	<va-avatar> J.K. </va-avatar>
	<router-view></router-view>
	rewq

	<p>
		Material Design Icons<br>
		<va-icon class="material-icons">
			book
		</va-icon>
		<va-icon name="book" />
	</p>

	<p>
		Font Awesome 5<br>
		<va-icon class="fas fa-book" />
		<va-icon name="fas-book" />
	</p>

	<p>
		Ionic<br>
		<va-icon name="ion-book-outline" tag="ion-icon" />
		<va-icon name="ion-book-outline" />
	</p>



</template>

<script lang="ts" setup>
	import TopCom from './components/TopCom.vue';
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.main {
		span {
			color: darksalmon;
		}

	}


	.va-icon+.va-icon {
		margin-left: 2rem;
	}
</style>