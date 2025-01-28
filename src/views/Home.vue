<template>
  Tabliczka mnozenia dla maniakulka
  <div class="home">
    Wpisz {{ x }} x {{ y }}
    <input type="number" v-model="guess" @keyup="Next()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      x: 0,
      y: 0,
      guess: '',
    }
  },
  methods: {
    Rand(): number {
      return Math.floor(Math.random() * 10)
    },
    Next() {
      if (Number(this.guess) == this.x * this.y) {
        this.guess = ''
        this.x = this.Rand()
        this.y = this.Rand()
      }
    },
  },
  mounted() {
    this.Next()
  },
})
</script>
