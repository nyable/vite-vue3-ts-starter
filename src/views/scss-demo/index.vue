<template>
  <div>This is SCSS Page</div>
  <div class="foo">
    Foo Div
    <div class="bar">Bar Div</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  data () { return {} },
  computed: {},
  methods: {},
})
</script>
<style lang="scss" scoped>
.foo {
  background-color: greenyellow;
  .bar {
    background-color: rebeccapurple;
  }
}
</style>