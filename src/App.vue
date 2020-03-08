<template>
  <v-app>
    <v-app-bar app class="primary">

      <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/">
          <span class="grey--text text--lighten-2 display-1">THE</span>
          <span class="black--text text--lighten-2 display-1">SCHOOL</span>
          <span class="grey--text text--lighten-2 display-1">CONNECT</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn router to="/signup" link depressed large class="primary">
          <v-icon left>mdi-traffic-light</v-icon>
          Sign Up
        </v-btn>
        <v-btn to="/signin" link depressed large class="primary">
          <v-icon left>mdi-account</v-icon>
          Sign In
        </v-btn>
        <v-btn depressed large class="primary" @click="signOut">
          <v-icon left>mdi-logout</v-icon>
          Sign Out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item link router to="/signup">
          <v-list-item-icon>
            <v-icon>mdi-traffic-light</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Sign Up</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link router to="/signin">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Sign In</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link router @click="signOut">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon> 
          <v-list-item-content>
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
const fb = require("./firebase.js");

export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
  }),

  methods: {
    signOut: function() {
      fb.auth.signOut().catch(function(error) {
        // An error happened.
        alert("We found an error\n" + error.code + "\n" + error.message);
      });
      this.$router.push("/");
    }
  }
};
</script>
