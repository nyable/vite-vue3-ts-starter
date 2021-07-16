<template>
  <div>
    <div>{{ showMessage }}</div>
    <el-button
      style="margin-top: 20px"
      type="primary"
      size="mini"
      @click="queryHitokoko"
    >
      Request Hitokoto API
    </el-button>
  </div>
</template>

<script lang="ts">

import { computed, defineComponent, ref } from 'vue'
import { doGet } from '@/utils/http-util'
declare interface Hitokoto {
  hitokoto: string;
  from: string;
  from_who: string;
}
export default defineComponent({
  name: '',
  components: {},
  setup () {
    const result = ref<Hitokoto>({ hitokoto: '', from: '', from_who: '' })
    const queryHitokoko = async () => {
      const { data } = await doGet('https://v1.hitokoto.cn/')
      result.value = data
    }
    return {
      result,
      showMessage: computed(() => {
        const { hitokoto, from, from_who } = result.value
        return hitokoto ? `"${hitokoto}" From 《${from}》 By ${from_who || 'anonymous'}` : 'Click Button Get Hitokoto.'
      }),
      queryHitokoko
    }
  }
})
</script>
<style lang="scss" scoped>
</style>