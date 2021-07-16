<template>
  <el-space>
    <router-link to="scss">To scss</router-link>
    <router-link to="pinia">To pinia</router-link>
    <router-link to="axios">To axios</router-link>
  </el-space>
  <div style="text-align: center; border: solid black 1px">
    {{ message }};Score:{{ userStore.score }};
  </div>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useUserStore } from '@/store/user'
export default defineComponent({
  name: 'App',
  components: {
  },
  setup () {
    const userStore = useUserStore()
    return {
      userStore,
      message: computed(() => userStore.getRoleMessage)
    }
  },
})
</script>

<style lang="scss" scoped>
</style>