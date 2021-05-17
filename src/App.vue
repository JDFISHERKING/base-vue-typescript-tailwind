<template>
  <div>Hello World</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
})
</script>

<style lang="scss">
#app {
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @tailwind screens;
  font-size: 16px;

  p {
    font-size: 16px;
  }

  label {
    margin: 0;
  }
}
</style>
