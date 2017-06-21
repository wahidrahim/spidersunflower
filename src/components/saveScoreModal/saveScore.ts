export default {
  data() {
    return {
      name: 'Anonymous'
    }
  },
  computed: {
    speed() {
      return this.$store.getters.speed
    },
    time() {
      return this.$store.getters.timeElapsed
    },
    text() {
      return this.$store.getters.originalText
    },
    source() {
      return this.$store.getters.textSource
    }
  },
  methods: {
    save() {
      const data = {
        name: this.name.length ? this.name : 'Anonymous',
        speed: this.speed,
        time: this.time,
        text: this.text,
        source: this.source,
        date: new Date().getTime()
      }

      this.$http.post('https://spidersunflower.firebaseio.com/scores.json', data).then((res) => {
        this.$router.push('scores')
      })
    },
    close() {
      this.$emit('close')
    },
    selectText() {
      this.$refs.nameInput.select()
    }
  },
  mounted() {
    this.selectText()
  }
}