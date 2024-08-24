<template>
  <div class="font-Montserrat" id="app">
    <nav class="fixed w-full z-10 top-0 shadow-xl flex items-center justify-between flex-wrap bg-[#F7F7E6] px-4 2xl:px-60">
      <div class="flex items-center flex-no-shrink text-blue mr-6 pt-2 pb-2">
        <a href="https://chiclinciparay.com/">
          <img src="@/assets/logocik.png" width="250" alt="logo" />
        </a>
      </div>
      <div class="block sm:hidden">
        <button @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-primary">
          <svg class="fill-current h-3 w-3 bg-primary" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="open ? 'block' : 'hidden'" class="w-full items-start text-right sm:flex sm:w-auto">
        <div class="text-sm sm:flex-grow pt-2">
          <router-link to="/" custom v-slot="{ navigate }">
            <button @click="navigate" role="link">
              <a class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-primary mr-4">Home</a>
            </button>
          </router-link>
          <a href="#about"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-primary mr-4">Welcome</a>
          <a href="#tentang"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-primary mr-4">About Us</a>
          <a href="#menu"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-primary mr-4">Menu</a>
          <a href="#location"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-primary mr-4">Location</a>
          <a href="https://wa.link/jacikr" target="_blank"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-primary mr-4">ORDER!</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import "@/assets/tailwind.css";

export default {
  data() {
    return { open: false };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>