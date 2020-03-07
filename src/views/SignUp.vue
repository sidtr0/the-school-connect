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
            v-model.lazy="username"
          ></v-text-field>
          <v-text-field
            name="Email"
            label="Email"
            v-model.lazy="email"
          ></v-text-field>
          <v-text-field
            name="password"
            label="Password"
            type="password"
            v-model.lazy="password"
          ></v-text-field>
          <router-link to="/signin"
            >Already have an account? Login instead.</router-link
          >
        </v-list-item-content>

        <v-card-actions>
          <v-btn class="darker" elevation="1" @click="signUp">
            Sign Up
          </v-btn>
        </v-card-actions>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
const fb = require("../firebase.js");

export default {
  name: "SignUp",
  components: {},
  data() {
    return {
      username: null,
      email: null,
      password: null
    };
  },
  methods: {
    signUp: function() {
      // console.log(this.username);
      // console.log(this.email);
      // console.log(this.password);

      fb.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          alert("We found an error\n" + error.code + "\n" + error.message);
        });
      this.$router.push("/dashboard");
    }
  }
};
</script>
