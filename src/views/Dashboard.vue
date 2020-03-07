<template>
	<v-container>
	  <span class="display-2 text-center">Dashboard</span>
	  <v-card
      class="mx-auto darker"
      max-width="1000px"
      outlined
      elevation="10"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline">CREATE A NEW POST</div>
        </v-list-item-content>

				<v-col>
					<v-row rows="2" sm="1">
						<v-text-field
						outlined
            name="title"
            label="title"
            v-model="post_title"
          	></v-text-field>
					</v-row>
					<v-row rows="2" sm="1">
						<v-text-field
						auto-grow
						outlined
            name="body"
            label="body"
            v-model="post_body"
          ></v-text-field>
					</v-row>
				</v-col>

        <v-card-actions>
          <v-btn class="darker" elevation="0" @click="post">Post</v-btn>
        </v-card-actions>
      </v-list-item>
    </v-card>

	</v-container>
	  
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  data() {
  	return {
  		post_title: null,
  		post_body: null
  	}
  },
  methods: {
  	post: function() {
  		alert(this.post_title + "\n" + this.post_body);
  	}
  }
};
</script>
