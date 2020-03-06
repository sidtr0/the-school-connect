<template>
	<v-container>

		<p class="text-center display-3">Welcome back!</p>
		<p class="text-center display-2">We're glad to see you again.</p>

		<v-card
			class="mx-auto darker"
			max-width="500px"
			max-height="300px"
			outlined
			elevation="10"
		>

    <v-list-item three-line>
		<v-list-item-content>
			<div class="overline ">LOG IN</div>
        
		</v-list-item-content>
		
		<v-list-item-content>
			<v-text-field
				name="Email"
				label="Email"
				v-model="email"
			></v-text-field>
			<v-text-field
				name="Password"
				label="Password"
				type="password"
				v-model="password"
			></v-text-field>
			<router-link to="/signup">No account? Don't worry. Sign up in seconds. </router-link>
		</v-list-item-content>

		<v-card-actions >
			<v-btn class="darker" elevation="0" v-on:click="login">Log In</v-btn>
		</v-card-actions>		
     
    </v-list-item>

 
  </v-card>

	</v-container>
</template>

<script>
export default {
  name: "SignIn",
  components: {

  },
  data() {
    return {
      signInForm: {
        email: null,
        password: null
      }
    };
  }
};
</script>
