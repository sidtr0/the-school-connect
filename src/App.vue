<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <div class="d-flex align-center">
        <span class="white--text lighten-3 display-1">The School Connect</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn>Sign up</v-btn>

      <v-btn>Sign in</v-btn>
      
      <v-btn>Sign 0ut</v-btn>

    </v-app-bar>



    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
    //
  }),
};
</script>
