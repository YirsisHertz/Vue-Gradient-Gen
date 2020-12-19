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
      gradient_direction: 1,
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
      if (this.gradient_direction == 2) {
        return `background: linear-gradient(to left, ${this.color1}, ${this.color2});`;
      } else if (this.gradient_direction == 3) {
        return `background: linear-gradient(to top, ${this.color1}, ${this.color2});`;
      } else if (this.gradient_direction == 4) {
        return `background: linear-gradient(to bottom, ${this.color1}, ${this.color2});`;
      } else {
        return `background: linear-gradient(to right, ${this.color1}, ${this.color2});`;
      }
    },
  },
});
