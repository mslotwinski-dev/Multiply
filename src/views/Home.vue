<template>
  <div class="main">
    <div class="hi">
      <div>Tabliczka mnozenia</div>
      dla <span>maniakulka</span>
    </div>
    <div class="home">
      Wpisz <span>{{ x }} x {{ y }}</span>
      <!-- <input type="number" v-model="guess" @keyup="Next()" /> -->
    </div>
    Wynik: {{ good }}
    <div class="field" v-html="guess" />
    <div class="buttons">
      <div
        class="button"
        :key="nr"
        v-for="nr in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]"
        @click="Add(nr)"
      >
        {{ nr }}
      </div>
      <div class="button" @click="Pop()">X</div>
    </div>
    <img
      src="https://img-09.stickers.cloud/packs/88472377-b658-4926-adc7-2829da602644/webp/02e0dea0-1dbe-48aa-96c0-b010864a40de.webp"
    />
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
      good: -1,
    }
  },
  methods: {
    Add(n: number) {
      this.guess = this.guess + String(n)
      this.Next()
    },
    Pop() {
      this.guess = this.guess.slice(0, -1)
      this.Next()
    },
    Rand(): number {
      return Math.floor(Math.random() * 9) + 1
    },
    Next() {
      if (Number(this.guess) == this.x * this.y) {
        this.guess = ''
        this.good++
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

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  height: 80vh;
}
.hi {
  font-size: 23px;
  text-align: center;
  margin-bottom: 10px;
}

$main: #a50034;
$main2: #ee70a7;

span {
  color: $main2;
}

.home {
  font-size: 20px;
  margin-bottom: 10px;
}

.field {
  margin: 10px;
  font-size: 20px;
  height: 40px;
  width: 300px;
  background-color: #c6cbcc;
  color: $main;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
}

.button {
  background: $main2;
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 5px;
  flex-grow: 1;
  border-radius: 5px;
  cursor: pointer;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  max-width: 260px;
}

img {
  width: 100px;
  margin-top: 10px;
}
</style>
