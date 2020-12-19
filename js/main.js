if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("ServiceWorker Register"))
    .catch((err) => console.log(err));
}

const app = Vue.createApp({
  data() {
    return {
      title: "Gradient Generator",
      color1: "#000000",
      color2: "#ffffff",
    };
  },
  computed: {
    color_one() {
      return this.color1;
    },
    color_two() {
      return this.color2;
    },
    set_gradient() {
      return `background: linear-gradient(to right, ${this.color1}, ${this.color2});`;
    },
  },
});
