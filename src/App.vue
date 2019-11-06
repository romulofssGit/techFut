<template>
	<div id="app">
		<div class="container-fluid">
			<div class="row justify-content-sm-center">
				<div class="col col-sm-12 text-white">
					<h3><strong>App Futebol</strong></h3>
					<br />
				</div>
			</div>

			<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
			<div v-if="!isNewChampioship">
				<div class="row">
					<div class="col col-xs-12">
						<div class="card bg-primary text-white mb-3 cursor-pointer" @click="setShowNewChampioship()" style="max-width: 18rem;">
							<div class="card-header">Novo campeonato</div>
							<div class="card-body">
								<h5 class="card-title">Iniciar novo campeonato</h5>
								<p class="card-text">Clique aqui para criar uma nova liga ou campeonato.</p>
							</div>
						</div>
					</div>

          <div class="col col-xs-12">
						<div class="card bg-light mb-3 cursor-pointer" style="max-width: 18rem;">
							<div class="card-header">Consultar campeonatos</div>
							<div class="card-body">
								<h5 class="card-title">Busque por campeonatos passados</h5>
								<p class="card-text">A glória eterna está aqui.</p>
							</div>
						</div>
					</div>
				</div>
<!--
				<button type="button" class="btn btn-primary btn-lg btn-block" >
					<i class="fa fa-plus"></i>&nbsp;
				</button>

				<button type="button" class="btn btn-secondary btn-lg btn-block" @click="showOldChampioship()">
					<i class="fa fa-list"></i>&nbsp;Consultar campeonatos
				</button> -->
			</div>

			<TeamComponent
				v-if="isNewChampioship"
				:description="'Informe aqui quantidade de times que farão parte do seu campeonato'"
			/>
		</div>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TeamComponent from "./components/TeamComponent.vue";

export default {
	name: "app",
	components: {
		TeamComponent
	},
	data() {
		return {
			isNewChampioship: false
		};
	},
	methods: {
		setShowNewChampioship() {
			this.isNewChampioship = !this.isNewChampioship;
		}
	}
};
</script>

<style>
body {
	background-color: #41b883;
}

.cursor-pointer {
  cursor: pointer;
}

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 60px;
	/* color: #ffffff; */
}
</style>
