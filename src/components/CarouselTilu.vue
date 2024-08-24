<template>
  <div class="carousel">
    <button
      @click="prev"
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
    >Previous</button>
    <div class="slide-container">
      <div v-for="(item, index) in items" :key="index" v-show="currentIndex === index">
        <img :src="item" alt="carousel-item" class="w-full" />
      </div>
    </div>
    <button
      @click="next"
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
    >Next</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
  }
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-container {
  border: 1px solid #ccc;
  overflow: hidden;
  height: 200px;
  margin: 0 10px;
}

.slide-container > div {
  display: none;
}

.slide-container > div:first-child {
  display: block;
}
</style>