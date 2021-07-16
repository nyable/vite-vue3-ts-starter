<template>
  <div>
    <input v-model="name" />
    <button @click="updateName">Update username</button>
  </div>
  <div><button @click="increaseDouble">Increase double score</button></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserStore } from '@/store/user'
export default defineComponent({
  setup () {
    const userStore = useUserStore()
    const name = ref<string>(userStore.username)
    const updateName = () => {
      userStore.setUserName(name.value)
    }
    const increaseDouble = () => {
      userStore.setScore(userStore.doubleScore * 2)
    }
    return { userStore, name, updateName, increaseDouble }
  },
})
</script>
<style lang="scss" scoped>
</style>