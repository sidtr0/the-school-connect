<template>
  <v-container>
    <p class="text-center display-3">
      The School Connect is completely free to use.
    </p>
    <p class="text-center subtitle">
      Use it without any limitations. Sign up now.
    </p>

    <v-card class="mx-auto darker" max-width="500px" outlined elevation="10">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline ">SIGN UP</div>
        </v-list-item-content>

        <v-list-item-content>
          <v-text-field
            name="Username"
            label="Username"
            v-model="username"
          ></v-text-field>
          <v-text-field
            name="Email"
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            name="password"
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
          <router-link to="/signin"
            >Already have an account? Login instead.</router-link
          >
        </v-list-item-content>

        <v-card-actions>
          <v-btn class="darker" elevation="1" v-on:click="signUp"
            >Sign Up</v-btn
          >
        </v-card-actions>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SignUp",
  components: {},
  data() {
    return {
      signUpForm: {
        username: null,
        email: null,
        password: null
      }
    };
  }
};
</script>
