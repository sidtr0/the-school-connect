import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#e63b2e",
        secondary: "#f85a3e",
        trinary: "#ff7733",
        quadranary: "#f49d37",
        pentanary: "#ffd225",
        background: "#dfdef4"
      }
    }
  }
});
