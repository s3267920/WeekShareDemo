(function () {
  new Vue({
    el: '#app',
    data() {
      return {
        time: {
          hour: 12,
          minute: '',
          second: ''
        }
      }
    },
    computed: {
      hourAnimate() {
        let hour = this.time.hour
        let minute = this.time.minute
        if (hour === 0 || hour === 12) {
          return 'rotate(0deg)'
        } else {
          return `rotate(${(Math.abs(hour-12)* 30)+(minute* 0.5)}deg)`
        }
      },
      minuteAnimate() {
        let minute = this.time.minute
        if (minute === 60) {
          minute = 0
          return 'rotate(0deg)'
        } else {
          return `rotate(${minute * 6}deg)`
        }
      },
      secondAnimate() {
        let second = this.time.second
        if (second === 60) {
          return 'rotate(0deg)'
        } else {
          return `rotate(${second * 6}deg)`
        }
      },

    },
    methods: {
      getTime() {
        let date = new Date();
        this.time.hour = date.getHours();
        this.time.minute = date.getMinutes();
        this.time.second = date.getSeconds();
      }
    },
    mounted() {
      let timeStart = window.setInterval(() => {
        this.getTime()
      }, 1000)

    },
  })
})(Vue);