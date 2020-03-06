<template>
  <v-app>
    <v-app-bar app class="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/">
          <span class="grey--text text--lighten-2 display-1">THE</span>
          <span class="black--text text--lighten-2 display-1">SCHOOL</span>
          <span class="grey--text text--lighten-2 display-1">CONNECT</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn router to="/signup" link depressed large class="primary">
          <v-icon left>mdi-traffic-light</v-icon>
          Sign Up
        </v-btn>
        <v-btn to="/signin" link depressed large class="primary">
          <v-icon left>mdi-account</v-icon>
          Sign In
        </v-btn>
        <v-btn depressed large class="primary" @click="signOut">
          Sign Out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
      <v-footer class="primary">
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }} The School Connect</div>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
const fb = require('./firebase.js')

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),

  methods: {
    signOut: function () {
      fb.auth.signOut()
      .catch(function(error) {
        // An error happened.
        alert("We found an error\n" + error.code + "\n" + error.message);
      });
      this.$router.push('/')
    }
  }
};
</script>
