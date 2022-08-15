const app = new Vue({
  el: "#app",
  data: {
    name: "Darkland",
  }
})

const sass = require("sass");
const result = sass.compile("style.css");