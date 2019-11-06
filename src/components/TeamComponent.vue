<template>
	<div id="teamComponent">
		<div class="row">
			<div class="col col-xs-12">
				<div class="alert alert-primary" role="alert">{{description}}</div>
			</div>
		</div>
		<div class="row">
			<div class="col col-xs-12">
				<div class="input-group mb-8">
					<div class="input-group-prepend">
						<span class="input-group-text" id="basic-addon1">
							<i class="fa fa-users"></i>
						</span>
					</div>

					<input
						type="number"
						class="form-control cls-fonte-input-qtd-times"
						v-model="numberOfTeams"
						id="numberOfTeams"
						name="numberOfTeams"
						aria-describedby="basic-addon1"
						placeholder="Número de times"
					/>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col col-xs-12">
				<br />
			</div>
		</div>

		<div class="row">
			<div class="col col-xs-6">
				<button type="button" class="btn btn-secondary btn-lg btn-block">Voltar</button>
			</div>
			<div class="col col-xs-6">
				<button @click="salvarFirebase" type="button" class="btn btn-primary btn-lg btn-block">Próximo</button>
			</div>
		</div>
		<div style="color:red">{{this.dbFirebase}}</div>
	</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import firebase from "firebase";

export default {
	name: "TeamComponent",
	props: {
		description: {
			defaut: "",
			type: String
		}
	},
	data() {
		return {
			numberOfTeams: null,
			dbFirebase: null
		};
	},
	methods: {
		salvarFirebase: () => {
			firebase.initializeApp({
				apiKey: "AIzaSyBhRvHefdZfMp60caywgsUolVZLMOCoYRA",
				authDomain: "vue-futebol-romulo.firebaseapp.com",
				databaseURL: "https://vue-futebol-romulo.firebaseio.com",
				projectId: "vue-futebol-romulo",
				storageBucket: "vue-futebol-romulo.appspot.com",
				messagingSenderId: "1049128913887",
				appId: "1:1049128913887:web:7854998a9dd2531217526a"
			});

			// Get a reference to the database service
			// this.dbFirebase = firebase.database();
			firebase.database().ref('users/' + 1).set({
				username: 'Romulo',
				email: 'fssromulo@gmail.com',
				profile_picture : 'dfdfsdfsdfsdfd'
			});

			// console.log('Conexao >', dbFirebase);
		}
	}
};
</script>

<style scoped>
.cls-fonte-input-qtd-times {
	font-size: 30px;
}
</style>