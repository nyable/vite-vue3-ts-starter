<template>
  <div class="bt-wrap">
    <button @click="toRouter('Scss')">To SCSS Page</button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  },
  methods: {
    toRouter (name: string) {
      this.$router.push({ name })
    }
  }
})
</script>

<style lang="scss" scoped>
.bt-wrap {
  text-align: center;
  border: solid black 1px;
}
</style>