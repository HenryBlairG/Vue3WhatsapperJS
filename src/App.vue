<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--lght_clr);
  border-radius: 5vh 5vh;
  border-style: solid;
  border-color: var(--dark_clr);
  border-width: 0.15em;
  box-shadow: 0.1em 0.1em 0.1em 0.1em var(--dark_clr),
    -0.1em 0.1em 0.1em 0.1em var(--dark_clr),
    0.1em -0.1em 0.1em 0.1em var(--dark_clr),
    -0.1em -0.1em 0.1em 0.1em var(--dark_clr),
    0.1em 0.1em 0.2em 0.2em var(--dark_clr),
    -0.1em 0.1em 0.2em 0.2em var(--dark_clr),
    0.1em -0.1em 0.2em 0.2em var(--dark_clr),
    -0.1em -0.1em 0.2em 0.2em var(--dark_clr);
  margin: 1em;
  min-width: 800px;
  min-height: 500px;
  display: grid;
  grid-template-columns: 80px 1fr;
}
</style>
