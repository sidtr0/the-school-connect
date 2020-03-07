<template>
  <v-container>
    <span class="display-2 text-center">Dashboard</span>
    <v-card class="mx-auto darker" max-width="1000px" outlined elevation="10">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline">CREATE A NEW POST</div>
        </v-list-item-content>

        <v-col>
          <v-row rows="2" sm="1">
            <v-text-field
              outlined
              name="title"
              label="Title"
              v-model="post_title"
            ></v-text-field>
          </v-row>
          <v-row rows="2" sm="1">
            <v-text-field
              auto-grow
              outlined
              name="body"
              label="Body"
              v-model="post_body"
            ></v-text-field>
          </v-row>
        </v-col>

        <v-card-actions>
          <v-btn class="darker" elevation="0" @click="post">Post</v-btn>
        </v-card-actions>
      </v-list-item>
    </v-card>
    <br />
    <span class="display-2 text-center">Latest Posts</span>
    <v-btn @click="getDocs">text</v-btn>
    <v-container v-for="post in posts" :key="post.title">
      <v-card>
        <v-card-title>
          {{  post.title  }}
        </v-card-title>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
const fb = require("../firebase.js");

export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      post_title: null,
      post_body: null,
      posts: []
    };
  },
  methods: {
    post: function() {
      fb.db
        .collection('posts')
        .add({
          createdOn: new Date(),
          title: this.post_title,
          body: this.post_body,
          comments_count: 0,
          likes_count: 0,
          comments: [],
          author: null
        })
        .catch(function(error) {
          alert("Error adding doc: \n" + error);
        });
    },
    getDocs: function() {
      fb.db.collection("posts").get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.posts.unshift(doc.data());
          //console.log(doc.data().title);
        })
      });
    }
  },
  computed: {
    
  }
};



//console.log(this.posts);

</script>
