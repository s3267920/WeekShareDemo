(function() {
  let app = new Vue({
    el: '#app',
    data() {
      return {
        isShow: {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
          H: false,
          I: false,
          J: false
        },
        day: ['一', '二', '三', '四', '五']
      };
    },
    methods: {
      showBox: function(el) {
        this.isShow[el] = !this.isShow[el];
      }
    }
  });
})(Vue);
