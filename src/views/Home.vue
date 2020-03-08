<template>
  <v-container>
    <div>
      <p class="text-center display-3 font-weight-heavy">
        Welcome to The School Connect.
      </p>
      <br />
      <p class="text-center display-1">
        A forum of the students, by the students and for the students.
      </p>
      <br />
      <v-divider></v-divider>
      <br />
      <p class="text-center headline">
        The School Connect wants to serve as a platform for students all over
        the world for having discussions, asking for help and interacting with
        each other.
      </p>
    </div>
    <v-divider></v-divider>

    <v-row>
      <v-col cols="12" sm="4">
        <v-card max-width="400" height="270">
          <v-img
            height="200"
            src="../assets/two-women-looking-and-pointing-at-macbook-laptop-1569076.jpg"
          ></v-img>
          <v-card-text>
            Stay connected with weekly updates, discussions, and content.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card max-width="400" height="270">
          <v-img
            height="200"
            src="../assets/group-of-people-inside-room-2962059.jpg"
          ></v-img>
          <v-card-text>
            Discuss, chat and debate with students all over the world.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card max-width="400" height="270">
          <v-img
            height="200"
            src="../assets/books-piled-up-on-the-table-3747502.jpg"
          ></v-img>
          <v-card-text>
            Get latest posts on topics you love.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card max-width="400" min-height="150">
          <v-card-title>
            <v-icon>mdi-instagram</v-icon>
          </v-card-title>
          <v-card-text>
            Check out our Instagram account at: <a href="https://www.instagram.com/theschoolconnectweb/">@theschoolconnectweb</a>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card max-width="400" min-height="150">
          <v-card-title>
            <v-icon>mdi-twitter</v-icon>
          </v-card-title>
          <v-card-text>
            Check out our Twitter account at: <a href="https://twitter.com/DeSchoolConnect">@DeSchoolConnect</a>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card max-width="400" min-height="150">
          <v-card-title>
            <v-icon>mdi-github</v-icon>
          </v-card-title>
          <v-card-text>
            Contribute to the project at GitHub: <a href="https://github.com/Drac5079/the-school-connect">Drac5079/the-school-connect</a> 
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
